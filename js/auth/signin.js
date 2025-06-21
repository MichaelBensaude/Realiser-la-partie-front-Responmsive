const mailInput = document.getElementById('EmailInput');
const passwordInput = document.getElementById('PasswordInput');
const btnSignin = document.getElementById('btnSignin');

btnSignin.addEventListener('click', checkCredential );
function checkCredential() {
   //informnation factice il faudra a la place appeler l'API pour verifier les credentials en bdd

   if (mailInput.value === 'test@mail.fr' && passwordInput.value === 'password') {
 
      // Simulate successful login but in a real application, you would call an API to verify credentials
    const token = 'jskdfldsjfklreyuiyrieoyriewyryeibcxnvbncxvnb';
    setToken(token)
       window.location.replace('/');
       //placer le toker en cookie ou localStorage
     

   } else {
       mailInput.classList.add('is-invalid');
       passwordInput.classList.add('is-invalid');
   }
}