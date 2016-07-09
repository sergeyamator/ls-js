'use strict';

let element = document.querySelector('.list'),
  arr = ['я', 'умею', 'писать', 'рекурсивные', 'функции'];

require('./modules/documentRec')(arr, element);