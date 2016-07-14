/**+
 * 
 * Функция глубокого сравнения объектов
 * @param {Object} firstObject
 * @param {Object} secondObject
 * @returns {boolean}
 */
function deepEqual(firstObject, secondObject) {
  let result = false;
  
  if (firstObject === secondObject) return true;

  function check(firstVal, secondVal) {
    let result = false;

    if (isNumber(firstVal) && isNumber(secondVal)) {
      result = isEqualValue(firstVal, secondVal);

      if (!result) return false;
    } else {
      if (isString(firstVal) && isString(secondVal)) {
        if (firstVal.length !== secondVal.length || firstVal !== secondVal) {
          result = false;
          return;
        }

        result = isEqualValue(firstVal, secondVal);

        if (!result) return false;
      } else {
        if (isDate(firstVal) && isDate(secondVal)) {
          if (!isEqualValue(firstVal.valueOf(), secondVal.valueOf())) return false;

          result = true;
        } else {
          if (isObject(firstVal) && isObject(secondVal)) {
            result = deepEqual(firstVal, secondVal);
          } else {
            if (isArray(firstVal) && (isArray(secondVal))) {
              for (let i = 0; i < firstVal.length; i++) {
                result = deepEqual(firstVal[i], secondVal[i]);
                if (!result) break;
              }
            }
          }
        }
      }
    }

    return result;
  }

  if (isObject(firstObject) && isObject(secondObject)) {
    for (let prop in firstObject) {
      if (!firstObject.hasOwnProperty(prop) && !secondObject.hasOwnProperty(prop)) return false;

      let first = firstObject[prop],
        second = secondObject[prop];

      result = check(first, second);

      if (!result) return false;
    }
  } else {
    result = check(firstObject, secondObject);
  }

  return result;
}

/**
 * Проверяет, является переданный аргумент числом
 * @param value
 * @return {Boolean}
 */
function isNumber(value) {
  if (!isFinite(value)) return false;

  return typeof value === 'number';
}
/**
 * Проверяет, является переданный аргумент строкой
 * @param value
 * @return {Boolean}
 */
function isString(value) {
  return typeof value === 'string';
}

/**
 * Проверяем является ли переданный аргумент датой
 * @param value
 * @returns {boolean}
 */
function isDate(value) {
  return value instanceof Date;
}

function isArray(value) {
  return value instanceof Array;
}

/**
 * Проверяем является ли переданный аргумент объектом
 * @param value
 * @returns {boolean}
 */
function isObject(value) {
  return value.toString() === '[object Object]';
}

/**
 * Проверяет, равны ли между собой примитивные типы данных
 * @param first
 * @param second
 * @return {Boolean}
 */
function isEqualValue(first, second) {
  return first === second;
}

module.exports = deepEqual;