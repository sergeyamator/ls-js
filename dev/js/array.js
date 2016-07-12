'use strict';

/**
 * Имитация функции forEach
 * @param {Array} array
 * @param {Function} fn - callback, which is called for every element in array param
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i], index = i;
    fn(item, index, array);
  }
}

/**
 * Имитация filter функции
 * @param {Array} array
 * @param {Function} fn - callback, which is called for every element in array param
 * @param  [thisArg] - defines this context
 * @returns {Array}
 */
function filter(array, fn, thisArg) {
  let newArray = [];
  thisArg = thisArg || array;

  for (let i = 0; i < array.length; i++) {
    let item = array[i], index = i;
    if (fn.call(thisArg, item, index, array)) {
      newArray.push(item);
    }
  }

  return newArray;
}

/**
 *
 * @param {Array} array
 * @param {Function} fn - callback, which is called for every element in array param
 * @param [thisArg] - defines this context
 * @returns {Array}
 */
function map(array, fn, thisArg) {
  let newArray = [];
  thisArg = thisArg || array;

  for (let i = 0; i < array.length; i++) {
    let item = array[i], index = i;
    newArray.push(fn.call(thisArg, item, index, array));
  }

  return newArray;
}

module.exports = {
  forEach: forEach,
  filter: filter,
  map: map
};