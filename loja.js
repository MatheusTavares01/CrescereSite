function redirectToPage(page) {
    window.location.href = page; // Redireciona para a página específica
}

function filterByBrand(brand) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (product.classList.contains(brand)) {
            product.style.display = 'block'; // Exibir produtos da marca selecionada
        } else {
            product.style.display = 'none'; // Ocultar produtos de outras marcas
        }
    });
}
