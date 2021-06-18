let availBal = 0;
let drinks = {
    Coke:{'price': 1,'stock': 10},
    Fanta:{'price': 2,'stock': 6},
    Sprite:{'price': 3,'stock': 20},
    Tizer:{'price': 10,'stock': 0}
};
const cashInput = (cash) => {
    availBal = cash;
    console.log("Your available balance is £" +availBal);
}
const checkStock = (drinkChoice) => {
    if (drinks[drinkChoice]['stock']>0) {
        console.log(drinkChoice+" is in stock");
     } else {
         console.log(drinkChoice+" is not available");
     }
    if (drinks[drinkChoice]['stock']>0 && availBal >= drinks[drinkChoice]['price']){
        console.log('Enjoy you drink'); 
        drinks[drinkChoice]['stock'] --;
        newBal = availBal-drinks[drinkChoice]['price'];
        console.log("Your available balance is £" +newBal);
    } 
    if (drinks[drinkChoice]['stock']>0 && availBal <= drinks[drinkChoice]['price']){
        console.log('Please add more money for selected drink');
    } 
}


cashInput(8);
checkStock('Sprite');

let drinks1 = [[`coffee`, 1, 10],
[`tea`, 2, 6],
[`orange juice`, 3, 20],
[`water`, 0.25, 0]];
let balance = 0;
const cashInput1 = (coin) => {
balance = balance + coin;
console.log(`You have £${balance} to spend.`);
}
const checkStock1 = (order) =>{
if (drinks1[order][2] > 0){
console.log(`Your drink is in stock. There are ${drinks1[order][2]} bottles left.`);
return true;
}
else {console.log(`Sorry, your drink is not available.`);
return false;}
}
const makeOrder = (coin, order) =>{
cashInput1(coin);
if ((drinks1[order][2] > 0) && (drinks1[order][1] <= balance)) {
console.log(`Enjoy your ${drinks1[order][0]}.`);
balance = balance - drinks1[order][1];
console.log(`Your balance is now £${balance}.`);
}
else if ((drinks1[order][2] > 0) && (drinks1[order][1] > balance)) {
console.log(`Sorry, you do not have enough money for this drink`);
}
else if (drinks1[order][2] < 0) {
console.log(`Sorry, your drink choice is not available.`);
}
else {
console.log(`Something went wrong.`);
}
}

makeOrder(10, 2);