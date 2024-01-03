import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//this will first go to the dom, and get the div with the id of "root",
// and then render the app into that
console.log(App);

render (
    <App />,
    document.getElementById('root')
)