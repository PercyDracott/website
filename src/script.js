const heroName = document.querySelector('.hero-name');
const nav = document.querySelector('nav');
const navNameEl = document.querySelector('.nav-name-text');



// Update nav text to match hero name
if (navNameEl) navNameEl.textContent = heroName.textContent;

let observer;

function initObserver() {
  if (window.innerWidth > 810) {
    if (!observer) {
      observer = new IntersectionObserver(([entry]) => {
        nav.classList.toggle('visible', !entry.isIntersecting);
      }, { threshold: 0 });
      observer.observe(heroName);
    }
  } else {
    // Remove observer on small screens
    if (observer) {
      observer.disconnect();
      observer = null;
      nav.classList.remove('visible'); // ensure nav hidden on small screens
    }
  }
}

// Initialize on load
initObserver();

// Re-evaluate on resize
window.addEventListener('resize', initObserver);