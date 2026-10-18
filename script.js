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
  specs: ['LAYER 01 / TEST SPECIFICATIONS', 'Keep intent visible: describe the user or service behavior under test and the result that matters.'],
  runner: ['LAYER 02 / TEST RUNNER', 'Organize discovery and execution. Repository examples use TestNG or Playwright; exact runner settings belong to each project.'],
  adapters: ['LAYER 03 / PAGE OBJECTS & API CLIENTS', 'Encapsulate browser interactions and reusable service requests so test intent is less coupled to implementation detail.'],
  shared: ['LAYER 04 / SHARED CONFIGURATION & DATA', 'Keep configuration, fixtures, and helpers explicit and reusable. Isolate tests and environments where supported by the project.'],
  application: ['LAYER 05 / APPLICATION UNDER TEST', 'Exercise the browser journey or service endpoint that matches the risk being tested.'],
  assertions: ['LAYER 06 / ASSERTIONS & VALIDATION', 'Compare actual behavior with an expected result, including response status, payload, schema, and business rules where relevant.'],
  reports: ['LAYER 07 / REPORTS & FAILURE ANALYSIS', 'Use execution output and evidence to understand what failed and investigate the cause; a report does not replace that investigation.']
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
