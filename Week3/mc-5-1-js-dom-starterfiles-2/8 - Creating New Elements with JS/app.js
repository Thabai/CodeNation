// create a “list” item when the person presses the submit button.
// Challenge -Clear the input field when the user presses the “submit” 
// button. Add feature where user can show/hide the list.

const button= document.getElementById("submit"); 
const input = document.getElementById("input");
const buttonTog = document.getElementById("showhide-btn");
const list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", ()=> {
let listItem = document.createElement("li");
listItem.textContent = input.value;
list.appendChild(listItem);
input.value = "";
})

    
buttonTog.addEventListener("click", () => { 
    if(list.style.display == "block"){
      list.style.display = "none";
      buttonTog.textContent = "show";
    } else {
      list.style.display = "block";
      buttonTog.textContent = "hide";
    }
    });
    