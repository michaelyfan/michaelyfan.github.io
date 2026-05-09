(function () {
  const root = document.documentElement;
  const app = document.querySelector('.app');
  const mobilebar = document.querySelector('.mobilebar');
  const menuToggle = document.querySelector('.menu-toggle');
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const navLinks = document.querySelectorAll('a[data-nav]');
  const sections = Array.from(document.querySelectorAll('[data-spy]'));

  // ---------- theme ----------
  function applyTheme(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem('mf-theme', theme); } catch (e) {}
    themeToggles.forEach(btn => {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }
  let initialTheme = 'light';
  try { initialTheme = localStorage.getItem('mf-theme') || 'light'; } catch (e) {}
  applyTheme(initialTheme);
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  });

  // ---------- routing ----------
  function setRoute(route) {
    app.dataset.route = route;
    navLinks.forEach(a => {
      const isExtras = a.dataset.nav === 'extras';
      if (route === 'extras') {
        a.classList.toggle('active', isExtras);
      } else if (isExtras) {
        a.classList.remove('active');
      }
    });
    if (route === 'extras') window.scrollTo(0, 0);
  }
  function routeFromHash() {
    return window.location.hash === '#extras' ? 'extras' : 'main';
  }
  setRoute(routeFromHash());
  window.addEventListener('hashchange', () => setRoute(routeFromHash()));

  // ---------- nav clicks ----------
  function closeMenu() {
    if (mobilebar) {
      mobilebar.classList.remove('open');
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = 'menu';
      }
    }
  }
  function gotoSection(id) {
    const el = document.querySelector('[data-spy="' + id + '"]');
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 40;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  function gotoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      const target = a.dataset.nav;
      if (target === 'extras') {
        closeMenu();
        return;
      }
      e.preventDefault();
      closeMenu();
      const goAfterRoute = () => {
        if (target === 'top') gotoTop();
        else gotoSection(target);
      };
      if (app.dataset.route === 'extras') {
        if (window.location.hash === '#extras') {
          history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        setRoute('main');
        requestAnimationFrame(goAfterRoute);
      } else {
        goAfterRoute();
      }
    });
  });

  // ---------- mobile menu ----------
  if (menuToggle && mobilebar) {
    menuToggle.addEventListener('click', () => {
      const open = !mobilebar.classList.contains('open');
      mobilebar.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuToggle.textContent = open ? 'close' : 'menu';
    });
  }

  // ---------- scroll-spy ----------
  function updateActive() {
    if (app.dataset.route !== 'main') return;
    const y = window.scrollY + 140;
    let current = sections[0] && sections[0].dataset.spy;
    for (const el of sections) {
      if (el.offsetTop <= y) current = el.dataset.spy;
    }
    navLinks.forEach(a => {
      if (a.dataset.nav === 'extras') return;
      a.classList.toggle('active', a.dataset.nav === current);
    });
  }
  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', updateActive);

  // ---------- footer year ----------
  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
