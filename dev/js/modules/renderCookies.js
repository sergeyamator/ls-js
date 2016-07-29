'use strict';

let cookieObj = require('./getCookies')();
let prepend = require('./prepend');
let cookie = require('./cookie');
let deleteCookie = require('./deleteCookie');
let table = document.createElement('table');

table.addEventListener('click', (e) => {
  if (e.target.dataset.delete !== 'true' ) return;
  let name = e.target.closest('.cookies_row').firstElementChild.textContent;

 confirm(`Вы действительно хотите удалить печеньку ${name} ?`) &&  deleteCookie(name);
});

if (!document.cookie) {
  document.cookie = 'firstCookie=Good';
  document.cookie = 'secondCookie= day';
}

for (let key in cookieObj) {
  let result = cookie(key, cookieObj[key]);
  table.appendChild(result);
}


prepend(document.querySelector('.wrapper'), table);
