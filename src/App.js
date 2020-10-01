
import React from 'react';
import ToDoComponent from './ToDoComponent';
import {Route, Switch} from 'react-router-dom';
import Details from './Details';
//import Item from './Item';
import Modal from './modal';
import Cart from './cart'
import Navbar from './Navbar'


function App() {

  return (
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous" />

      <React.Fragment>
        <Navbar />
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
