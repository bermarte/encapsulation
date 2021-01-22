'use strict';


const functionLiteral = function () { };

// delegation

const test1 = functionLiteral.__proto__ === Function.prototype;
console.assert(test1, '1. functions delegate to ...');

const test2 = Function.__proto__.__proto__ === Object.prototype;
console.assert(test2, '2. the next step in the delegation chain is ...');

const test3 = Object.prototype.__proto__ === null;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = functionLiteral.hasOwnProperty('bind') === false;
console.assert(test4, '4. functions have own property .bind');

const test5 = Function.prototype.hasOwnProperty('bind') === true;
console.assert(test5, '5. Function.prototype has own property .bind');

const test6 = functionLiteral.bind === Function.prototype.bind;
console.assert(test6, '6. functions delegate .bind');


// static methods

// Function has no static methods
