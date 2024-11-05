const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function showImage() {
    images.forEach(image => {
        image.style.opacity = '0';
    });
    images[index].style.opacity = '1';
}

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage();
}

showImage();

setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos



