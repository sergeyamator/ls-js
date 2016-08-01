'use strict';

require('./modules/renderCookies');
let addCookie = require('./modules/addCookie');

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();
  addCookie(e.target);
});
