// Use a for loop, change the text colour of each element in the list to orange

const list = document.getElementsByTagName("li");

for (let i=0; i < list.length; i++ ){
    list[i].style.color = "orange";
}

// Repeat the same steps to change not-orange class to “red"

const notOran = document.getElementsByClassName("not-orange");

for (let i=0; i< notOran.length; i++){
    notOran[i].style.color="red";
} 

// or loop

for(let i = 0; i < list.length; i++){
    if(list[i].className !== "not-orange"){
        list[i].style.color="orange"; 
    } else {
       list[i].style.color="red";
    }
}

