
import React from 'react';
import ProductsComponent from './ProductsComponent';
import {Route, Switch} from 'react-router-dom';
import Details from './Details';
import Modal from './modal';
import Cart from './cart'
import Navbar from './Navbar'
import PhoneFilter from './PhoneFilter';
import LeftNavbar from './LeftNavbar';
import CaruselDiscount from './CaruselDiscount'
import './App.scss';

function App() {

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <React.Fragment>
        <Navbar />
        <CaruselDiscount />
        <PhoneFilter />
        <Switch>
          <Route exact path="/" component={ProductsComponent} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
        </Switch>

        <Modal />
        <LeftNavbar />
      </React.Fragment>

    </div>
  );

}

export default App;
