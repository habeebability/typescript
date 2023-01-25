let character = "afeez";

let age = 30;

let isBlackBelt = false;

// character = "34";

const inputs = document.querySelectorAll('input');

console.log(character);


// console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})



const circ = (diameter: number) => {
    return diameter * Math.PI
}

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
}

ninja.age = 40;
ninja.name = 'ryu';

ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
}


// explicit types
let word: string;
let ageVal: number;
let isLoggedIn: boolean;

ageVal = 30;

isLoggedIn = true;

// arrays

let ninjas: string[] = [];

ninjas.push('yoshi');

// union types
let mixedArray: (string|number|boolean)[] = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(false);

console.log(mixedArray);

let uid: string|number;

uid = '123';
uid = 123;



// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}


ninjaTwo = {name: 'mario', age: 20, beltColour: 'black'}

// Type any
let age2: any = 25;

age2 = true;


let mixArray : any[] = [];

let ninjaThree : {name:any, age:any, beltColour:any};

ninjaThree = {name: 'yoshi', age: 30, beltColour: 'black'};

ninjaThree.name = 50;


// Function Basics
let greet = () => {
    console.log('hello world');
}


