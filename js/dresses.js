var cardSelectDress = document.querySelectorAll('.dresses-card__img');
const sectionProduct = document.getElementById('product-description');

const openSection = (cardSelect, section) => {
    cardSelect.addEventListener('click', () => {
        section.style.display = 'block'
    })
}

const closeIcon = document.querySelector('.close-icon__btn');
const closeSection = (section, iconX) => {
    iconX.addEventListener('click', () => {
        section.style.display = 'none';
    })
}


/**------------------------------- VESTIDDO IMAGENES ------------------------------------------- */
const spaceImgEmpty = document.querySelectorAll('.product-img');
const img1 = [
    'assets/img/MPBdress1.jpg',
    'assets/img/MPBdress1.jpg',
    'assets/img/MPBdress1.jpg'
];
const img2 = [
    'assets/img/MPBdress2.jpg',
    'assets/img/MPBdress2.jpg',
    'assets/img/MPBdress2.jpg'
];
const img3 = [
    'assets/img/MPBdress3.jpg',
    'assets/img/MPBdress3.jpg',
    'assets/img/MPBdress3.jpg'
];
const img4 = [
    'assets/img/MPBdress4.jpg',
    'assets/img/MPBdress4.jpg',
    'assets/img/MPBdress4.jpg'
];
const img5 = [
    'assets/img/MPBdress5.jpg',
    'assets/img/MPBdress5.jpg',
    'assets/img/MPBdress5.jpg'
];
const img6 = [
    'assets/img/MPBdress6.jpg',
    'assets/img/MPBdress6.jpg',
    'assets/img/MPBdress6.jpg'
];
const img7 = [
    'assets/img/MPBdress7.jpg',
    'assets/img/MPBdress7.jpg',
    'assets/img/MPBdress7.jpg'
];
/**array de las arrays de imagenes de cada producto */
const imagesDress = [img1, img2, img3, img4, img5, img6, img7];
/**funcion que permite agregar una imagen a un elemento imagen vacio */
const putImg = (emptyImg, newImg) => {
    emptyImg.src = newImg;
}
/**funcion que permite rellenar con imagenes varios elementos de imagen vacio recurriendod a la funcion anterior */
const fillImg = (emptyImg, newImg) => {
    putImg(emptyImg[0], newImg[0])
    putImg(emptyImg[1], newImg[0])
    putImg(emptyImg[2], newImg[1])
    putImg(emptyImg[3], newImg[2])
}
/**funcion que permite rellenar cada producto con sus imagenes respectivas */
const addImgDress = (cardSelect, emptyImg, newImg) => {
    cardSelect.addEventListener('click', function () {
        fillImg(emptyImg, newImg);
    })
}
/**permite el cambio de visualizacion de la imagen pequenia a la mas grande */
spaceImgEmpty[1].addEventListener('click', function() {
    spaceImgEmpty[0].src = spaceImgEmpty[1].src;
})
spaceImgEmpty[2].addEventListener('click', function() {
    spaceImgEmpty[0].src = spaceImgEmpty[2].src;
})
spaceImgEmpty[3].addEventListener('click', function() {
    spaceImgEmpty[0].src = spaceImgEmpty[3].src;
})


/**----------------------------------- NUMERO VESTIDO ------------------------------------------- */
const placeNumberDress = document.getElementById('product-number');
const dressNumber = [
    'MPBv1',
    'MPBv2',
    'MPBv3',
    'MPBv4',
    'MPBv5',
    'MPBv6',
    'MPBv7'
]
const putNumberDress = (cardSelect, number, place) => {
    cardSelect.addEventListener('click', () => {
        place.textContent = number;
    })
}


/**------------------------ TALLE VESTIDO ------------------------------------------------------- */
const dressSize = document.getElementById('product-size');
const sizeDress = [
    'T6',
    'T8',
    'T4 - T6',
    'T6',
    'T6 - T8',
    'T4 - T6 - T8',
    'T4 - T6 - T8'
];
const putSize = (cardSelect, placeSize, size) => {
    cardSelect.addEventListener('click', () => {
        placeSize.textContent = size;
    })
}

/**----------------------------- VESTIDO DESCRIPCION ---------------------------------------- */
const dressDescription = document.getElementById('product-text');
const textDescriptionDress = [
    'Vestido de tusor en color rosa liso, en combinación con tela estampada y terminaciones en volados y puntilla. Composición 100% algodón.',
    'Vestido "mil rayas" color celeste y blanco con detalles de bolsillos y puntilla en blanco. Composición 100% algodón.',
    'Vestido de tusor liso en color celeste con detalles de encaje y puntilla en blanco. Composición 100% algodón.',
    'Vestido de tusor liso en color ocre amarillo con interior de estampado a rayas blanco y negro. Composición 100% algodón.',
    'Vestido de pique en color celeste con lunares blancos, detalle de bolsillos y terminaciones en volados de batista y puntilla. Composición 100% algodón.',
    'Vestido de tusor liso color amarillo con puntilla hilo ancha en color blanco, con doble falda y terminaciones en volados de batista. Composición 100% algodón.',
    'Vestido de tusor liso color anaranjado con puntilla hilo ancha en color crudo, con doble falda y terminaciones en volados de broderie. Composición 100% algodón.'
];
const putDescription = (cardSelect, description, placeDescrition) => {
    cardSelect.addEventListener('click', () => {
        placeDescrition.textContent = description;
    })
}

/**------------------------------------ VESTIDO PRECIO ------------------------------------------- */
var priceDress = document.querySelectorAll('.dress-card__price');
const placePriceDress = document.getElementById('product-price');

const putPrice = (cardSelect, price, place) => {
    cardSelect.addEventListener('click', () => {
        place.textContent = price;
    })
}






for(var i = 0; i < cardSelectDress.length; i++) {
    openSection(cardSelectDress[i], sectionProduct);
    addImgDress(cardSelectDress[i], spaceImgEmpty, imagesDress[i]);
    putNumberDress(cardSelectDress[i], dressNumber[i], placeNumberDress);
    putSize(cardSelectDress[i], dressSize, sizeDress[i]);
    putDescription(cardSelectDress[i], textDescriptionDress[i], dressDescription);
    putPrice(cardSelectDress[i], priceDress[i].textContent, placePriceDress);
}

closeSection(sectionProduct, closeIcon);