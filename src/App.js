
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Modal from './modal';
import Cart from './cart'
import Navbar from './Navbar'
import PhoneFilter from './PhoneFilter';
import LeftNavbar from './LeftNavbar';
import CaruselDiscount from './CaruselDiscount'
import Footer from './Footer'
import './App.scss';
import ProductComponentHooks from './ProductComponentHooks'
import ModalHook from './modalHook';
import CartSite from './CartSite';
import FullCart from './FullCart';

function App() {

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <React.Fragment>
        <Navbar />
        <CaruselDiscount />
        <PhoneFilter />
        <Switch>
          <Route exact path="/" component={ProductComponentHooks} />
          <Route path="/product/:id" component={ModalHook} />
          <Route path="/cart/:id" component={CartSite} />
          <Route path="/cart" component={Cart} />
          <Route path="/fullCart" component={FullCart} />
        </Switch>
        {/* <ProductComponentHooks /> */}
        <Modal />
        <LeftNavbar />
        <Footer />
      </React.Fragment>

    </div>
  );

}

export default App;
