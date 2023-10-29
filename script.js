var popup = document.getElementById("popup");
var loginButton = document.getElementById("loginButton");
var closeButton = document.getElementById("closeButton");
var myAccountLink = document.getElementById("myAccount");
var errorMessage = document.getElementById("error-message");

function togglePopup() {
    popup.style.display = popup.style.display === "none" || popup.style.display === "" ? "flex" : "none";
    errorMessage.textContent = ""; // Limpiar el mensaje de error al mostrar el popup
}

loginButton.addEventListener("click", function() {
    validateLogin();
});

closeButton.addEventListener("click", function() {
    togglePopup();
});

myAccountLink.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el enlace "Mi cuenta" redireccione
    togglePopup();
});

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "cibertec" && password === "cibertec") {
        errorMessage.textContent = "Usuario correcto";
        setTimeout(function() {
            window.location.href = "https://www.google.com";
        }, 1500); // Redireccionar después de 1.5 segundos (1500 milisegundos)
    } else {
        errorMessage.textContent = "Error: Usuario o contraseña incorrectos.";
    }
}


/* Estilos para formulario */

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
        alert("Se requiere llenar todos los campos.");
    } else if (!correo.includes("@")) {
        alert("Ingrese un correo electrónico válido.");
    } else {
        alert("Mensaje enviado.");
        // Limpiar campos
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("mensaje").value = "";
    }
}

