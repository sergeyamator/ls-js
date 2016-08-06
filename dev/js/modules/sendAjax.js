'use strict';

let render = require('./render');

/**
 * Отправляем запрос на сервере.
 * В случае удачи - получаем список городов,
 * после чего отрисовываем список
 * @param {String} url
 */
function sendAjax(url) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      resolve(xhr.response);
    });

    xhr.addEventListener('error', () => {
      reject();
    });

    xhr.send();
  });

  return promise;
}

module.exports = sendAjax;