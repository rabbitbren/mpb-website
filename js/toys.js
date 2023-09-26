const productSection = document.getElementById('product-description');
const closeBtnProduct = document.querySelector('.close-icon__btn');
var productCardSelect = document.querySelectorAll('.toy-card__img');


/*funcion que permite ABRIR cambiar el display de la section que describe el producto seleccionado*/
const openSection = (cardSelect, section) => {
    cardSelect.addEventListener('click', () => {
        section.style.display = 'block';    
    })
}
/*funcion que permite CERRAR, cambiando el display de la seccion que describe el producto selecionado*/
const closeSection = () => {
    closeBtnProduct.addEventListener('click', () => {
        productSection.style.display = 'none';
    })
}


/**Doll banner funcion */
/**const imgBanner = document.getElementById('doll-banner__img');
const imagesBanner = [
    './assets/img/toys/doll-banner-1.jpg',
    './assets/img/toys/doll-banner-2.jpg',
    './assets/img/toys/doll-banner-3.jpg',
    './assets/img/toys/doll-banner-4.jpg',
    './assets/img/toys/doll-banner-5.jpg'
]

var index = 0;
const changeImg = () => {
    imgBanner.src = imagesBanner[index];
    index++;
    if(index >= imagesBanner.length) {
        index = 0;
    }
}
changeImg()
setInterval(changeImg, 4000);*/



/** ------------------------- TITULO SECCION GENERAL ------------------------------------------------- */
/**funcion que permite cambiar el contenido del titulo de la section que describe el producto*/
const titleSectionToy = document.getElementById('title__articulated-doll');
var titleProdut = document.querySelector('.product-description__title');
const changeTitle = (cardTitle, sectionTitle) => {
    cardTitle.textContent = sectionTitle;
}

/**-------------------- IMAGENES --------------------------------------------------------------------- */
const imgProductEmpty = document.querySelectorAll('.product-img');
/**arrays de las imagenes que se agregaran a cada producto en su tarjeta descriptiva al hacerle click  */
const dollArt1 = [
    './assets/img/toys/toys-eki01a-1.jpg',
    './assets/img/toys/toys-eki01a-2.jpg',
    './assets/img/toys/toys-eki01a-3.jpg'
];
const dollArt2 = [
    './assets/img/toys/toys-eki02a-1.jpg',
    './assets/img/toys/toys-eki02a-2.jpg',
    './assets/img/toys/toys-eki02a-3.jpg'
];
const dollArt3 = [
    './assets/img/toys/toys-eki03a-1.jpg',
    './assets/img/toys/toys-eki03a-2.jpg',
    './assets/img/toys/toys-eki03a-3.jpg'
];
const dollArt4 = [
    './assets/img/toys/toys-eki04a-1.jpg',
    './assets/img/toys/toys-eki04a-2.jpg',
    './assets/img/toys/toys-eki04a-3.jpg'
];
const dollArt5 = [
    './assets/img/toys/toys-eki05a-1.jpg',
    './assets/img/toys/toys-eki05a-2.jpg',
    './assets/img/toys/toys-eki05a-3.jpg'
];
const dollArt6 = [
    './assets/img/toys/toys-eki06a-1.jpg',
    './assets/img/toys/toys-eki06a-2.jpg',
    './assets/img/toys/toys-eki06a-3.jpg'
];
const dollArt7 = [
    './assets/img/toys/toys-eki07a-1.jpg',
    './assets/img/toys/toys-eki07a-2.jpg',
    './assets/img/toys/toys-eki07a-3.jpg'
];
const dollArt8 = [
    './assets/img/toys/toys-eki09a-1.jpg',
    './assets/img/toys/toys-eki09a-2.jpg',
    './assets/img/toys/toys-eki09a-3.jpg'
];
const dollArt9 = [
    './assets/img/toys/toys-eki11a-1.jpg',
    './assets/img/toys/toys-eki11a-2.jpg',
    './assets/img/toys/toys-eki11a-3.jpg'
];
const dollSimpleLarge1 = [
    './assets/img/toys/toys-ekisl01-1.jpg',
    './assets/img/toys/toys-ekisl01-2.jpg',
    './assets/img/toys/toys-ekisl01-3.jpg'
];
const dollSimpleLarge2 = [
    './assets/img/toys/toys-ekisl02-1.jpg',
    './assets/img/toys/toys-ekisl02-2.jpg',
    './assets/img/toys/toys-ekisl02-3.jpg'
];
const dollSimpleLarge3 = [
    './assets/img/toys/toys-ekisl03-1.jpg',
    './assets/img/toys/toys-ekisl03-2.jpg',
    './assets/img/toys/toys-ekisl03-3.jpg'
];
const dollSimpleShort1 = [
    './assets/img/toys/toys-ekiss01-1.jpg',
    './assets/img/toys/toys-ekiss01-2.jpg',
    './assets/img/toys/toys-ekiss01-3.jpg'
];
const dollSimpleShort2 = [
    './assets/img/toys/toys-ekiss02-1.jpg',
    './assets/img/toys/toys-ekiss02-2.jpg',
    './assets/img/toys/toys-ekiss02-3.jpg'
];
const dollSimpleShort3 = [
    './assets/img/toys/toys-ekiss03-1.jpg',
    './assets/img/toys/toys-ekiss03-2.jpg',
    './assets/img/toys/toys-ekiss03-3.jpg'
];
const dollSimpleShort4 = [
    './assets/img/toys/toys-ekiss04-1.jpg',
    './assets/img/toys/toys-ekiss04-2.jpg',
    './assets/img/toys/toys-ekiss04-3.jpg'
];
const dollSimpleShort5 = [
    './assets/img/toys/toys-ekiss05-1.jpg',
    './assets/img/toys/toys-ekiss05-2.jpg',
    './assets/img/toys/toys-ekiss05-3.jpg'
];
/**array de las arrays de imagenes de cada producto */
const images = [dollArt1, dollArt2, dollArt3, dollArt4, dollArt5, dollArt6, dollArt7, dollArt8, dollArt9, dollSimpleLarge1, dollSimpleLarge2, dollSimpleLarge3, dollSimpleShort1, dollSimpleShort2, dollSimpleShort3, dollSimpleShort4, dollSimpleShort5];
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
const addImgProduct = (cardSelect, emptyImg, newImg) => {
    cardSelect.addEventListener('click', function () {
        fillImg(emptyImg, newImg);
    })
}
/**permite el cambio de visualizacion de la imagen pequenia a la mas grande */
imgProductEmpty[1].addEventListener('click', function() {
    imgProductEmpty[0].src = imgProductEmpty[1].src;
})
imgProductEmpty[2].addEventListener('click', function() {
    imgProductEmpty[0].src = imgProductEmpty[2].src;
})
imgProductEmpty[3].addEventListener('click', function() {
    imgProductEmpty[0].src = imgProductEmpty[3].src;
})


