'use strict';

let render = require('./render');

/**
 * Отправляем запрос на сервере.
 * В случае удачи - получаем список городов,
 * после чего отрисовываем список
 * @param {String} url
 */
function sendAjax(url, callback) {
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

  promise.then(
    (result) => {
      callback(result, document.querySelector('.cities-list'));
    },

    () => {
      new Error('Во время запроса произошла ошибка');
    }
  )
}

module.exports = sendAjax;