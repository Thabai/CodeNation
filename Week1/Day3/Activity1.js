// Write an if statement that checks the ages of cinema goers and displays ticket prices

// let age = 60;
// let child = '£8';
// let adult = '£10.95';
// let senior = '£7.50';

//     if(age < 17) {
//         console.log(`That will be ${child} please`);
//     }
//     else if (age >= 18 && age <= 59) {
//         console.log(`That will be ${adult} please`);
//     }
//     else {
//         console.log(`That will be ${senior} please`);
//     }

// Take this code and turn it into arrow function syntax
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;    
//     } else {
//         return (n * factorial(n-1));   
//      }}
//      console.log(factorial(33));

// const factorial =(n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//         } else {
//             return (n * factorial(n-1));   
//          }}
//          console.log(factorial(33));

// Here's an example of a function that includes a parameter.Parameters are responsible for functions 
// being able to work on different data inputs. Edit the snippet below to include two parameters and 
// a running order count updated when the function is called :
// let orderCount = 0; 
// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }
//     takeOrder("pineapple");

let orderCount = 0; 
const takeOrder = (topping, size) => {
    console.log(`Pizza with ${topping} in ${size}`);
     orderCount++;
    }
takeOrder("pineapple", "large");
console.log(orderCount);
takeOrder("pineapple", "large");
console.log(orderCount);
takeOrder("pepperoni", "small");
console.log(orderCount);