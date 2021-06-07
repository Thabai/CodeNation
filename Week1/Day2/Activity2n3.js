// Challenge 2(use both if/else and switch):Create a variable called num.Check if the variable is 
// divisible by 3 or 5. If it is log “This number is divisible by 3 or 5” to the console. 
// Otherwise log “This number is not divisible by 3 or 5”

// Challenge 3:Create a variable called num.
//     If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the 
//     console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num 
//     to the console.

// let num = 11;

// if (num % 3 === 0 || num % 5 === 0) {
// console.log("This number is divisible by 3 or 5");
// }
// else{
// console.log("This number is not divisible by 3 or 5");
// }


// let num = 11;


// if (num % 3 === 0 && num % 5 === 0) {
//     console.log('fizz buzz');
// } else if (num % 3 === 0) {
//     console.log('fizz');
// } else if (num % 5 === 0) {
//     console.log('buzz');
// } else {
//     console.log(num);
// }

let num = 15;

switch (true) {
case num % 3 ==0 && num % 5 ==0:
console.log("fizz buzz");
break;
case num % 3 ==0:
console.log("fizz");
break;
case num % 5 ==0:
console.log("buzz");
break;
default:
console.log(num);
break;
}

