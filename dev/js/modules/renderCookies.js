'use strict';

let cookieObj = require('./getCookies')();
let prepend = require('./prepend');
let cookie = require('./cookie');

let table = document.createElement('table');

for (let key in cookieObj) {
  let result = cookie(key, cookieObj[key]);
  table.appendChild(result);
}


prepend(document.querySelector('.wrapper'), table);
