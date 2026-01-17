

hamburger.addEventListener("click", () => {
    // cerrar login/register si están abiertos
    document.getElementById("loginPanel")?.classList.remove("active");
    document.getElementById("registerPanel")?.classList.remove("active");

    hamburger.classList.toggle("active");
    mobilePanel.classList.toggle("active");
    overlay.classList.toggle("active");
});


