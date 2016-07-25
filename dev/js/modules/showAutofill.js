'use strict';

let render = require('./render');

function showAutofill(data) {
  let text = document.querySelector('.search-input').value;

  let filtered = data.filter((item) => {
    return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  });

  let field = document.querySelector('.autofill');
  field.innerHTML = '';

  if (text) {
    render(filtered, field);
  }
}

module.exports = showAutofill;