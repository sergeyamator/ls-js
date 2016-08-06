'use strict';

let render = require('./render');

function showAutofill(data, text) {
  let filtered = require('./getFilteredItems')(data, text);

  let field = document.querySelector('.autofill');
  field.innerHTML = '';

  if (text) {
    render(filtered, field);
  }
}

module.exports = showAutofill;