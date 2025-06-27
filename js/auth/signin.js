const mailInput = document.getElementById('EmailInput');
const passwordInput = document.getElementById('PasswordInput');
const btnSignin = document.getElementById('btnSignin');
const signinForn = document.getElementById('signinForm');

btnSignin.addEventListener('click', checkCredential );
function checkCredential() {
   let dataForm = new FormData(signinForn); 

    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": dataForm.get("email"),
  "password": dataForm.get("password")
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};


fetch(apiUrl + "/login", requestOptions)
  .then((response) => {
    if(response.ok){
        return response.json();
    }
    else {
       mailInput.classList.add('is-invalid');
       passwordInput.classList.add('is-invalid');
    }

  })
  .then((result) => {
    //il faut reccuperer le token et le stocker dans le localStorage
    const token = result.apiToken;
    setToken(token)
    setCookie(roleCookieName,result.roles[0],7);
    window.location.replace('/');

  })
  .catch((error) => console.error("Erreur", error));
}
