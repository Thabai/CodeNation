// let d = 13;
// let m = 8;
// let y = 1989;

// if (m < 3) {
//     m = m + 12;
//     y = y - 1;
// } 

// let f = Math.floor(y / 100);
// let L = y - 100 * f;
// let s = Math.floor(2.6 * m - 5.39) + Math.floor(L / 4) + Math.floor(f / 4) + d + L - 2 * f;
// let x = s - (7 * Math.floor(s / 7));

// console.log(x);

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const bDayParsed = Date.parse("Aug 13, 1989");
let d = new Date(bDayParsed);
console.log(days[d.getDay()]);

