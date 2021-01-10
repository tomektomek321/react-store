
console.log(1);
window.onscroll = fun3;

window.onload = loadFun;

function loadFun() {


    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId)
        console.log(toggle);
        console.log(nav);
        // Validate that variables exist
        if(toggle && nav) {
            toggle.addEventListener('click', ()=>{
                // We add the show-menu class to the div tag with the nav__menu class
                nav.classList.toggle('show-menu')
            })
        }
    }
    showMenu('nav-toggle','nav-menu')




    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));



    let x = document.querySelectorAll('.cartProductDiv');

    for(let i=0; i < x.length; i++) {
        console.log(x[i].offsetTop);

        /*if(x[i].offsetTop < (window.scrollY + (window.innerHeight * 0.7)) ) {
            x[i].classList.add("slideRight");
        }*/
    }

    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-toggle-right'

    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    })


}



function fun3() {
    //console.log(2);

    let x = document.querySelectorAll('.cartProductDiv');

    for(let i=0; i < x.length; i++) {
        //console.log(x[i].offsetTop);

        if(x[i].offsetTop < (window.scrollY + (window.innerHeight * 0.7)) ) {
            x[i].classList.add("slideLeft");
        }
    }
/*
    let x = document.querySelectorAll('.animate-right');
    let y = document.querySelectorAll('.animate-left');
    let z = document.querySelectorAll('.animate-up');

    for(let i=0; i < x.length; i++) {
        if(x[i].offsetTop < (window.scrollY + (window.innerHeight * 0.7)) ) {
            x[i].classList.add("slideRight");
        }
    }

    for(let i=0; i < y.length; i++) {
        if(y[i].offsetTop < (window.scrollY + (window.innerHeight * 0.7)) ) {
            y[i].classList.add("slideLeft");
        }
    }

    for(let i=0; i < z.length; i++) {
        if(z[i].offsetTop < (window.scrollY + (window.innerHeight * 0.7)) ) {
            z[i].classList.add("slideUp");
        }
    }
*/



}



