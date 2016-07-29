'use strict';

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC"`;
}

module.exports = deleteCookie;
