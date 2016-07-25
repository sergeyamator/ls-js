'use strict';

let randomElement = require('./modules/randomElement');

document.querySelector('button').addEventListener('click', function() {
  randomElement('div', 'square');
});

