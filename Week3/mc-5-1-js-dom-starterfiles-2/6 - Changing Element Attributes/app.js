//Add a function that changes the source of the image when the “submit” button is clicked
const image = document.getElementById("image");
const button = document.getElementById("submit");



button.addEventListener("click", ()=>{
    image.src = input.value;
});