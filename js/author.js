const sectionDescription = document.querySelector('.other-books__description');
var cardBookDescription = document.querySelectorAll('.books-card__btn');

const openSection = (cardSelect, section) => {
    cardSelect.addEventListener('click', () => {
        section.style.display = 'block'; 
    })
}

const closeIcon = document.querySelector('.close-icon__btn');
const closeSection = (xIcon, section) => {
    xIcon.addEventListener('click', () => {
        section.style.display = 'none';
    })
}



var imgBooks = document.querySelectorAll('.books-card__imagen');
const imgEmpty = document.getElementById('front-img');
const putImage = (cardSelect, img, placeImg) => {
    cardSelect.addEventListener('click', () => {
        placeImg.src = img;
    })
}

var titleBook = document.querySelectorAll('.books-name');
const titleEmpty = document.getElementById('name-book');
const putTitle = (cardSelect, titulo, placeTitulo) => {
    cardSelect.addEventListener('click', () => {
        placeTitulo.textContent = titulo;
    })
}


function Book(generTest, priceTest, descriptionTest) {
    this.gener = generTest;
    this.price = priceTest;
    this.description = descriptionTest;
}

const bookOne = new Book (
    'Novela',
    '$2.700',
    'Milton es un jóven de quince años intrépido y curioso, quien un día de casualidad se cruzó con un forastero, alguien que no era del pueblo, que núnca nadie vío. El desconocido al hablar con el muchacho, le encarga a éste un trabajo, el cúal tiene lugar en un cementerio, Milton, desconcertado, en un principio se niega, sin embargo, al conocer su recompensa decide aceptarlo, pero su codicia, y su curiosidad sobre todo, lo llevarán a descubrir que, aquel lugar, no solo es un bueno para enterrar a nuestros muertos, si no, tambien, para enterrar los más tenebrosos secretos.'
);
const bookTwo = new Book (
    'Novela',
    '$2.700',
    '2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a, accusamus doloribus rem deleniti accusantium laboriosam quo voluptates, reiciendis, maxime molestiae qui? Molestias cupiditate ducimus incidunt voluptas tempora optio minus.Mollitia eligendi beatae perferendis quas iure? A quisquam.'
);
const bookThree = new Book (
    'Novela',
    '$2.700',
    '3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a, accusamus doloribus rem deleniti accusantium laboriosam quo voluptates, reiciendis, maxime molestiae qui? Molestias cupiditate ducimus incidunt voluptas tempora optio minus.Mollitia eligendi beatae perferendis quas iure? A quisquam.'
);
const bookFourd = new Book (
    'Tragicomedia',
    '$1800',
    '4Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a, accusamus doloribus rem deleniti accusantium laboriosam quo voluptates, reiciendis, maxime molestiae qui? Molestias cupiditate ducimus incidunt voluptas tempora optio minus.Mollitia eligendi beatae perferendis quas iure? A quisquam.'
);
const bookFive = new Book (
    'Gore',
    '$3200',
    '5Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a, accusamus doloribus rem deleniti accusantium laboriosam quo voluptates, reiciendis, maxime molestiae qui? Molestias cupiditate ducimus incidunt voluptas tempora optio minus.Mollitia eligendi beatae perferendis quas iure? A quisquam.'
);
const bookSix = new Book (
    'Fantasma',
    '$2200',
    '6Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam a, accusamus doloribus rem deleniti accusantium laboriosam quo voluptates, reiciendis, maxime molestiae qui? Molestias cupiditate ducimus incidunt voluptas tempora optio minus.Mollitia eligendi beatae perferendis quas iure? A quisquam.'
);

const allBooks = [
    bookOne, bookTwo, bookThree, bookFourd, bookFive, bookSix
]


const generBook = document.getElementById('gener-book');
const priceBook = document.getElementById('price-book');
const descBook = document.getElementById('summary-book');

const putGeneroPriceDesc = (cardSelect, listBook, placeGener, placePrice, placeDesc) => {
    cardSelect.addEventListener('click', () => {
        placeGener.textContent = listBook.gener;
        placePrice.textContent = listBook.price;
        placeDesc.textContent = listBook.description;
    })
}



for(var i = 0; i < cardBookDescription.length; i++) {
    openSection(cardBookDescription[i], sectionDescription);
    putImage(cardBookDescription[i], imgBooks[i].src, imgEmpty);
    putTitle(cardBookDescription[i], titleBook[i].textContent, titleEmpty);
    putGeneroPriceDesc(cardBookDescription[i], allBooks[i], generBook, priceBook, descBook);
}

closeSection(closeIcon, sectionDescription);