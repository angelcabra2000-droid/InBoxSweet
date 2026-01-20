const overlay = document.getElementById("overlay");
const menuPanel = document.getElementById("menuPanel");
const loginPanel = document.getElementById("loginPanel");
const registerPanel = document.getElementById("registerPanel");
const hamburger = document.getElementById("hamburger");
const cartPanel = document.getElementById("cartPanel");

function closeAllPanels() {
    menuPanel?.classList.remove("active");
    loginPanel?.classList.remove("active");
    registerPanel?.classList.remove("active");
    cartPanel?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.classList.remove("cart-open");
}

function openPanel(panel) {
    closeAllPanels();
    panel.classList.add("active");
    overlay.classList.add("active");
}

/* MENÚ */
hamburger?.addEventListener("click", () => {
    if (menuPanel.classList.contains("active")) {
        closeAllPanels();
    } else {
        openPanel(menuPanel);
    }
});

/* OVERLAY */
overlay?.addEventListener("click", closeAllPanels);

/* RESPONSIVE */
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeAllPanels();
});

/* EXPONER FUNCIONES PARA HTML */
window.abrirLogin = () => openPanel(loginPanel);
window.abrirRegister = () => openPanel(registerPanel);
window.volverALogin = () => openPanel(loginPanel);
