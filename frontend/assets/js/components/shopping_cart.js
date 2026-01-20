const openCartBtn = document.getElementById("openCart");

openCartBtn?.addEventListener("click", () => {
    closeAllPanels();
    cartPanel.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("cart-open");
});
