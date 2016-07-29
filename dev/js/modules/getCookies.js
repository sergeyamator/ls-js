'use strict';

function getAllCookies() {
  let cookies = document.cookie.split(';');
  let result = {};

  cookies.forEach(cookie => {
    let value = cookie.split('=');
    result[value[0]] = value[1]
  });

  console.log(result);
  return result;
}

module.exports = getAllCookies;