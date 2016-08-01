'use strict';

function addCookie(form) {
  let name = form.querySelector('[data-cookie="name"]').value,
    value = form.querySelector('[data-cookie="value"]').value,
    day = Number(form.querySelector('[data-cookie="day"]').value),
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
  let inputs = form.querySelectorAll('input');
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
