'use strict';

let prepend = require('./modules/prepend');
let deleteTextNodex = require('./modules/deleteTextNodes');

/* ----------------------- Prepend -----------------------*/
let container = document.querySelector('.container');
let div = document.createElement('div');

div.textContent = 'I am a new element on the page';

prepend(container, div);

/* ----------------------- Delete text nodes -----------------------*/
let textNode = document.querySelector('.text-container');
deleteTextNodex(textNode);
