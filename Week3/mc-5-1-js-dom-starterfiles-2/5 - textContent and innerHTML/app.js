const placeholder = document.getElementById("placeholder"); 
const input = document.getElementById("input"); 
const submit = document.getElementById("submit"); 
const list = document.getElementById("list");


//We want the text input to be placed in the heading, we can attach “addEventListener” to the button
// submit.addEventListener("click", () =>{ 
//     placeholder.style.color ="goldenrod"; 
//     placeholder.textContent = input.value; 
// })


//Add innerHTML into your app.js
submit.addEventListener("click", () =>{ 
    placeholder.style.color ="goldenrod"; 
    placeholder.textContent = `<li>${input.value}</li>`; 
    list.innerHTML = `<li>${input.value}</li>`;
})