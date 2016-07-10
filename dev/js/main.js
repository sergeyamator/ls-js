'use strict';

let filter = require('./modules/filter');
let calculator = require('./modules/calculator');

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
  someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
  noNumbers = ['это', 'массив', 'без', 'чисел'];

function isNumber(val) {
  return typeof val === 'number';
}

try {
  console.group('Функция isAllTrue');
  console.log(filter.isAllTrue(allNumbers, isNumber)); //вернет true
  console.log(filter.isAllTrue(someNumbers, isNumber)); //вернет false
  console.log(filter.isAllTrue(noNumbers, isNumber)); //вернет false
} catch (e) {
  console.log(e.message);
}
console.groupEnd();

console.group('Функция isSomeTrue');
try {
  console.log(filter.isSomeTrue(allNumbers, isNumber)); //вернет true
  console.log(filter.isSomeTrue(someNumbers, isNumber)); //вернет false
  console.log(filter.isSomeTrue(noNumbers, isNumber)); //вернет false
} catch (e) {
  console.log(e.message);
}
console.groupEnd()

let myCalculator = calculator(100);

console.group('Calculator');
console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.mul(2, 2)); //вернет 400

try {
  console.log(myCalculator.div(2, 2)); //вернет 25
} catch (e) {
  console.log(e.message);
}

console.groupEnd();
