'use strict';

/* --------------- Timer --------------- */
let timer = require('./modules/timer');
timer(3000).then(() => console.log('я вывелась через 3 секунды'));

/* --------------- Render cities --------------- */
let sendAjax = require('./modules/sendAjax');
let render = require('./modules/render');
let promise = sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

promise.then(
  result => {
    render(result, document.querySelector('.cities-list'));
  }
);

/* --------------- Autofill --------------- */
let showAutofill = require('./modules/showAutofill');

document.querySelector('.search-input').addEventListener('input', () => {
 let promise = sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json');

  promise.then(
    result => {
      showAutofill(result);
    }
  );
});