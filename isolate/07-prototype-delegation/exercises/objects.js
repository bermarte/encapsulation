'use strict';


const objectLiteral = {};

// delegation

const test1 = objectLiteral.__proto__ === Object.prototype;
console.assert(test1, '1. objects delegate to ...');

const test3 = Object.prototype.__proto__ === null;
console.assert(test3, '3. the final step in the delegation chain is ...');


// instance methods & properties

const test4 = objectLiteral.hasOwnProperty('hasOwnProperty') === false;
console.assert(test4, '4. objects have own property .hasOwnProperty');

const test5 = Object.prototype.hasOwnProperty('hasOwnProperty') === true;
console.assert(test5, '5. Object.prototype has own property .hasOwnProperty');

const test6 = objectLiteral.hasOwnProperty === Object.prototype.hasOwnProperty;
console.assert(test6, '6. objects delegate .hasOwnProperty');


// static methods

const test7 = objectLiteral.hasOwnProperty('keys') === false;
console.assert(test7, '7. objects have own property keys');

const test8 = Object.prototype.hasOwnProperty('keys') === false;
console.assert(test8, '8. Object.prototype has own property keys');

const test9 = Object.hasOwnProperty('keys') === true;
console.assert(test9, '9. Object has own property keys');
