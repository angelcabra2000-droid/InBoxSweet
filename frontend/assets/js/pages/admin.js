// ===============================
// MENÚ HAMBURGUESA (ADMIN)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menuPanel = document.getElementById("menuPanel");

    if (hamburger && menuPanel) {
        hamburger.addEventListener("click", () => {
            menuPanel.classList.toggle("active");
        });
    }
});

// ===============================
// CAMBIO DE VISTAS
// ===============================
function mostrarPedidos() {
    const pedidos = document.getElementById("seccion-pedidos");
    const productos = document.getElementById("seccion-productos");
    const menuPanel = document.getElementById("menuPanel");

    if (pedidos && productos) {
        pedidos.style.display = "block";
        productos.style.display = "none";
    }

    if (menuPanel) {
        menuPanel.classList.remove("active");
    }
}

function mostrarProductos() {
    const pedidos = document.getElementById("seccion-pedidos");
    const productos = document.getElementById("seccion-productos");
    const menuPanel = document.getElementById("menuPanel");

    if (pedidos && productos) {
        pedidos.style.display = "none";
        productos.style.display = "block";
    }

    if (menuPanel) {
        menuPanel.classList.remove("active");
    }
}
