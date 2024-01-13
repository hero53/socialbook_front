// authGuard.js

export default function(to, from, next) {
    const isLoggedIn = sessionStorage.getItem("token") !== null;
  
    if ((to.name === 'register' || to.name === 'login') && isLoggedIn) {
      // Rediriger les routes register et login vers home si l'utilisateur est connecté
      next({ name: 'home' });
    } else if (!isLoggedIn) {
      // Rediriger l'utilisateur vers la page de connexion s'il n'est pas connecté
      next({ name: 'login' });
    } else {
      // Autoriser la navigation si l'utilisateur est connecté
      next();
    }
  }
  