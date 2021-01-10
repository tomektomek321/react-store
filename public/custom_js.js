import ScrollReveal from 'scrollreveal'

window.onload = fun;

console.log(ScrollReveal);
/*
ScrollReveal.reveal('.animate-leeft', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
*/
function fun() {


    const selE = function(el) {
        return document.querySelector(el);
    }

    let menuToggler = selE('.menu-toggle');
    let body = selE('body');
    /*
    function x1() {
        document.querySelector(".menu-toggle")
    }
    console.log(menuToggler);*/

    menuToggler.addEventListener('click', function() {
        console.log(body.classList);
        body.classList.toggle('close');
        body.classList.toggle('open');
    });


    window.sr = ScrollReveal();

    sr.reveal('.animate-leeft', {
        origin: 'left',
        duration: 1000,
        distance: '25rem',
        delay: 300
    });


}