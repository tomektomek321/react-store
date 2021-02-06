import React from 'react'
import './ImageSection.scss'
import './ImageSection_RWD.scss'
import './ImageSection_Ani.scss'

export const ImageSection = () => {
    return (
        <section className="hero" id="hero">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />

            <div>
                <img className="imgi" src="img/brightPhoto2.jpg" alt="nic" />
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
