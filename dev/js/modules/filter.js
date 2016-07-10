'use strict';

/**
 * Функция фильрования. Если каждое значение массива
 * удавлетворяет условию, возвращается true
 * @param {Array} source
 * @param {Function} filterFn
 * @returns {boolean}
 */
function isAllTrue(source, filterFn) {
  if (!source.length) {
    throw new Error('Пустой массив');
  }

  for (let i = 0; i < source.length; i++) {
    if (!filterFn(source[i])) return false;
  }

  return true;
}

/**
 * Функция фильрования. Если хоть одно значение массива
 * удавлетворяет условию, возвращается true
 * @param {Array} source
 * @param {Function} filterFn
 * @returns {boolean}
 */
function isSomeTrue(source, filterFn) {
  if (!source.length) {
    throw new Error('Пустой массив');
  }

  for (let i = 0; i < source.length; i++) {
    if (filterFn(source[i])) return true;
  }

  return false;
}

module.exports = {
  isAllTrue: isAllTrue,
  isSomeTrue: isSomeTrue
};