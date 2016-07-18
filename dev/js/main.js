'use strict';

let prepend = require('./modules/prepend');

let container = document.querySelector('.container');
let div = document.createElement('div');

div.textContent = 'I am a new element on the page';

prepend(container, div);
