import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {ProductProvider} from './context.js';
import { UserProvider } from './userContext';
import store from './store.js'


ReactDOM.render(
  <Provider store={store}>
  <UserProvider>
  <ProductProvider>
    <Router>
      <App />
    </Router>
    </ProductProvider>
    </UserProvider>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
