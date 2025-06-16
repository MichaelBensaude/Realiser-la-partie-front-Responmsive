import Route from './Route.js';
// define all routes here

export const allRoutes = [
  new Route("/Realiser-la-partie-front-Responmsive/", "Accueil", "pages/home.html"),
  new Route("/Realiser-la-partie-front-Responmsive/galerie", "Galerie", "pages/galerie.html"),
  new Route("/Realiser-la-partie-front-Responmsive/signin", "Se Connecter", "pages/auth/signin.html"),
  new Route("/Realiser-la-partie-front-Responmsive/signup", "S'inscrire", "pages/auth/signup.html"),
  new Route("/Realiser-la-partie-front-Responmsive/account", "Mon Compte", "pages/auth/account.html"),
  new Route("/Realiser-la-partie-front-Responmsive/editPassword", "Modifier le mot de passe", "pages/auth/editPassword.html"),
  new Route("/Realiser-la-partie-front-Responmsive/reservations", "Mes Réservations", "pages/reservations/allResa.html"),
  new Route("/Realiser-la-partie-front-Responmsive/reservation", "Réserver une table", "pages/reservations/reserver.html")
];

// le titre s affichera ici 

export const websiteName = 'Quai Antique';


