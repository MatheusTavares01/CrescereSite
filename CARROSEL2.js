// Seleciona todos os elementos de imagem dentro do carrossel
const carouselImages = document.querySelectorAll('.carousel-inner img');
// Índice da imagem atual no carrossel
let currentIndex = 0;
// Intervalo para mudar de imagem automaticamente (3 segundos)
const intervalTime = 3000;
// Timer para troca automática de imagem
let slideInterval;

// Função para iniciar o carrossel
function startCarousel() {
    // Adiciona a classe 'active' à primeira imagem
    carouselImages[currentIndex].classList.add('active');
    // Inicia o intervalo para troca automática de imagem
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Função para avançar para a próxima imagem
function nextSlide() {
    // Remove a classe 'active' da imagem atual
    carouselImages[currentIndex].classList.remove('active');
    // Incrementa o índice para a próxima imagem
    currentIndex = (currentIndex + 1) % carouselImages.length;
    // Adiciona a classe 'active' à nova imagem
    carouselImages[currentIndex].classList.add('active');
}

// Função para exibir o modal com a imagem ampliada ao clicar na imagem do carrossel
function openModal() {
    // Mostra o modal
    modal.style.display = 'flex';
    // Obtém o caminho da imagem ampliada
    const imgSrc = carouselImages[currentIndex].getAttribute('src');
    // Define o caminho da imagem no modal
    modalImage.setAttribute('src', imgSrc);
}

// Função para fechar o modal ao clicar no botão de fechar (X)
function closeModal() {
    // Esconde o modal
    modal.style.display = 'none';
}

// Evento de clique para abrir o modal ao clicar na imagem do carrossel
carouselImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index; // Define o índice da imagem clicada
        openModal();
    });
});

// Evento de clique para fechar o modal ao clicar no botão de fechar (X)
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

// Inicia o carrossel
startCarousel();
