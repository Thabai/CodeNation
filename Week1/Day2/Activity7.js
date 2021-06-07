// Challenge 7:Create a variable called word that takes a string.Create an if statement that checks 
// if the last letter is the same as the first. If it is return true, otherwise return false.

let string = 'noon';


console.log(string.length);

if (string.charAt(0) === string.charAt(string.length-1)){
    console.log('true');
}  else {
    console.log('false');
}
