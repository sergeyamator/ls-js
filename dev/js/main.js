'use strict';

/* --------------- Render cities --------------- */
let sendAjax = require('./modules/sendAjax');
let searchByInput = require('./modules/searchByInput');
let render = require('./modules/render');
let promise = sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

promise.then(
  result => {
    render(result, document.querySelector('.cities-list'));
  }
);

/* --------------- Autofill --------------- */
document.querySelector('.search-input').addEventListener('input', () => {
 let promise = sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

  promise.then(
    result => {
      let text = document.querySelector('.search-input').value;
      searchByInput(result, text);
    }
  );
});