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

const navigationLinks = [...mainNavigation.querySelectorAll('a')];
const sectionObserver = new IntersectionObserver((entries) => {
  const visibleSections = entries
    .filter((entry) => entry.isIntersecting)
    .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
  if (!visibleSections.length) return;

  const activeId = visibleSections[0].target.id;
  navigationLinks.forEach((link) => {
    if (link.hash === `#${activeId}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}, { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.1, 0.25, 0.5] });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach((card) => {
      card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    });
  });
});

const architectureDetails = {
  specs: ['LAYER 01 / TEST SPECIFICATIONS', 'Describe CRM behavior with clear preconditions, actions, expected results, and assertions. Keep positive, negative, boundary, and regression cases traceable to business risks.'],
  runner: ['LAYER 02 / TEST RUNNER', 'Use Playwright Test configuration, fixtures, hooks, and controlled execution. Keep JavaScript and TypeScript specs in separate implementations rather than mixing their test files.'],
  pages: ['LAYER 03 / PAGE OBJECT MODEL', 'Encapsulate Salesforce page locators and UI interactions behind reusable page classes so tests express intent instead of repeating browser mechanics.'],
  workflows: ['LAYER 04 / BUSINESS WORKFLOWS', 'Compose reusable CRM operations such as creating a lead, assigning it, converting it, and verifying related records across a complete user journey.'],
  utilities: ['LAYER 05 / UTILITIES', 'Centralize safe test data generation, environment configuration, logging, and shared helpers. Keep data explicit and tests isolated.'],
  api: ['LAYER 06 / API LAYER', 'Where a Salesforce API environment is configured, validate requests, response status and payload, business rules, and consistency with UI-visible records. This layer is planned, not verified here.'],
  reports: ['LAYER 07 / REPORTING', 'Capture HTML results, screenshots, traces, and failure diagnostics when configured. Use artifacts to investigate failures, not as a substitute for root-cause analysis.'],
  cicd: ['LAYER 08 / CI/CD', 'Run checks from the configured pipeline with explicit environment and secret management. A Salesforce-specific pipeline is a planned enhancement; existing repository workflows belong to separate projects.']
};

const architectureButtons = document.querySelectorAll('.flow-node');
const architectureLabel = document.querySelector('#layer-label');
const architectureDescription = document.querySelector('#layer-description');

architectureButtons.forEach((button) => {
  button.addEventListener('click', () => {
    architectureButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });
    const [label, description] = architectureDetails[button.dataset.layer];
    architectureLabel.textContent = label;
    architectureDescription.textContent = description;
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
