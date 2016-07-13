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

/**
 *
 * @param {Array} array
 * @param {Function} fn - callback, which is called for every element in array param
 * @param {Number} [init]
 */
function reduce(array, fn, init) {
  let prev = null,
    index = 0;

  if (!isNaN(init)) {
    prev = init;
  } else {
    prev = array[0];
    index = 1;
  }

  for (index; index < array.length; index++) {
    let current = array[index];

    prev = fn(prev, current, index, array);
  }

  return prev;
}

/**
 *
 * @param {Array} array
 * @param {Number} begin
 * @param {Number} [deleteCount]
 * @returns {Array}
 */
function splice(array, begin, deleteCount) {
  const LAST_ELEMENT_IN_ARRAY = array.length - 1,
    EXTRA_PARAMS_STARTED_FROM = 2;
  let deletedArray = [], partAfterDelete = [];

  if (begin > array.length) {
    begin = LAST_ELEMENT_IN_ARRAY;
  }

  if (begin < 0) {
    begin = array.length + begin;
  }

  if (deleteCount) {
    deletedArray = slice(array, begin, begin + deleteCount);
    partAfterDelete = slice(array, begin + deleteCount);
    array.length = begin;
  }

  if (arguments.length > EXTRA_PARAMS_STARTED_FROM) {
    for (let i = EXTRA_PARAMS_STARTED_FROM + 1; i < arguments.length; i++) {
      array[array.length] = arguments[i];
    }
  }

  for (let i = 0; i < partAfterDelete.length; i++) {
    array[array.length] = partAfterDelete[i];
  }

  return deletedArray;
}

module.exports = {
  forEach: forEach,
  filter: filter,
  map: map,
  slice: slice,
  reduce: reduce,
  splice: splice
};
