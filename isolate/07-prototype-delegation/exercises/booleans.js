'use strict';


const booleanLiteral = false;

// delegation

const test1 = booleanLiteral.__proto__ === Boolean.prototype;
console.assert(test1, '1. booleans delegate to ...');

const test2 = Boolean.__proto__.__proto__ === Object.prototype;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object.prototype.__proto__ === null;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = booleanLiteral.hasOwnProperty('toString') === false;
console.assert(test4, '4. booleans have own property .toString');

const test5 = Boolean.prototype.hasOwnProperty('toString') === true;
console.assert(test5, '5. Boolean.prototype has own property .toString');

const test6 = booleanLiteral.toString === Boolean.prototype.toString;
console.assert(test6, '6. booleans delegate .toString');


// static methods

// Boolean has no static methods
