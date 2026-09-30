const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark' || savedTheme === 'light') {
  root.dataset.theme = savedTheme;
}

function updateThemeButton() {
  const isDark = root.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#171c1a' : '#f6f7f3';
}

themeToggle.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', root.dataset.theme);
  updateThemeButton();
});
updateThemeButton();

const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#main-navigation');

function setNavigationOpen(open) {
  mainNavigation.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

menuToggle.addEventListener('click', () => {
  setNavigationOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
mainNavigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNavigationOpen(false));
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setNavigationOpen(false);
});

const layerDetails = {
  test: ['01', 'Test layer', "Holds readable scenarios and assertions that express expected behavior from a user's point of view.", 'Requirements', 'Assertions'],
  page: ['02', 'Page object layer', 'Encapsulates page structure and user actions so UI changes stay isolated from test intent.', 'Test actions', 'Reusable interactions'],
  utility: ['03', 'Utility layer', 'Provides shared setup, configuration, waits, logging, and helpers used across the test suite.', 'Framework config', 'Shared helpers'],
  data: ['04', 'Test data layer', 'Keeps test inputs explicit and reusable, with room for generated and environment-specific data.', 'Scenario needs', 'Reliable fixtures'],
  api: ['05', 'API layer', 'Supports service-level checks and reusable requests alongside the browser test flow.', 'Service contracts', 'Validated responses'],
  reporting: ['06', 'Reporting layer', 'Collects execution outcomes and evidence so failures are easier to understand and investigate.', 'Test results', 'Actionable reports'],
  cicd: ['07', 'CI / CD layer', 'Runs the quality checks in a delivery pipeline to provide feedback throughout the development cycle.', 'Code changes', 'Continuous feedback']
};

document.querySelectorAll('.layer-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.layer-button.is-active')?.classList.remove('is-active');
    button.classList.add('is-active');
    const [index, title, description, input, output] = layerDetails[button.dataset.layer];
    document.querySelector('#detail-index').textContent = index;
    document.querySelector('#detail-title').textContent = title;
    document.querySelector('#detail-description').textContent = description;
    document.querySelector('#detail-input').textContent = input;
    document.querySelector('#detail-output').textContent = output;
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelector('#current-year').textContent = new Date().getFullYear();

const racingPanel = document.querySelector('#racing-panel');
const racingTrigger = document.querySelector('.racing-trigger');
const raceStatus = document.querySelector('#race-status');
const raceCar = document.querySelector('.race-car');
const raceStart = document.querySelector('.race-start');
const raceKeys = ['ArrowRight', 'ArrowDown', 'ArrowRight', 'ArrowUp'];
let racePosition = 0;
let raceTimer;
let raceActive = false;

function toggleRace(open) {
  racingPanel.hidden = !open;
  racingTrigger.setAttribute('aria-expanded', String(open));
  if (open) raceStart.focus();
}

racingTrigger.addEventListener('click', () => toggleRace(racingPanel.hidden));
document.querySelector('.racing-close').addEventListener('click', () => toggleRace(false));
raceStart.addEventListener('click', () => {
  clearTimeout(raceTimer);
  racePosition = 0;
  raceActive = true;
  raceCar.style.marginLeft = '0%';
  raceStatus.textContent = 'Test running. Use the arrow keys!';
  raceTimer = setTimeout(() => {
    raceActive = false;
    raceStatus.textContent = 'Run timed out. Start another test run.';
  }, 7000);
});
document.addEventListener('keydown', (event) => {
  if (!raceActive || !['ArrowRight', 'ArrowDown', 'ArrowUp', 'ArrowLeft'].includes(event.key)) return;
  if (event.key === raceKeys[racePosition]) {
    event.preventDefault();
    racePosition += 1;
    raceCar.style.marginLeft = `${(racePosition / raceKeys.length) * 82}%`;
    if (racePosition === raceKeys.length) {
      clearTimeout(raceTimer);
      raceActive = false;
      raceStatus.textContent = 'All checks passed. Nice run!';
    } else {
      raceStatus.textContent = `Check ${racePosition} of ${raceKeys.length} passed.`;
    }
  } else {
    raceStatus.textContent = 'Assertion failed. Keep following the sequence.';
  }
});