//  for (var i = 0; i < 3; i++){
//     for (var j = 0; j < 2; j++){
//     console.log("   |  |  "); 
//     }
//     if(i !== 2){
//       console.log("-----------");
//     }
// }
// let grid = [
//     ["[  ]","[ x ]","[ o ]"],
//     ["[  ]","[ x ]","[ o ]"],
//     ["[  ]","[  ]","[ o ]"]
// ];

// for (var i = 0; i < grid.length; i++){
//     var line ="";
//     for (var j = 0; j < grid[i].length; j++){
//         line = line+grid[i][j]; 
//     }
//     console.log(line);
//     if(i !== 2){
//       console.log("------------");
//     }
// }


// var num = (Math.random()*10);

// console.log(num);
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));


// var myArray = [20, 40, 80, 100];
// var revMyArr = [].concat(myArray).reverse();
// console.log(revMyArr);
// // [100, 80, 40, 20]
// //

//  console.log('All Around the World'.charAt(7).toUpperCase());

//  let name = "something";
//  name = "hello";
// console.log(name);

// let cName = "Bob";
//   console.log('Thank you ' + cName + ' Welcome to the website');
// console.log(`Thank you ${cName} Welcome to the website`);
// //

// let car = "Peugeot";
// (car == "Ford" || car == "GM"){
// console.log("You've got an American car!");
// }
// else if(car == "Peugeot" || car == "Citroen"){
// console.log("You've got a French boy!");
// }
// else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
// console.log("Japanese cars are dead quiet!");
// }
// else if(car == "Mercedes"){
// console.log("You are proper posh German!");
// }
// else if(car == "Volkswagen"){
// console.log("German aren't that bad at all!");
// }
// else if(car == "Hyundai" || car == "Kia"){
// console.log("South Korean cars are getting popular!");
// }
// else{
// console.log("Your car is not in the top ten companies in the world!");}




const grade = 10;

switch (true){
    case grade >= 80:
        console.log('Dist');
        break;
    default:
        console.log('fail');    
} 

if (0 == false){
    console.log("duck me");
}


let player = {
    age: 99,
    name: 'Bob'
};

console.log(player.name);

player.isActive = true;
player.health = 100;
console.log(player);
