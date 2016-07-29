'use strict';

let elementToClone = require('./elementToClone');

function renderCookie(key, value) {
  let el = elementToClone().cloneNode(true);

  el.querySelectorAll('.cookie_column')[0].textContent = key;
  el.querySelectorAll('.cookie_column')[1].textContent = value;

  return el;
}

module.exports = renderCookie;

