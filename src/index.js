import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './redux/reduxStore'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux"
import './index.css'


export let renderEntireTree = () => {
ReactDOM.render(<BrowserRouter>
                    <Provider store={store}>
                        <App />
                    </Provider>
                </BrowserRouter>,
                     document.getElementById('root'));
};


// // store.subscribe(renderEntireTree);

// renderEntireTree(store.getState());
renderEntireTree();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


