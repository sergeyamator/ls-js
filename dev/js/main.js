'use strict';

/* --------------- Timer --------------- */
let timer = require('./modules/timer');
timer(3000).then(() => console.log('я вывелась через 3 секунды'));

/* --------------- Render cities --------------- */
let sendAjax = require('./modules/sendAjax');
let render = require('./modules/render');
sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', render);

/* --------------- Autofill --------------- */
let showAutofill = require('./modules/showAutofill');

document.querySelector('.search-input').addEventListener('input', () => {
  sendAjax('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', showAutofill);
});