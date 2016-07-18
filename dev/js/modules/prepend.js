'use strict';

function prepend(container, newElement) {
  let before = container.children[0];
  container.insertBefore(newElement, before);
}

module.exports = prepend;

