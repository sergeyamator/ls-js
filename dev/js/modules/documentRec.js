'use strict';

let element = document.querySelector('.list');

/**
 * Выводим все значения элемента с
 * помощью рекурсивной функции
 * @param {Array.<String>} arr
 * @param {Number} index
 */
function documentRec(arr, index) {
  if (index < arr.length) {
    element.appendChild(createItem(arr[index]));
    index++;

    documentRec(arr, index);
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



