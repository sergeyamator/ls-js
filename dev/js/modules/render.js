'use strict';

/**
 * Отрисовываем список городов на основе
 * переданных данных
 * @param {Object.<Array>} data
 */
function render(data, container) {
  data.sort(sorByName);

  let source = document.querySelector('#city-template').innerHTML,
    templateFn = Handlebars.compile(source),
    template = templateFn({data: data});

  container.innerHTML = template;
}

function sorByName(a, b) {
  return a.name.toLowerCase() < b.name.toLocaleLowerCase() ? -1: 1;
}

module.exports = render;