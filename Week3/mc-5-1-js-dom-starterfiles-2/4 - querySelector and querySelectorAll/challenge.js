
// Use a for loop to display all even items to have text colour “lightgreen”
// nth-child(even) makes first entry even no
// const listItems = document.querySelectorAll("li:nth-child(even)"); 

// for (let i=0; i <listItems.length; i++){
//     listItems[i].style.color="lightgreen";
// }


//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

const list = document.querySelectorAll("li"); 

for (let i=0; i <list.length; i++){
    modulus = i % colours.length;
    list[i].style.color= colours[modulus];

}    


