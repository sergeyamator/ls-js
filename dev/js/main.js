'use strict';

let Calculator = require('./modules/calculator');

function SqrCalc(number) {
  Calculator.call(this, number);
}

SqrCalc.prototype = Object.create(Calculator.prototype);


SqrCalc.prototype.sum = function() {
  return Math.pow(Calculator.prototype.sum.apply(this, arguments), 2);
};


SqrCalc.prototype.dif = function() {
  return Math.pow(Calculator.prototype.dif.apply(this, arguments), 2);
};


SqrCalc.prototype.div = function() {
  return Math.pow(Calculator.prototype.div.apply(this, arguments), 2);
};


SqrCalc.prototype.mul = function() {
  return Math.pow(Calculator.prototype.mul.apply(this, arguments), 2);
};

let myCalculator = new SqrCalc(100);

console.log(myCalculator.sum(1, 2, 3)); // вернет 11 236
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.mul(2, 2)); //вернет 160 000

try {
  console.log(myCalculator.div(2, 2)); //вернет 625
} catch (e) {
  console.log(e.message);
}