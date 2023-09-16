const btnHamburger = document.getElementById('hamburger-icon');
const hamburgerList = document.getElementById('hamburger-list');
const btnClose = document.querySelector('.close-icon');

btnHamburger.addEventListener('click', () => {
    hamburgerList.style.display = 'block';
})

btnClose.addEventListener('click', () => {
    hamburgerList.style.display = 'none';
})



const slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnRight.addEventListener('click', function() {
    next();
});

function prev() {
    let sliderSection= document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnLeft.addEventListener('click', function() {
    prev();
});

setInterval(next, 6000);






let animated = document.querySelectorAll('.categories__animated');

function showCategorie() {
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < animated.length; i++) {
        let heightAnimated = animated[i].offsetTop;
        if(heightAnimated - 600 < scrollTop) {
            animated[i].style.transition = 'all 1s';
            animated[i].style.animation = 'showSlide 2s';
        }
    }
}
window.addEventListener('scroll', showCategorie);

let animatedCategorie = document.querySelectorAll('.categories__link');
animatedCategorie.addEventListener('onmouseover', function() {
    animated.style.background = 'red';
})





