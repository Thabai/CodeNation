const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid
function defaultGrid() {
    makeRows(3);
    makeColumns(30);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            newCell.setAttribute('id',i+'-'+j)
            rows[i].appendChild(newCell).className = "cell";
        };

    };
};
defaultGrid();

let stars = [5, 12, 20, 28];
let holes = [7, 11, 18, 25, 29];

function makeSH() {
    for (i = 0; i < stars.length; i++) {
        let star = document.getElementById('1-'+stars[i]);
      star.classList.add('stars');
    
    }
    for (i = 0; i < holes.length; i++) {
        let hole = document.getElementById('1-'+holes[i]);
        hole.classList.add('holes');
    }
}
makeSH();


player1 = 0;
player2 = 0;



// document.querySelector('.btn-roll').addEventListener('click', function(){
// 	if (gamePlaying) {
// 		// 1. random number
// 		var dice = Math.floor(Math.random() * 6) +1;

// 		// 2. display result
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'images/dice' + dice + '.png';

// 		// 3. Update round score if the rolled number is not 1
// 		if (dice !== 1) {

