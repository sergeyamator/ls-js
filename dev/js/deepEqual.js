function deepEqual(firstObject, secondObject) {
  if (firstObject === secondObject) return true;

  for (let prop in firstObject) {
    let firstVal = firstObject[prop],
      secondVal = secondObject[prop];

    if (!firstObject.hasOwnProperty(prop) && !secondObject.hasOwnProperty(prop)) return false;

    if (isNumber(firstVal) && isNumber(secondVal)) {
      if (!isEqualValue(firstVal, secondVal)) return false;
    } else {
      if (isString(firstVal) && isString(secondVal)) {
        if (firstVal.length !== secondVal.length) return false;

        if (firstVal !== secondVal) return false;
      } else {
        if (isDate(firstVal) && isDate(secondVal)) {
          if (!isEqualValue(firstVal.valueOf(), secondVal.valueOf())) return false;
        } else {

        }
      }
    }
  }

  return true;
}

/**
 * Проверяет, является переданный аргумент числом
 * @param value
 * @return {Boolean}
 */
function isNumber(value) {
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
  return Array.isArray(value);
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