'use strict';


const arrayLiteral = [];

// delegation
const test1 = arrayLiteral.__proto__ === Array.prototype;
console.assert(test1, '1. arrays delegate to ...');

const test2 = Array.__proto__.__proto__ === Object.prototype;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object.prototype.__proto__ === null;
console.assert(test3, '3. the final step in the delegation chain is ...');

// instance methods & properties

const test4 = arrayLiteral.hasOwnProperty('reduce') === false;
console.assert(test4, '4. arrays have own property .reduce');

const test5 = Array.prototype.hasOwnProperty('reduce') === true;
console.assert(test5, '5. Array.prototype has own property .reduce');

const test6 = arrayLiteral.reduce === Array.prototype.reduce;
console.assert(test6, '6. arrays delegate .reduce');


// static methods

const test7 = arrayLiteral.hasOwnProperty('isArray') === false;
console.assert(test7, '7. arrays have own property isArray');

const test8 = Array.prototype.hasOwnProperty('isArray') === false;
console.assert(test8, '8. Array.prototype has own property isArray');

const test9 = Array.hasOwnProperty('isArray') === true;
console.assert(test9, '9. Array has own property isArray');
