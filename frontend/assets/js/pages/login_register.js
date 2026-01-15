const loginPanel = document.getElementById("loginPanel");
const registerPanel = document.getElementById("registerPanel");
const overlay = document.getElementById("overlay");

/* Abrir login */
function abrirLogin() {
    loginPanel.classList.add("active");
    registerPanel.classList.remove("active");
    overlay.classList.add("active");
}

/* Abrir register */
function abrirRegister() {
    registerPanel.classList.add("active");
    loginPanel.classList.remove("active");
    overlay.classList.add("active");
}

/* Desde login → ir a register */
function abrirRegisterDesdeLogin() {
    loginPanel.classList.remove("active");
    registerPanel.classList.add("active");
}

/* Desde register → volver a login */
function volverALogin() {
    registerPanel.classList.remove("active");
    loginPanel.classList.add("active");
}

/* Cerrar todo */
function cerrarPaneles() {
    loginPanel.classList.remove("active");
    registerPanel.classList.remove("active");
    overlay.classList.remove("active");
}
