// (1) Create a 9 variables space1, space2... space9(2) Assign either the value ‘x’, ‘o’, ‘ ‘ to 
// each of these variable(3) Insert the variables into the board using the ${varName} syntax and 
// make your board look like the one displayed


// let grid = [
//     ["x","[ x ]","[ o ]"],
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


var grid = [
  ['X', ' ', 'X'],
  ['O', ' ', ' '],
  ['X', 'O', ' ']
];

//example update coord
grid[0][1]="O";
// this will loop y coord
for (var i = 0; i < grid.length; i++){ 
      var line ="";
      // this will loop x coord (inners)
      for (var j = 0; j < grid[i].length; j++){
        // line concatanate with the 2nd level of nested data
          line = line+grid[i][j]; 
          //grid[i].length is 3 so -1 to print two | 
          //using length-1 - can easily find last iteration of grid
          //use strict bc js class 0 as false
          if(j !== grid[i].length-1){
          //different line to make conditional
          line = line + ' | ';
          }
         
      }
//print line created through 2nd for
      console.log(line);
      //same as above for grid.length 
      if(i != grid.length-1){
        console.log("----------");
      }
  }

