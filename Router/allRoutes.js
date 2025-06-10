import Route from './Route.js';
// define all routes here
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route("/signin", "Se Connecter", "/pages/signin.html"),
];

// le titre s affichera ici 

export const websiteName = 'Quai Antique';


