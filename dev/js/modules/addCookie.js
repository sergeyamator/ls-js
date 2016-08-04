'use strict';

let form = document.querySelector('form'),
  inputs = document.querySelectorAll('input'),
  nameField = form.querySelector('[data-cookie="name"]'),
  valueField = form.querySelector('[data-cookie="value"]'),
  dateField = form.querySelector('[data-cookie="day"]');

function addCookie() {
  let name = nameField.value,
    value = valueField.value,
    day = Number(dateField.value),
    toDay = new Date();

  if (isValid(form)) {
    toDay.setDate(toDay.getDate() + day);
    document.cookie = `${name} = ${value}; expires = ${toDay.toUTCString()}`;
    clearForm(form);
  } else {
    throw new Error('Заполнены не все поля');
  }
}

function isValid(form) {
  if (!form) return;
  let isValid = null;

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      isValid = false;
      break;
    } else {
      isValid = true;
    }
  }

  return isValid;
}

function clearForm(form) {
  form.reset();
}

module.exports = addCookie;
