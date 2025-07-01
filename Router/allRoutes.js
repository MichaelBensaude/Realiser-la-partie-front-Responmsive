import Route from './Route.js';
// define all routes here
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html",[]),
  new Route("/galerie", "Galerie", "/pages/galerie.html",[],"/js/galerie.js"),
  new Route("/signin", "Se Connecter", "/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js"),
  new Route("/signup", "S'inscrire", "/pages/auth/signup.html",["disconnected"], "/js/auth/signup.js"),
  new Route("/account", "Mon Compte", "/pages/auth/account.html",["admin","client"]),
  new Route("/editPassword", "Modifier le mot de passe", "/pages/auth/editPassword.html",["admin","client"]),
 new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
 new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
];

// le titre s affichera ici 

export const websiteName = 'Quai Antique';


