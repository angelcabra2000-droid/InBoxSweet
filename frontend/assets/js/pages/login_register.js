


function abrirLogin() {
    mobilePanel?.classList.remove("active");
    document.getElementById("hamburger")?.classList.remove("active");

    loginPanel.classList.add("active");
    registerPanel.classList.remove("active");
    overlay.classList.add("active");
}


function abrirRegister() {
    registerPanel.classList.add("active");
    loginPanel.classList.remove("active");
    overlay.classList.add("active");
}

function abrirRegisterDesdeLogin() {
    loginPanel.classList.remove("active");
    registerPanel.classList.add("active");
}

function volverALogin() {
    registerPanel.classList.remove("active");
    loginPanel.classList.add("active");
}

function cerrarAuth() {
    loginPanel.classList.remove("active");
    registerPanel.classList.remove("active");
}
