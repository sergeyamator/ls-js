'use strict';

/**
 *
 * @param {Number} number
 * @returns {{sum: sum, dif: dif, div: div, mul: mul}}
 */
function Calculator(number) {
  this.number = number;
}

/**
 * Функция суммирует все переданные аргументы
 * с сохранненным в замыкании первым числом
 * @returns {Number}
 */
Calculator.prototype.sum = function() {
  let result = this.number;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
};

/**
 * Функция вычитает все переданные аргументы
 * из сохранненного в замыкании первого числа
 * @returns {Number}
 */
Calculator.prototype.dif = function() {
  let result = this.number;

  for (let i = 0; i < arguments.length; i++) {
    result -= arguments[i];
  }

  return result;
};

/**
 * Функция делит первое сохраненное число в замыкании
 * на все переданные аргументы
 * @returns {Number}
 */
Calculator.prototype.div = function() {
  let result = this.number;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === 0) {
      throw new Error('Деление на ноль запрещено');
    }

    result /= arguments[i];
  }

  return result;
};

/**
 * Функция перемножает все переданные аргументы с
 * первым числом, которое хранится в замыкании
 * @returns {Number}
 */
Calculator.prototype.mul = function() {
  let result = this.number;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  return result;
};

module.exports = Calculator;