/**------------------------------- ID PRODUCTO ------------------------------------------------------- */
var idProductEmpty = document.getElementById('product-id');
const idProductsList = ['eki01A', 'eki02A', 'eki03A', 'eki04A', 'eki05A', 'eki06A', 'eki07A', 'eki09A', 'eki11A', 'ekisl01', 'ekisl02', 'ekisl03', 'ekiss01', 'ekiss02', 'ekiss03', 'ekiss04', 'ekiss05'];
const addIdProduct = (cardSelect, idEmpty, newId) => {
    cardSelect.addEventListener('click', () => {
        idEmpty.textContent = newId;
    })
}


/**------------------------------DESCRIPCION PRODUCTO----------------------------------------------------- */
var descriptionProductEmpty = document.getElementById('product-text');
const descriptionProductList = [
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas son pequeñas, solo miden 20 cm. Tienen cuerpos articulados y rellenos de bellón, hechos de tela de pique de un color almendrado. Tienen cabello sintético negro peinado en dos colitas bajas y caras pintadas a mano con ojos marrones. Visten vestidos estampados y llevan medias, braguitas y zapatos color negro a juego. Lo especial es que cada una viste como el personaje "Pico Azul", con un traje azul oscuro, decorado con plumas en tonos azules, violetas y turquesas, detalladamente cosidos. Sus brillantes ojos marrones complementan el conjunto y un pico de cuerina azul añade un toque encantador al personaje.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.',
    'Estas muñecas de 25 y 30 centímetros tienen una estética sencilla. Están hechas de suave tela piqué de algodón en tono almendrado. Su relleno de bellón proporciona una textura mullida al tacto.Tienen cabello de lana negra peinado en dos colitas bajas. Los ojos están representados por pequeños puntitos pintados, lo que les da un aspecto minimalista. Sus vestidos están confeccionados en telas como el tusor, batista y percal, agregando gracia a su apariencia. En resumen, estas muñecas destacan por su simplicidad.'
];
const addDescriptionProduct = (cardSelect, descEmpty, newDesc) => {
    cardSelect.addEventListener('click', () => {
        descEmpty.textContent = newDesc;
    })
}


/**--------------------------------- PRECIO PRODUCTO ----------------------------------------------------- */
var priceCard = document.querySelectorAll('.toy-card__price');
var priceDescription = document.getElementById('product-price');
const changePrice = (priceIndef, priceDef) => {
    priceIndef.textContent = priceDef;
}
const addPriceProduct = (cardSelect, priceIndef, priceDef) => {
    cardSelect.addEventListener('click', () => {
        changePrice(priceIndef, priceDef);
    })
}


/**------------------------------FUNCIONES ACTIVAS-------------------------------------------------------- */
for(var i = 0; i < productCardSelect.length; i++) {
    openSection(productCardSelect[i], productSection);
    /**changeTitle(titleProdut, titleSectionToy.textContent);*/
    addImgProduct(productCardSelect[i], imgProductEmpty, images[i]);
    addIdProduct(productCardSelect[i], idProductEmpty, idProductsList[i]);
    addDescriptionProduct(productCardSelect[i], descriptionProductEmpty, descriptionProductList[i]);
    addPriceProduct(productCardSelect[i], priceDescription, priceCard[i].textContent);
}

closeSection();