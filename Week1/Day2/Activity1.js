// Create a variable called age.Write an ifstatement that logs “Yes I can serve you” if age is greater than 17 and else logs “You aren’t old enough”.
// Activity:Take your if statement and add a variable called country.Now check if age > 17 
// and country == “UK”

let age = 21;
let country = 'USA';

if (age >= 18 && country == 'UK') {
    console.log('old enough');
} else if (age >=21 && country == 'USA'){
    console.log('old enough'); 
} else {
    console.log('too young get out');
}

// Activity on switch case:Create a variable for any pizza topping.Create a switch statement, 
// if the topping is one of your favourite ingredients, log to the console “These are important 
// ingredients for my pizza.” If you don’t mind having sausage or onions for example, log to the 
// console “I don’t mind having ${topping} on my pizza.” 
// Finally, for any toppings you don’t like log ${topping} should not be on a pizza.”

let topping = 'pineapple';

switch (topping){
    case 'pepperoni':
    case 'onion':
    case 'beef': 
    case 'chicken': 
console.log(`I don’t mind having ${topping} on my pizza.`);
    break;
    default:
        console.log(`${topping} should not be on a pizza`);    
} 

// Challenge 1(if/else):Create a variable called password.Check how many letters are in the password, 
// if there are less than 8 log to the console that the password is too short. Otherwise log the 
// password to the console

let password = 'boobeboop';

if (password.length >= 8){
 console.log(`Great your password ${password} has been created`);
} else {
    console.log('password too short. Try again');
}
