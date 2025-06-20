import Route from './Route.js';
// define all routes here
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/galerie", "Galerie", "/pages/galerie.html"),
  new Route("/signin", "Se Connecter", "/pages/auth/signin.html", "/js/auth/signin.js"),
  new Route("/signup", "S'inscrire", "/pages/auth/signup.html", "/js/auth/signup.js"),
  new Route("/account", "Mon Compte", "/pages/auth/account.html"),
  new Route("/editPassword", "Modifier le mot de passe", "/pages/auth/editPassword.html"),
  new Route("/reservations", "Mes Réservations", "/pages/reservations/allResa.html"),
  new Route("/reservation", "Réserver une table", "/pages/reservations/reserver.html")
];

// le titre s affichera ici 

export const websiteName = 'Quai Antique';


