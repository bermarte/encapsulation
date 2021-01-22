'use strict';

//I kept the comment to see the steps required to solve the challenge

const calculatorPrototype = {
  get value() {
    //console.log('test', this.state.value);
    return this.state.value;
  },
  add: function (x, y = undefined) {
    //console.log('add', x, y);
    //if (x === undefined)x=0;
    if (y === undefined){
      //add(-1) should give 4
      y = this.state.value;
    }
    this.state.value = x+y;
  },
  subtract: function (x, y = undefined) {
    //console.log(x, y);
    //if (x === undefined)x=0;
    if (y === undefined){
      y = this.state.value;
      //console.log('y undefined ', x, y);
      const tmp = y-x;
      //console.log('tmp ', tmp);
      this.state.value = tmp;
      //console.log('this.state.value', this.state.value)
    }
    else{
      this.state.value = x-y;
    }
  }
};
console.log('calculatorPrototype:', calculatorPrototype);


console.log('--- calculator 1 ---');

const calculator1 = Object.create(calculatorPrototype);
calculator1.id = 1;
calculator1.state = { value: 0, };


calculator1.add(1);
//console.log(calculator1.value);
console.assert(calculator1.value === 1, 'Test 1.a');

calculator1.subtract(0, 2);
console.assert(calculator1.value === -2, 'Test 1.b');

calculator1.subtract(3);
//console.log('calculator1.value', calculator1.value);
console.assert(calculator1.value === -5, 'Test 1.c');

calculator1.add(2, 3);
console.assert(calculator1.value === 5, 'Test 1.d');

calculator1.add(-1);
console.assert(calculator1.value === 4, 'Test 1.e');


console.log('calculator 1:', calculator1);


console.log('--- calculator 2 ---');

const calculator2 = Object.create(calculatorPrototype);
calculator2.id = 2;
calculator2.state = { value: 12, };


calculator2.add(1, 0);
console.assert(calculator2.value === 1, 'Test 2.a');

calculator2.subtract(2);
console.assert(calculator2.value === -1, 'Test 2.b');

calculator2.subtract(-1);
console.assert(calculator2.value === 0, 'Test 2.c');

calculator2.add(3);
console.assert(calculator2.value === 3, 'Test 2.d');

calculator2.subtract(0, 5);
console.assert(calculator2.value === -5, 'Test 2.e');


console.log('calculator 2:', calculator2);
