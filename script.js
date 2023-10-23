var popup = document.getElementById("popup");
var loginButton = document.getElementById("loginButton");
var myAccountLink = document.getElementById("myAccount");

function togglePopup() {
    popup.style.display = popup.style.display === "none" || popup.style.display === "" ? "flex" : "none";
}

loginButton.addEventListener("click", togglePopup);
myAccountLink.addEventListener("click", togglePopup);

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "cibertec" && password === "cibertec") {
        window.location.href = "https://www.google.com";
    } else {
        errorMessage.textContent = "Error: Usuario o contraseña incorrectos.";
    }
}
