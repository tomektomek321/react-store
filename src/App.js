
import React from 'react';

import { Modal } from './Modal';
import PhoneFilter from './PhoneFilter';
import ProductComponentHooks from './ProductComponentHooks'
import { Header1 } from './Headers/Header1';
import { ImageSection } from './ImageSection/ImageSection';
import './custom_js.js';

function App() {

  return (
    <div>
      <React.Fragment>
        {/* <Loader /> */}
        <Header1 />
        <Modal />
        <ImageSection />
        {/* <CaruselDiscount /> */}
        <PhoneFilter />
        {/*

        <Switch>
          <Route exact path="/" component={ProductComponentHooks} />
          <Route path="/product/:id" component={ModalHook} />
          <Route path="/cart/:id" component={CartSite} />
          <Route path="/cart" component={Cart} />
          <Route path="/fullCart" component={FullCart} />
        </Switch>

        <Footer /> */}
        <ProductComponentHooks />
        <script src="public/custom.js"></script>
      </React.Fragment>

    </div>
  );

}

export default App;
