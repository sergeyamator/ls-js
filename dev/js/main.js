'use strict';

let array = require('./array');

let arrayElement = ['я', 4, 3, 5, 10, 'функции'];

/**
 * Вызываем forEach и выводим его в консол
 */
console.group('forEach');
array.forEach(arrayElement, (item, index, arr) => console.log(item, index, arr));
console.groupEnd();


/**
 * Вызываем фильтр и вызываем его в консоль
 */
console.group('filter');
let greaterThan4 = array.filter(arrayElement, (item, index) => item > 4);
console.log(greaterThan4);
console.groupEnd();

/**
 * Вызываем map
 */
console.group('map');
let map = array.map(arrayElement, (item) => typeof item);
console.log(map);
console.groupEnd();

