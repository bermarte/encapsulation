'use strict';


const numberLiteral = 0;

// delegation

const test1 = numberLiteral.__proto__ === Number.prototype;
console.assert(test1, '1. numbers delegate to ...');

const test2 = Number.__proto__.__proto__ === Object.prototype;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object.prototype.__proto__ === null;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = numberLiteral.hasOwnProperty('toString') === false;
console.assert(test4, '4. numbers have own property .toString');

const test5 = Number.prototype.hasOwnProperty('toString') === true;
console.assert(test5, '5. Number.prototype has own property .toString');

const test6 = numberLiteral.toString === Number.prototype.toString;
console.assert(test6, '6. numbers delegate .toString');


// static methods

const test7 = numberLiteral.hasOwnProperty('isNaN') === false;
console.assert(test7, '7. numbers have own property .isNaN');

const test8 = Number.prototype.hasOwnProperty('isNaN') === false;
console.assert(test8, '8. Number.prototype has own property .isNaN');

const test9 = Number.hasOwnProperty('isNaN') === true;
console.assert(test9, '9. Number has own property .isNaN');
