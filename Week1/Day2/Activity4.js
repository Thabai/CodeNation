// Challenge 4:Create a variable called num.Check if the number is a palindrome 
// (looks the same forward as it does backwards e.g. 1001 or 20202)

let n = 2552;
n = n + "";
let n2 = n.split("").reverse().join("");

if (n === n2) {
console.log("Number is a palindrome.")
} else {
console.log("It is not palindrome")
}

