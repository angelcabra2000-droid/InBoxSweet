const posiciones = {};

function scrollCarrusel(id, direccion) {
    const track = document.getElementById(id);
    const viewport = track.parentElement;
    const cardWidth = track.children[0].offsetWidth + 20;

    if (!posiciones[id]) posiciones[id] = 0;

    posiciones[id] += direccion * cardWidth;

    const maxScroll = track.scrollWidth - viewport.offsetWidth;

    if (posiciones[id] < 0) posiciones[id] = 0;
    if (posiciones[id] > maxScroll) posiciones[id] = maxScroll;

    track.style.transform = `translateX(-${posiciones[id]}px)`;
}
