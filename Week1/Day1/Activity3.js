// Create a program that calculate the number of days from today to your birth date.Create variables
//  that store your birth date, and today’s date

var today=new Date();

//birthday
let bday =new Date(today.getFullYear(),8-1, 13); //-1 or month counts up

if( today.getTime() > bday.getTime()) {
     bday.setFullYear(bday.getFullYear()+1);
 }
//hrs s ms
var sday=1000*60*60*24;

//calc diff between days
console.log(Math.ceil((bday.getTime()-today.getTime())/(sday))+
" days left until your Birthday!");

