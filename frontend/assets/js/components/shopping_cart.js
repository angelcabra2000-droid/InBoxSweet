const openCartBtn = document.getElementById("openCart");
const cartPanel = document.getElementById("cartPanel");
const closeCartBtn = document.getElementById("closeCart");

// Abrir carrito
openCartBtn.addEventListener("click", () => {
    closeAllPanels(); // cierra menú, login y register
    cartPanel.classList.add("active");
    overlay.classList.add("active");
});

// Cerrar carrito
closeCartBtn.addEventListener("click", () => {
    cartPanel.classList.remove("active");
    overlay.classList.remove("active");
});
