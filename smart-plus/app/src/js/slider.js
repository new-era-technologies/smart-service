'use strict';

//declare
const slides = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('.slider__arrow--left'),
    arrowRight = document.querySelector('.slider__arrow--right'),
    pagCurrent = document.querySelector('.pag__current'),
    pagLength = document.querySelector('.pag__length');
let slideIndex = 1;

//show slides
showSlide(slideIndex);

//show previous slide by clicking arrow left
arrowLeft.addEventListener('click', function () {
    showSlide(slideIndex -= 1);
    pagCurrent.innerText = slideIndex;
});

//show next slide by clicking arrow right
arrowRight.addEventListener('click', function () {
    showSlide(slideIndex += 1);
    pagCurrent.innerText = slideIndex;
});

function showSlide(i) {

    i < 1 ? slideIndex = slides.length : null;
    i > slides.length ? slideIndex = 1 : null;

    slides.forEach(
        it => it.style.display = 'none'
    )

    slides[slideIndex - 1].style.display = 'block';
}

//show number of current slide
pagCurrent.innerText = slideIndex;
//show quantity of slides
pagLength.innerText = slides.length;