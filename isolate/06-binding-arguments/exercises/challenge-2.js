'use strict';

// psst. use the debugger!

// don't change this code
const obj1 = { thing: '' };
const obj2 = { thing: 0 };
const obj3 = { thing: true };

function addThem(boundArg, freeArg) {
  return this.thing + boundArg + freeArg;
}

// do write code here
const bound1 = addThem.bind(obj1, 'first');
const bound2 = addThem.bind(obj2,1);
const bound3 = addThem.bind(obj3,'');

// don't change this code

const result1 = bound1(1);
const test1 = result1 === 'first1';
console.assert(test1, 'Test 1');

const result2 = bound1(false);
//console.log(result2); //kept to see the evolution
const test2 = result2 === 'firstfalse';
console.assert(test2, 'Test 2');

const result3 = bound2(2);
const test3 = result3 === 3;
console.assert(test3, 'Test 3');

const result4 = bound2(-1);
const test4 = result4 === 0;
console.assert(test4, 'Test 4');

const result5 = bound3(null);
//console.log(result5); //kept to see the evolution
const test5 = result5 === 'truenull';
console.assert(test5, 'Test 5');

const result6 = bound3(12);
const test6 = result6 === 'true12';
console.assert(test6, 'Test 6');
