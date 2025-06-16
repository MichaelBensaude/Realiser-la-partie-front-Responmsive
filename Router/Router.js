import { allRoutes } from './routes.js';

function navigateTo(path) {
  const route = allRoutes.find(r => r.path === path);
  if (!route) {
    document.getElementById('main-page').innerHTML = "<h1>Page non trouvée</h1>";
    return;
  }

  fetch(route.htmlFile)
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-page').innerHTML = html;
      document.title = `${route.name} - Quai Antique`;
    });
}

window.addEventListener('DOMContentLoaded', () => {
  navigateTo(window.location.pathname);

  document.body.addEventListener('click', e => {
    const link = e.target.closest('a.nav-link');
    if (link) {
      e.preventDefault();
      const href = link.getAttribute('href');
      history.pushState(null, '', href);
      navigateTo(href);
    }
  });
});

window.addEventListener('popstate', () => {
  navigateTo(window.location.pathname);
});
