
import React from 'react';
/*import {Route, Switch} from 'react-router-dom';
import Modal from './modal';
import Cart from './cart'
import Navbar from './Navbar'

import LeftNavbar from './LeftNavbar';

import Footer from './Footer'
import './App.scss';

import ModalHook from './modalHook';
import CartSite from './CartSite';
import FullCart from './FullCart';*/
//import CaruselDiscount from './CaruselDiscount'
import PhoneFilter from './PhoneFilter';
import ProductComponentHooks from './ProductComponentHooks'
import { Header1 } from './Headers/Header1';
import { ImageSection } from './ImageSection/ImageSection';
import './custom_js.js';

function App() {

  return (
    <div>

      <React.Fragment>
        <Header1 />
        <ImageSection />
        {/* <CaruselDiscount /> */}
        <PhoneFilter />
        {/* <Navbar /> */}
        {/*

        <Switch>
          <Route exact path="/" component={ProductComponentHooks} />
          <Route path="/product/:id" component={ModalHook} />
          <Route path="/cart/:id" component={CartSite} />
          <Route path="/cart" component={Cart} />
          <Route path="/fullCart" component={FullCart} />
        </Switch>

        <Modal />
        <LeftNavbar />
        <Footer /> */}
        <ProductComponentHooks />
        <script src="public/custom.js"></script>
      </React.Fragment>

    </div>
  );

}

export default App;
