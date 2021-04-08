'use strict';

//declare variables
const dropBtn = document.querySelectorAll('.dropdown__btn'),
      dropCont = document.querySelectorAll('.dropdown__content'),
      menuItems = document.querySelectorAll('.dropdown__item');


//show/hide menu by click
dropBtn.forEach(
    v => v.addEventListener('click', function () {
        this.closest('.dropdown').children[1].classList.toggle('show');
    })
)

//hide menu by click out
// window.addEventListener('click', function (e) {
//     if (!e.target.classList.contains('dropdown__btn')) {
//         dropCont.forEach(
//             it => it.classList.remove('show')
//         )
//     }
// });

//change value in dropdown button
menuItems.forEach(
    it => it.addEventListener('click', function () {
        this.closest('.dropdown').querySelector('span').innerText = this.innerText;
    })
)