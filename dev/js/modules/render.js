'use strict';

/**
 * Отрисовываем список городов на основе
 * переданных данных
 * @param {Object.<Array>} data
 */
function render(data, container) {
  let fragment = document.createDocumentFragment();
  data.sort(sorByName);

  data.forEach((item) => {
    let element = document.createElement('li');

    element.textContent = item.name;
    fragment.appendChild(element);
  });

  container.appendChild(fragment);
}

function sorByName(a, b) {
  return a.name.toLowerCase() < b.name.toLocaleLowerCase() ? -1: 1;
}

module.exports = render;