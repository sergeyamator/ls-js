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
 * Имитация работы map функции
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

/**
 * Имитация метода slice
 * @param {Array} array
 * @param {Number} [begin]
 * @param {Number} [end]
 */
function slice(array, begin, end) {
  let result = [];

  begin = begin || 0;
  end = end || array.length;

  if (begin < 0) {
    begin = array.length + begin;
  }
  for (let i = begin; i < end; i++) {
    result.push(array[i]);
  }

  return result;
}

function reduce(array, fn, init) {
  debugger;
  let prev = null,
    index = 0,
    result = null;

  if (!isNaN(init)) {
    prev = init;
  } else {
    prev = array[0];
    index = 1;
  }

  for (index; index <= array.length; index++) {
      let current = array[index];

    result = fn(prev, current, index, array);
    prev = array[index];
  }

  return result;
}

module.exports = {
  forEach: forEach,
  filter: filter,
  map: map,
  slice: slice,
  reduce: reduce
};