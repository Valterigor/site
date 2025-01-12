// Script para um efeito de fade-in para as imagens enquanto elas são carregadas
window.addEventListener("load", function() {
    const photos = document.querySelectorAll('.photo img');
    photos.forEach((photo, index) => {
        photo.style.animation = `fadeIn 1s ease ${index * 0.2}s forwards`;
    });
});

