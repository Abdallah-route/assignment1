"use strict";

//number 1
let number = "123";
number *= 1;
number += 7;
console.log(number);

//number 2
const given = false;
if (given == true) {
    console.log("good to go");
} else {
    console.log('invalid');
}

//number 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//number 4
const example = [1, 2, 4, 5, 6, 7, 8];
const evens = example.filter(num => num % 2 == 0);
console.log(evens);

//number 5
function mergeArrays(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    return merged;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

//number 6

const day = 2
switch (day) {
    case 1:
        console.log('sunday');
        break;
    case 2:
        console.log('monday');
        break;
    case 3:
        console.log('tuesday');
        break;
    case 4:
        console.log('wednesday');
        break;
    case 5:
        console.log('thursday');
        break;
    case 6:
        console.log('friday');
        break;
    case 7:
        console.log('satureday');
        break;
    default:
        console.log('not a day');
}


// number7
function lengths(arr) {
    return arr.map(str => str.length);
}
console.log(lengths(['a', 'ab', 'abc']));

//number 8
function suitableNumbers(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'divisible by both';
    } else {
        return 'not divisble by both';
    }
}
console.log(suitableNumbers(15));
console.log(suitableNumbers(17));

//number 9
const square = num => num ** 2;
console.log(square(5));
console.log(square(29));


//number 10
const me = { name: 'abdallah', age: 27 };
function person({ name, age }) {
    return `my name is ${name} and iam ${age} years old `;
}
console.log(person(me));

//number 11
function submission(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
console.log(submission(1, 5, 6, 7));

//number 12
function b3d_3_swany() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
        }, 3000);
    })
}
b3d_3_swany().then(message => console.log(message));

//number 13
function whichOne(arr) {
    return Math.max(...arr);
}
console.log(whichOne([1, 3, 77, 90, 101]));

//number 14
function keys(obj) {
    return Object.keys(obj);
}
console.log(keys(me))

// number 15
function splitWords(str) {
    return str.split(' ');

}
const sentence = 'the quick brown fox';
console.log(splitWords(sentence));




/*
essay 
1. (for each ) 
method of an array
loops through each element
(for of)
a loop statement
loops theough iterable objects


2. hoisting (rf3) , temporal deadzone ( time between entering scope and the let or const to be declared)

3. == (compares value ) , === (compares value and type)

5. conversion ( done by java), coersion(done by me)

