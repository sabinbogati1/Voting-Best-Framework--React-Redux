import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";

import myApp from "./reducer";
import App from './App';

let store = createStore(myApp);

function render(){

    ReactDOM.render(
    <App store={store} />,
     document.getElementById('root'));
}


store.subscribe(render);

render();


