const galerieImage = document.getElementById("allImages");
//recuperer les images depuis le serveur
let titre = "Titre de l'image";
let imgSource = "../images/pizza.jpg";
let monImage = getImage(titre, imgSource);

galerieImage.innerHTML =  monImage;



function getImage(titre, urlImage){
    sanitizeHtml(titre);
    sanitizeHtml(urlImage);

    return `
    <div class="col p-3">
        <div class="img-card text-white">
            <img src="${urlImage}" class="rounded w-100" alt="${titre}" />
            <p class="titre-image">${titre}</p>
            <div class="action-image-buttons" data-show="admin">
               <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal">
                    <i class="bi bi-pencil"></i>
                </button>
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#SuppressionPhotoModal">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>`;
}



