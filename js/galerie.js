const galerieImage = document.getElementsById("allImages");
//recuperer les images depuis le serveur
let titre = "Titre de l'image";
let imgSource = "../images/food.jpg";
let monImage = getImage(titre, imgSource);

galerieImage.innerHTML =  monImage;



function getImage(titre, urlImage){
   titre = sanitizeHtml(titre);
   urlImage = sanitizeHtml(urlImage);
    return `<div class="col p-3">
<div class="img-card text-white">
    <img src="${urlImage}" class="rounded w-100"/>
    <p class="titre-image">${titre}</p>
</div>
        </div>`;



}
