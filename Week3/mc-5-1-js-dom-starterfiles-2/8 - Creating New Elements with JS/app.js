// create a “list” item when the person presses the submit button.

const button= document.getElementById("submit"); 
const input = document.getElementById("input");
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", ()=> {
let listItem = document.createElement("li");
listItem.textContent = input.value;
list.appendChild(listItem);
input.value = "";
})



const lists = document.getElementById("list");
const buttonTog = document.getElementById("showhide-btn");
    
buttonTog.addEventListener("click", () => { 
    if(lists.style.display == "block"){
      lists.style.display = "none";
      buttonTog.textContent = "show";
    } else {
      lists.style.display = "block";
      buttonTog.textContent = "hide";
    }
    });
    