const track = document.querySelector('.carrusel-track');
const btnLeft = document.querySelector('.carrusel-btn.left');
const btnRight = document.querySelector('.carrusel-btn.right');
const overlay = document.querySelector('.overlay');
const overlayImg = document.querySelector('#overlayImg');
const overalyTitle = document.querySelector('#overlayTitle');
const overlayPrice = document.querySelector('#overlayPrice');
const overlayDesc = document.querySelector('#overlayDesc');
const closeBtn = document.querySelector('.cerrar-btn');


let scroll = 0;

btnRight.addEventListener('click', () => {
    scroll += 300;
    track.style.transform = `translateX(-${scroll}px)`;
});

btnLeft.addEventListener('click', () => {
    scroll -= 300;
    if (scroll < 0) scroll = 0;
    track.style.transform = `translateX(-${scroll}px)`;
});

document.querySelectorAll('.producto-card').forEach(producto => {

    producto.addEventListener('click', () => {
        const imgSrc = producto.querySelector('img').src;
        const title = producto.dataset.title;
        const price = producto.dataset.price;
        const desc = producto.dataset.desc;
        overlayImg.src = imgSrc;
        overalyTitle.innerText = title;
        overlayPrice.innerText = price;
        overlayDesc.innerText = desc;
        overlay.classList.remove('ocultar');
    });
});

closeBtn.addEventListener('click', () => {
    overlay.classList.add('ocultar');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.add('ocultar');
    }
});
