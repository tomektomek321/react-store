
import React from 'react';
import ToDoComponent from './ToDoComponent';
import {Route, Switch} from 'react-router-dom';
import Details from './Details';
//import Item from './Item';
import Modal from './modal';
import Cart from './cart'

function App() {

  return (
    <div>
    
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={ToDoComponent} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
        </Switch>

      <Modal />
      </React.Fragment>
      


    </div>
  );

}

export default App;
