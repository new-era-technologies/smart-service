'use strict';

//declare
const burger = document.getElementById('burger'),
      modal = document.querySelector('.header__wrapper'),
      burgerLines = document.querySelectorAll('.burger__line');


//show hide burger menu
burger.addEventListener('click', function () {
    modal.classList.toggle('modal'); //modal

    this.classList.toggle('rotate-burger-line'); //burger lines
})