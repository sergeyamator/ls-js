'use strict';

function prepend(container, newElement) {
  container = container || document.body;

  let before = container.firstChild;
  container.insertBefore(newElement, before);
}

module.exports = prepend;

