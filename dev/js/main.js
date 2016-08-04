'use strict';

let renderCookies = require('./modules/renderCookies');
let addCookie = require('./modules/addCookie');

renderCookies();

if (document.querySelector('.add-cookie')) {
  document.querySelector('.add-cookie').addEventListener('click', () => {
    show('.new_cookie');
    document.forms[0].addEventListener('submit', (e) => {
      e.preventDefault();
      addCookie();
      renderCookies();
    });
  })
}

function show(el) {
  document.querySelector(el).classList.remove('is-hidden');
}


