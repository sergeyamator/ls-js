'use strict';

function timer(ms) {
 return new Promise((resolve) => {
   setTimeout(resolve, ms);
 })
}

module.exports = timer;