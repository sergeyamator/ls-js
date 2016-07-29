'use strict';

let elementToClone = require('./elementToClone');

function renderCookie(key, value) {
  let el = elementToClone().cloneNode(true);

  el.querySelectorAll('.cookie_column')[0].textContent = key.trim();
  el.querySelectorAll('.cookie_column')[1].textContent = value.trim();

  return el;
}

module.exports = renderCookie;

