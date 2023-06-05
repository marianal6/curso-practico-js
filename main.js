const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const productDetailContainer = document.querySelector('#productDetail');
const darken = document.querySelector('.darken');




let scrollPosition = { x: 0, y: 0 }; // Variable para almacenar la posición de desplazamiento actual

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!desktopMenu.classList.contains('inactive')) {
        closeProductDetailAside();
    }
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
        darken.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        openProductDetailAside();
    }
    if (!isCarritoClosed) { // Verificar si el CarritoAside está cerrado
        shoppingCartContainer.classList.remove('inactive');
        darken.classList.remove('inactive');
    }

}

function toggleMobileMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideMenuClosed) {
        closeCarritoAside(); // Cerrar el CarritoAside
    }
    closeProductDetailAside(); // Cerrar el ProductDetailAside

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
        darken.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
        darken.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
        darken.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
    darken.classList.toggle('inactive');
    isCarritoClosed = shoppingCartContainer.classList.contains('inactive'); // Actualizar el estado del CarritoAside
}

function openProductDetailAside() {
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    darken.classList.remove('inactive');
    // Guardar la posición de desplazamiento actual
    scrollPosition = { x: window.scrollX, y: window.scrollY };

    productDetailContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeProductDetailAside() {
    if (!productDetailContainer.classList.contains('inactive')) {
        productDetailContainer.classList.add('inactive');
        darken.classList.add('inactive');

    }
    window.scrollTo(scrollPosition.x, scrollPosition.y, { behavior: 'smooth', block: 'start' });
}


const productList = [];

productList.push({
    name: 'Contorno de ojos',
    price: 59900,
    image: './imagenes/contorno.jpg',
    description: 'Descripción del producto Contorno de ojos',
});
productList.push({
    name: 'Desodorante natural de piedra alumbre',
    price: 29900,
    image: './imagenes/desodorante.jpg',
    description: 'Descripción del producto Desodorante natural de piedra alumbre',

});
productList.push({
    name: 'Jabón facial',
    price: 39900,
    image: './imagenes/jabon.jpg',
    description: 'Descripción del producto Jabón facial',
});
productList.push({
    name: 'Leche desmaquilladora',
    price: 36900,
    image: './imagenes/leche.jpg',
    description: 'Descripción del producto Leche desmaquilladora',
});
productList.push({
    name: 'Maquillaje eco-natural',
    price: 1000,
    image: './imagenes/maquillaje.jpg',
    description: 'Descripción del producto Maquillaje eco-natural',
});
productList.push({
    name: 'Oleum humectante',
    price: 39900,
    image: './imagenes/oleum.jpg',
    description: 'Descripción del producto Oleum humectante',
});
productList.push({
    name: 'Protector solar eco-natural',
    price: 89900,
    image: './imagenes/protector.jpg',
    description: 'Descripción del producto Protector solar eco-natural',
});
productList.push({
    name: 'Serum facial exfoliante',
    price: 36900,
    image: './imagenes/serum.jpg',
    description: 'Descripción del producto Serum facial exfoliante',
});
productList.push({
    name: 'Contorno de ojos',
    price: 59900,
    image: './imagenes/contorno.jpg',
    description: 'Descripción del producto Contorno de ojos',
});
productList.push({
    name: 'Desodorante natural de piedra alumbre',
    price: 29900,
    image: './imagenes/desodorante.jpg',
    description: 'Descripción del producto Desodorante natural de piedra alumbre',

});
productList.push({
    name: 'Jabón facial',
    price: 39900,
    image: './imagenes/jabon.jpg',
    description: 'Descripción del producto Jabón facial',
});
productList.push({
    name: 'Leche desmaquilladora',
    price: 36900,
    image: './imagenes/leche.jpg',
    description: 'Descripción del producto Leche desmaquilladora',
});
productList.push({
    name: 'Maquillaje eco-natural',
    price: 1000,
    image: './imagenes/maquillaje.jpg',
    description: 'Descripción del producto Maquillaje eco-natural',
});
productList.push({
    name: 'Oleum humectante',
    price: 39900,
    image: './imagenes/oleum.jpg',
    description: 'Descripción del producto Oleum humectante',
});
productList.push({
    name: 'Protector solar eco-natural',
    price: 89900,
    image: './imagenes/protector.jpg',
    description: 'Descripción del producto Protector solar eco-natural',
});

const detailsProduct = product => {
    openProductDetailAside();

    const detailImage = document.querySelector('#productDetail>img');
    const detailPrice = document.querySelector('.product-info p:nth-child(1)');
    const detailName = document.querySelector('.product-info p:nth-child(2)');
    const detailDescription = document.querySelector('.product-info p:nth-child(3)');

    detailImage.setAttribute('src', product.image);
    detailPrice.innerText = `$${product.price}`;
    detailName.innerText = product.name;
    detailDescription.innerText = product.description;
};



function renderProducts(arr) {
    for (let i = 0; i < arr.length; i++) {
        const product = arr[i];
        const ProductCard = document.createElement('div');
        ProductCard.classList.add('product-card');

        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);

        ProductImg.addEventListener('click', function () {
            detailsProduct(product);
        });

        const ProductInfo = document.createElement('div');
        ProductInfo.classList.add('product-info');

        const ProductInfoDiv = document.createElement('div');

        const ProductPrice = document.createElement('p');
        ProductPrice.innerText = '$' + product.price;
        const ProductName = document.createElement('p');
        ProductName.innerText = product.name;

        ProductInfoDiv.appendChild(ProductPrice);
        ProductInfoDiv.appendChild(ProductName);

        const ProductInfoFigure = document.createElement('figure');
        const ProductInfoFigureImg = document.createElement('img');
        ProductInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        ProductInfoFigure.appendChild(ProductInfoFigureImg);

        ProductInfo.appendChild(ProductInfoDiv);
        ProductInfo.appendChild(ProductInfoFigure);

        ProductCard.appendChild(ProductImg);
        ProductCard.appendChild(ProductInfo);

        cardsContainer.appendChild(ProductCard);


    }
}




renderProducts(productList);