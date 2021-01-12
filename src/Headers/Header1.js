import React from 'react'
import './Header2.scss'

export const Header1 = () => {
    return (
        <header className="l-header" id="header">
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
            <nav className="nav bd-container">
                <a href="/" className="nav__logo">TomekSite</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                        <li className="nav__item"><a href="#share" className="nav__link">Phones</a></li>
                        <li className="nav__item"><a href="#decoration" className="nav__link">Nothing</a></li>
                        <li className="nav__item"><a href="#accessory" className="nav__link">Footer</a></li>

                        <li><i className='bx bx-toggle-left change-theme' id="theme-button"></i></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <div className="amountCart">2</div>
                    <i className='bx bx-cart'></i>
                    <i className='bx bx-grid-alt'></i>
                </div>
            </nav>
            <script type="text/javascript" src="./main.js"></script>
        </header>
        // <header>
        //     <div className="container">
        //         <div className="nav">
        //             <div className="menu-toggle">
        //             <i className="fas fa-bars"></i>
        //             <i className="fas fa-times"></i>
        //             </div>
        //             <a href="index.html" className="logo">
        //                 <img src="img/logo-rosa.png" alt="" />
        //             </a>
        //             <ul className="nav-list">
        //             <li className="nav-item active">
        //                 <a href="index.html" className="nav-link">Menu</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="index.html" className="nav-link">Reserv</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="index.html" className="nav-link">Home</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="index.html" className="nav-link">Shop</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a href="index.html" className="nav-link">Contaict</a>
        //             </li>
        //             </ul>
        //         </div>
        //     </div>
        // </header>
    )
}
