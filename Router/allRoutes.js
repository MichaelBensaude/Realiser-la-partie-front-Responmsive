import Route from './Route.js';
// define all routes here

const base = "/Realiser-la-partie-front-Responmsive";

export const allRoutes = [
  new Route(`${base}/`, "Accueil", "pages/home.html"),
  new Route(`${base}/galerie`, "Galerie", "pages/galerie.html"),
  new Route(`${base}/signin`, "Se Connecter", "pages/auth/signin.html"),
  new Route(`${base}/signup`, "S'inscrire", "pages/auth/signup.html"),
  new Route(`${base}/account`, "Mon Compte", "pages/auth/account.html"),
  new Route(`${base}/editPassword`, "Modifier le mot de passe", "pages/auth/editPassword.html"),
  new Route(`${base}/reservations`, "Mes Réservations", "pages/reservations/allResa.html"),
  new Route(`${base}/reservation`, "Réserver une table", "pages/reservations/reserver.html")
];

// le titre s affichera ici 

export const websiteName = 'Quai Antique';


