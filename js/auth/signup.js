// implémenter le JS de la page
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput"); // correction ici
const inputConfirmPassword = document.getElementById("ConfirmPasswordInput"); // correction ici
const btnValidation = document.getElementById("btn-validation-inscription");

// add event listeners to inputs to validate form on keyup
[inputNom, inputPrenom, inputEmail, inputPassword, inputConfirmPassword].forEach(input => {
    input.addEventListener("keyup", validateForm);
});

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
