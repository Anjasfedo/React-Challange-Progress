// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

// use prompt: 
// const age = window.prompt('Enter your age:');
// 
const checkAge = (age) => {
    const gap = Math.abs(age-18);
    if(age >= 18) {
        return 'You are old enough to drive.';
    } else {
        return `You are left with ${gap} years to drive.`;
    }
}
// console.log(checkAge(30));
// console.log(checkAge(15));
// 

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
const comparisonAge = (myAge, yourAge) => {
    const gap = Math.abs(yourAge-myAge);
    if((yourAge > myAge)){
        return `You are ${gap} years older than me.`;
    } else {
        return `I am are ${gap} years older than You.`;
    }
};

// console.log(comparisonAge(30, 15));
// 

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

// using if else
// ternary operator.
// let a = 4
// let b = 3
//   4 is greater than 3
let a = 4;
let b = 3;

const isGreater = a > b? 'a is greater than b': 'a is less than b';
// console.log(isGreater)
// 

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
const isEvenorOdd = (num) => {
    if ((num % 2 === 0)) {
        return `${num} is an even number`;
    } else if ((num % 2 !== 0)){
        return `${num} is an odd number`;
    } else {
        return `invalid number`;
    }
};

// console.log(isEvenorOdd(1));
// console.log(isEvenorOdd(10));