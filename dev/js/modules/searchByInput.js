"use strict";

let citiesContainer = document.querySelector('.cities-list');
let render = require('./render');

function searchByInput(data, text) {
  let filtered = require('./getFilteredItems')(data, text);
  render(filtered, citiesContainer);
}

module.exports = searchByInput;