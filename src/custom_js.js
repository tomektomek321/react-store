
window.onscroll = fun3;

window.onload = loadFun;

function loadFun() {

    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementsByClassName(toggleId)[0],
        nav = document.getElementById(navId)
        if(toggle && nav) {
            toggle.addEventListener('click', ()=>{

                nav.classList.toggle('show-menu')
            })
        }
    }
    showMenu('bx-grid-alt','nav-menu')


    /*let x2 = document.querySelectorAll('.nav__logo')[0];
    x2.innerHTML += " ";
    x2.innerHTML += window.innerWidth;
    x2.innerHTML += "x";
    x2.innerHTML += window.innerHeight*/


    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));



    let x = document.querySelectorAll('.cartProductDiv');

    for(let i=0; i < x.length; i++) {

    }

    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const brightTheme = 'bright-theme'
    const iconTheme = 'bx-toggle-right'

    themeButton.addEventListener('click', () => {

        document.body.classList.toggle(darkTheme)
        document.body.classList.toggle(brightTheme)
        themeButton.classList.toggle(iconTheme)

    })


    const exploreBtn = document.getElementById('exploreBtn')

    function goToPhones(e) {
        e.preventDefault();
        var elmnt = document.getElementsByClassName("cartProductDiv")[0];
        window.scrollTo(0, elmnt.offsetTop - 180);
    }

    exploreBtn.addEventListener('click', goToPhones);
}

function fun3() {

    let x = document.querySelectorAll('.cartProductDiv');

    for(let i=0; i < x.length; i++) {

        if(x[i].offsetTop < (window.scrollY + (window.innerHeight * 0.7)) ) {
            x[i].classList.add("slideLeft");
        }
    }
}


