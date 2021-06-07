// Cash machine time. Let’s create one that :dispenses cash if your pin number is correct and 
// your balance is equal to, or more than, the amount you’re trying to withdraw.Be creative!


const pinNum = 3302; 
const checkBal = 3000;

const withdrawCash = (num, amount) => {
    if (num !== pinNum) {
        console.log(`Wrong pin`)
    } else if (checkBal <= amount) {
        console.log(`Your balance is too low`)
    } else {
        console.log(`Here is your money`)
        updateBal = (checkBal - amount)
    }
};
withdrawCash(3302, 2000);
console.log(updateBal);


