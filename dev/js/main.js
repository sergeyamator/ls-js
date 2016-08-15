'use strict';

let Calculator = require('./modules/calculator');

class SqrCalc extends Calculator {
  constructor(number) {
    super(number);
  }

  sum() {
    return Math.pow(super.sum.apply(this, arguments), 2);
  }

  dif() {
    return Math.pow(super.dif.apply(this, arguments), 2);
  }

  div() {
    return Math.pow(super.div.apply(this, arguments), 2);
  }

  mul() {
    return Math.pow(super.mul.apply(this, arguments), 2);
  }
}


let myCalculator = new SqrCalc(100);
console.log(myCalculator.sum(1, 2, 3)); // вернет 11 236
console.log(myCalculator.dif(10, 20)); //вернет 4 900
console.log(myCalculator.mul(2, 2)); //вернет 160 000

try {
  console.log(myCalculator.div(2, 2)); //вернет 625
} catch (e) {
  console.log(e.message);
}