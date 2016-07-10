'use strict';

/**
 *
 * @param {Number} number
 * @returns {{sum: sum, dif: dif, div: div, mul: mul}}
 */
function calculator(number) {
  /**
   * Функция суммирует все переданные аргументы
   * с сохранненным в замыкании первым числом
   * @returns {Number}
   */
  function sum() {
    let result = number;

    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }

    return result;
  }

  /**
   * Функция вычитает все переданные аргументы
   * из сохранненного в замыкании первого числа
   * @returns {Number}
   */
  function dif() {
    let result = number;

    for (let i = 0; i < arguments.length; i++) {
      result -= arguments[i];
    }

    return result;
  }

  /**
   * Функция делит первое сохраненное число в замыкании 
   * на все переданные аргументы
   * @returns {Number}
   */
  function div() {
    let result = number;

    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] === 0) {
        throw new Error('Деление на ноль запрещено');
      }

      result /= arguments[i];
    }

    return result;
  }

  /**
   * Функция перемножает все переданные аргументы с 
   * первым числом, которое хранится в замыкании
   * @returns {Number}
   */
  function mul() {
    let result = number;

    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }

    return result;
  }

  return {
    sum: sum,
    dif: dif,
    div: div,
    mul: mul
  }
}

module.exports = calculator;