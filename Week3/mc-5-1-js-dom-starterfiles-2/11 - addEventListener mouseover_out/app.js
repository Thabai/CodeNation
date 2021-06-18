const button= document.getElementById("submit"); 
const input = document.getElementById("input");
const removeBtn = document.getElementById("remove");
const listItems = document.getElementsByTagName("li");

button.addEventListener("click", ()=> {
let listItem = document.createElement("li");
listItem.textContent = input.value;
list.appendChild(listItem);
input.value = "";

for (let listItem of listItems) {
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase();    
    });
    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase();    
    });
}
})


removeBtn.addEventListener("click", ()=> {
let lastItem = document.querySelector('li:last-child');
let list = document.getElementsByTagName('ul')[0];    
list.removeChild(lastItem);
})


