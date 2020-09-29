
import React from 'react';
import ToDoComponent from './ToDoComponent';
import {Route, Switch} from 'react-router-dom';
import Details from './Details';
//import Item from './Item';

function App() {

  return (
    <div>
    
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={ToDoComponent} />
          <Route path="/details" component={Details} />
        </Switch>


      </React.Fragment>
      


    </div>
  );

}

export default App;
