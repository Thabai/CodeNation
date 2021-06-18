// let offer = "none";
// let time = 12;

// const cafe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with sandwich",
//     noOffer: "Sorry no offer"
// };


// if (time <= 11) {
//     console.log(cafe["breakfastOffer"]);
// } else if (time <= 15) {
//     console.log(cafe["lunchOffer"]);
// } else {
//     console.log(cafe["noOffer"]);
// }



const person = {
    firstName: "Carly",
    secondName: "Morris",
    age: 31,
    favouriteFoods: [
        'tacos', 
        'burritos',
        'pizza',
        'lasagne'
    ]
};

for (let i=0; i < person.favouriteFoods.length; i++){
    console.log(person.favouriteFoods[i]);
}

person.favouriteFoods.push("curry");
person.favouriteFoods.push("burger");

for (let i=0; i < person.favouriteFoods.length; i++){
    console.log(person.favouriteFoods[i]);
}



// const example = {
//     1: "h",
//     2: "e",
//     3: "l",
//     4: "l",
//     5: "o"
// }
// for (let i = 1; i <= Object.keys(example).length; i++){
//     console.log(example[i]);
// }
// example['6'] = " ";
// example['7'] = "t";
// example['8'] = "h";
// example['9'] = "e";
// example['10'] = "r";
// example['11'] = "e";
// for (let i = 1; i <= Object.keys(example).length; i++){
//     console.log(example[i]);
// }