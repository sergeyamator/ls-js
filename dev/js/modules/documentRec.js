'use strict';

let i = 0;

/**
 * Выводим все значения элемента с
 * помощью рекурсивной функции
 * @param {Array.<String>} arr
 * @param {HTMLElement} container
 */
function documentRec(arr, container) {
  debugger;
  if (i < arr.length) {
    container.appendChild(createItem(arr[i]));
    i++;

    documentRec(arr, container);
  }
}

/**
 * Создаем элемент списка li с
 * переданным текстом
 * @param {String} item
 * @returns {Element}
 */
function createItem(item) {
  let li = document.createElement('li');
  li.textContent = item;

  return li;
}

module.exports = documentRec;
