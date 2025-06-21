const tokenCookieName = 'accesstoken';
function setToken(token){
    // Set the token in a cookie
    setCookie(tokenCookieName, token, 7); // Expires in 7 days
}

function getToken() {
    // Get the token from the cookie
    return getCookie(tokenCookieName);
}
function deleteToken() {
    // Delete the token cookie
    eraseCookie(tokenCookieName);
}

function setCookie (name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function isConnected() {

if (getToken() === null || getToken() === undefined ){
       return false;
    } else {
        return true;
    }
}

if (isConnected()) {
alert('je suis connecté');
} else {
alert('je ne suis pas connecté');
}