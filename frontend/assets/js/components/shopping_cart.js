const openCartBtn = document.getElementById("openCart");
const cartPanel = document.getElementById("cartPanel");

// Abrir carrito
openCartBtn.addEventListener("click", () => {
    closeAllPanels();
    cartPanel.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("cart-open");
});
