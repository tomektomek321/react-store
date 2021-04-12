import React/*, { useState }*/ from 'react'
import './ImageSection.scss'
import './ImageSection_RWD.scss'
import './ImageSection_Ani.scss'
import { Loader2 } from '../Loader2';



let f;

setTimeout( () => {
    const ani = document.getElementsByClassName("animationLoader2")[0];
    ani.classList.add("hidden");

}, 1000 )


setTimeout( () => {




    f = setInterval( () => {
        const defSquars = document.getElementsByClassName("defaultSquare");
        const fady = document.getElementsByClassName("faded");

        for (let index = 0; index < fady.length; index++) {
            const element = fady[index];
            element.classList.remove("defSquare");
        }

        const squares = document.getElementsByClassName("defSquare");

        let testLength;
        if(squares.length > 10) {
            testLength = 10;
        } else {
            clearInterval(f);
            for (let index = 0; index < defSquars.length; index++) {
                const element = defSquars[index];
                element.classList.remove("defSquare");
                element.classList.add("faded");
            }
            return;
        }

        const test = parseInt(Math.floor(squares.length / testLength));

        let rands = [];
        for(let i = 0; i < testLength - 1; i++) {
            const rand = Math.floor(Math.random() * (test * i)) + i;
            rands.push(rand);
        }

        for (let index = 0; index < rands.length; index++) {
            const element = rands[index];
            if(squares[element]) {
                squares[element].classList.add("faded");
            }
        }

    }, 100);

}, 3000);


export const ImageSection = () => {

    //const [square, setSquare] = useState(200);
    return (
        <section className="hero" id="hero">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

            <div>
                <img className="imgi" src="img/brightPhoto2.jpg" alt="nic" />
            </div>
            <div className="animationLoader2">
                <Loader2 />
            </div>
            <div className="animationSquares">
                {Array(200).fill(0).map( (item, idx) => {
                    return <div key={idx} className="defSquare defaultSquare"></div>;
                } )}
            </div>

            <div className="container">

                <div className="sub-headline">
                    <span className="first-letter">W</span>elcome
                </div>

                <div className="headline">On Tomek Site</div>

                <div className="headline-description">
                    <div className="separator">
                    <div className="line line-left"></div>
                    <div className="asterisk"> <i className="fas fa-asterisk"></i> </div>
                    <div className="line line-right"></div>
                    </div>
                    <div className="single-animation">
                    <h5>Check my phones</h5>
                    <a href="/" id="exploreBtn" className="btn cta-btn">Explore</a>
                    </div>
                </div>

            </div>

        </section>
    )
}
