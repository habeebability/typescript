"use strict";
let character = "afeez";
let age = 30;
let isBlackBelt = false;
// character = "34";
const inputs = document.querySelectorAll('input');
console.log(character);
// console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(4));
// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
let numbers = [10, 20, 30, 40];
numbers.push(25);
let mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push('ryu');
mixed.push(5);
mixed[0] = 3;
console.log(mixed);
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
// explicit types
let word;
let ageVal;
let isLoggedIn;
ageVal = 30;
isLoggedIn = true;
// arrays
let ninjas = [];
ninjas.push('yoshi');
// union types
let mixedArray = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(false);
console.log(mixedArray);
let uid;
uid = '123';
uid = 123;
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' };
// Type any
let age2 = 25;
age2 = true;
let mixArray = [];
let ninjaThree;
ninjaThree = { name: 'yoshi', age: 30, beltColour: 'black' };
ninjaThree.name = 50;
// Function Basics
let greet = () => {
    console.log('hello world');
};
