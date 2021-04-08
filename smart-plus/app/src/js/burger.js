'use strict';

//declare
const burger = document.getElementById('burger'),
      modal = document.querySelector('.header__wrapper'),
      burgerLines = document.querySelectorAll('.burger__line'),
      nav = document.querySelector('.nav');


//show hide burger menu
burger.addEventListener('click', function () {
    modal.classList.toggle('modal'); //modal

    this.classList.toggle('rotate-burger-line'); //burger lines

    nav.classList.toggle('display-block');
})