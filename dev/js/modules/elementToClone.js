'use strict';

function isTemplateSupported() {
  return 'content' in document.createElement('template');
}

let cookieTmp = document.querySelector('.cookie'),
  elementToClone = null;

if (isTemplateSupported()) {
  elementToClone = cookieTmp.content.querySelector('.cookies_row');
} else {
  elementToClone = cookieTmp.querySelector('.cookie_table');
}

module.exports = function() {
  return elementToClone;
};