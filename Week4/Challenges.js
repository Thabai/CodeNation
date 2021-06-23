// Challenge 1: Write a simple function which logs “Hello Code Nation” to the console.
// Then write a higher order function which will run our simple function 5 times, even though you only call it one time.

// const logs = (message) => {
//     for (let i = 0; i < 5; i++){
//     console.log(message);
    
// }}
// logs('Hello Code Nation')

// Challenge 2: Write a simple function which has two parameters and returns their sum (basically takes in two numbers, adds
// them together and returns the result)
// Then create a higher order function, which takes three parameters (a function and two numbers). Use this higher order 
// function to run your simple function 5 times, each time adding the result to a total variable.
// Then return the total variable.Show the result in the console.


// const sumNum = (num1, num2) => {
//     return (num1 + num2)
// }


// let totalNum = (num1, num2) => {
//     let total = 0;
//     for (let i= 0; i < 5; i++) {
//     total += sumNum(num1, num2);
//     console.log(total)
// } 
// }

// totalNum(3, 4);

// Challenge 3: The array method map is an example of a higher order function. Declare an array with five
// numbers, then use map to iterate through the array and multiply each array item by 3

const array1 = [1, 4, 9, 12, 16];

// pass a function to map
const map1 = array1.map(i => i * 3);

console.log(map1);

// Challenge 4: Test this function to make sure it works by passing a number to the doMath function, then passing a
// number and one of the four maths functions, to the returned function.

const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a+b
}
const divide = (a,b) => {
    return a/b
}
const subtract = (a,b) => {
    return a-b
}

const doMath = (num1) => {
    return (num2, fn) => {
     console.log(fn(num1,num2))
}
}

// const doMath = (num1, num2, fn) => {
//         console.log(fn(num1,num2))
//     }
   
doMath(5)(2, divide)

// doMath(5, 5, multiply);
// doMath(5, 5, add);
// doMath(5, 5, subtract);