const buttonBuyBooks = document.getElementsByClassName('books-card__button');
const booksDescription = document.getElementById('book-description');
const closeBtn = document.querySelector('.close-icon__button');

var emptyTitleBook = document.querySelector('.book-description__title');
var titleCardBook = document.querySelectorAll('.books-card__title');

var emptyImgBook = document.getElementById('book-description__img');
var imgCardBook = document.querySelectorAll('.image');

var emptyPriceBook = document.querySelector('.book-description__price');
var priceCardBook = document.querySelectorAll('.books-card__price');

var descriptionBook = document.getElementById('book-summary');

const openSection = (buttonSelect, section) => {
    buttonSelect.addEventListener('click', () => {
        section.style.display = 'block'; 
    })
}

const changeText = (button, newText, text) => {
    button.addEventListener('click', () => {
        text.textContent = newText.textContent;
    })
}
const changeImg = (buttonBuy, newImg, emptyImg) => {
    buttonBuy.addEventListener('click', () => {
        emptyImg.src = newImg.src;
    })     
}


const allDesc = [
    '- Por supuesto que la magía existe - dijo el conejo seriamente - He visto magía negra, magía blanca y de mucho colores, eh visto magía en mi mundo y hasta la he visto en el maravilloso mundo de los humanos, y no tengo dudas de que, de todas ellas la más poderosa es la magía de la imaginación. Por eso le aseguro, mi pequeña Belén, que si nunca deja de imaginar, no importa el paso de los años, por arte de magía la alegría de la infancia permanecerá intacta en su corazón-',
    '- ...y el caballito de siete colores corría por los campos desparramando sus colores, cual si se tratase del rocio que la madrugada creaba, antes que las luces acabasencon la oscuridad de los cielos, y al hacerlo embellecía a las flores haciendo brillar sus pétalos con una intensidad inaudita; hacía lo mismo con los bosques y tenía mucho trabajo ahora, en otoño, cuando debía pintar de dorados, rojos y naranjas las frágiles hojas de los árboles... -',
    '...Cuándo las aves cubrieron por completo el cielo, repentinamente, una a una comenzaron a descender, y a posarse en las ramas del árbol seco. Enseguida el árbol estuvo atiborrado por ellas, eran tantas que hasta temí que pudiera venirse abajo por el peso. Sin previo aviso la flor voladora dejó de silbar, y las aves hechizadas cayeron en un profundo sueño, y quedaron colgadas como murciélagos con las alas extendidas. El árbol parecía haber tomado vida...',
    '- ...el cielo seguía en lo alto gruñiendo enfurecido con sigo mísmo, por haber permitido que la lluvía se le escapace, y de brónca enseguecido lánzaba rayos hacía todas partes como filosas lanzas de luz que, a la noche la cortaban, produciéndole héridas que la dejarían agonizante hasta el amánecer, momento en que el sol le acertaría el gólpe de grácia, y la noche negra, cómplice en la fuga de la llúvia, nos cubria también protectoramente miéntras corríamos cómo sombras por los fondos de las casas... -'
];

const putDescription = (buttonBuy, emptyDesc, newDesc) => {
    buttonBuy.addEventListener('click', () => {
        emptyDesc.textContent = newDesc;
    })
}

for (var i = 0; i < buttonBuyBooks.length; i ++) {
    openSection(buttonBuyBooks[i], booksDescription);
    changeText(buttonBuyBooks[i], titleCardBook[i], emptyTitleBook);
    changeImg(buttonBuyBooks[i], imgCardBook[i], emptyImgBook);
    putDescription(buttonBuyBooks[i], descriptionBook, allDesc[i]);
    changeText(buttonBuyBooks[i], priceCardBook[i], emptyPriceBook);
}

closeBtn.addEventListener('click', () => {
    booksDescription.style.display = 'none';
    for(var i = 0; i < descriptionBook.length; i++) {
        descriptionBook[i].style.display = 'none';
    }
})

