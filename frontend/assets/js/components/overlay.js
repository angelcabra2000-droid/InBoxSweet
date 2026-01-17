const overlay = document.getElementById("overlay");

const menuPanel = document.getElementById("menuPanel");
const loginPanel = document.getElementById("loginPanel");
const registerPanel = document.getElementById("registerPanel");
const hamburger = document.getElementById("hamburger");

function closeAllPanels() {
    menuPanel.classList.remove("active");
    loginPanel.classList.remove("active");
    registerPanel.classList.remove("active");
    overlay.classList.remove("active");
}

function openPanel(panel) {
    closeAllPanels();
    panel.classList.add("active");
    overlay.classList.add("active");
}

/* MENÚ */
hamburger.addEventListener("click", () => {
    openPanel(menuPanel);
});

/* LOGIN */
function abrirLogin() {
    openPanel(loginPanel);
}

/* REGISTER */
function abrirRegister() {
    openPanel(registerPanel);
}

/* OVERLAY CIERRA TODO */
overlay.addEventListener("click", closeAllPanels);

/* RESPONSIVE */
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeAllPanels();
    }
});
