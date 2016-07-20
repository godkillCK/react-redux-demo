import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/configureStore';
import Root from './containers/Root';
require("./css/base.css");


let store = createStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
