// implémenter le JS de la page
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput"); // correction ici
const inputConfirmPassword = document.getElementById("ConfirmPasswordInput"); // correction ici
const btnValidation = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formulaire-inscription");
// add event listeners to inputs to validate form on keyup
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputConfirmPassword.addEventListener("keyup", validateForm);

btnValidation.addEventListener("click", InscrireUtilisateur);

// écoute de mes input
function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const emailOk = validateEmail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const confirmPasswordOk = validateConfirmPassword(inputPassword, inputConfirmPassword);

    if (nomOk && prenomOk && emailOk && passwordOk && confirmPasswordOk) {
        btnValidation.disabled = false;
    } else {
        btnValidation.disabled = true;
    }
}

function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value.trim();
    if (passwordRegex.test(passwordUser)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateConfirmPassword(passwordInput, confirmInput) {
    if (confirmInput.value.trim() !== "" && confirmInput.value === passwordInput.value) {
        confirmInput.classList.add("is-valid");
        confirmInput.classList.remove("is-invalid");
        return true;
    } else {
        confirmInput.classList.remove("is-valid");
        confirmInput.classList.add("is-invalid");
        return false;
    }
}

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value.trim();
    if (mailUser.match(emailRegex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateRequired(input) {
    if (input.value.trim() !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }

}

function InscrireUtilisateur(){
    const dataForm = new FormData(formInscription);

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "firstName": dataForm.get("prenom"),
  "lastName": dataForm.get("nom"),
  "email": dataForm.get("email"),
  "password": dataForm.get("password")
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
console.log("Données envoyées :", raw);

fetch(apiUrl + "/registration", requestOptions)
  .then((response) => {
    if(response.ok){
        return response.json();
    }
    else {
        alert("Erreur lors de l'inscription. Veuillez vérifier vos informations.");
    }

  })
  .then((result) => {
    alert("Bravo " + dataForm.get("prenom") + ", inscription réussie, vous pouvez maintenant vous connecter.");
    document.location.href="/signin";

  })
  .catch((error) => console.error("Erreur", error));
}
