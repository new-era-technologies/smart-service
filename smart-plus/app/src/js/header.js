'use strict';

//declare
const arrHeader = document.querySelector('.header__img'),
    subtitleHeader = document.querySelector('.header__subtitle');

//show full subtitle
arrHeader.addEventListener('click', function () {
    this.style.display = 'none';
    subtitleHeader.classList.add('show-subtitle');
})