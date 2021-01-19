const obj1 = {
  greeting: ``,
  setGreetingName: function (newName) {
    this.greeting = `hi, I'm ${newName}!`;
  }
};

const obj2 = {
  greeting: ``,
  set greetingName(newName) {
    // write me!
    this.greeting = `hi, I'm ${newName}!`;
  }
};

obj1.setGreetingName('obj1');
console.assert(obj1.greeting === "hi, I'm obj1!", 'Test 1');

obj2.greetingName = 'obj2'; // write this line
console.assert(obj2.greeting === "hi, I'm obj2!", 'Test 2');

obj1.setGreetingName('hi');
console.assert(obj1.greeting === "hi, I'm hi!", 'Test 3');

obj2.greetingName = 'bye'; // write this line
console.assert(obj2.greeting === "hi, I'm bye!", 'Test 4');
