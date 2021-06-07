// Write an if statement that checks for all possible conditions of winning, whether it’s across 
// in one of the rows or columns, or diagonally

// let board = [
//   ['X', 'O', 'O'],
//   [' ', ' ', ' '],
//   [' ', ' ', 'X']
// ];            
// let checkResult = (board, token) => { 
//   let row1 = (board[0][0] == board[0][1] && board[0][2] == token)
//   let row2 = (board[1][0] == board[0][1] && board[0][2] == token)
//   let row3 = (board[2][0] == board[0][1] && board[0][2] == token)
//   let col1 = (board[0][0] == board[1][0] && board[2][0] == token)
//   let col2 = (board[0][1] == board[1][1] && board[2][1] == token)
//   let col3 = (board[0][2] == board[1][2] && board[2][2] == token)
//   let dia1 = (board[0][0] == board[1][1] && board[2][2] == token)
//   let dia2 = (board[0][2] == board[1][1] && board[2][0] == token)
//   return row1 || row2 || row3 || col1 || col2 || col3 || dia1 || dia2    
// } 
// let result = checkResult(board, 'X') ? "Result: X is the WINNER!" : checkResult(board, 'O') ? "Result: O is the WINNER!" : "Result: DRAW!"
// console.log(result);


var checkWin = [
  ['O', 'O', 'X'],
  ['X', 'O', 'X'],
  ['O', 'X', 'O']
];

let result = 'loser';
for (var i = 0; i < checkWin.length; i++) {
          //verticle checking
      if (checkWin[0][i] === checkWin[1][i]  && checkWin[0][i] === checkWin[2][i] && checkWin[0][i] !== '') {
          result = 'Winner is ' + checkWin[0][i]; 
      } //horizontal checking
      else if (checkWin[i][0] === checkWin[i][1]  && checkWin[i][0] === checkWin[i][2] && checkWin[i][0] !== '') {
          result = 'Winner is ' + checkWin[i][0]; 
      }
          
} //diagonal checking 
if (checkWin[0][0] === checkWin[1][1] && checkWin[0][0] === checkWin[2][2] && checkWin[0][0] !== '') {
  result = 'Winner is ' + checkWin[0][0];
} //other diag check
else if (checkWin[2][0] === checkWin[1][1] && checkWin[2][0] === checkWin[0][2] && checkWin[2][0] !== '') {
  result = 'Winner is ' + checkWin[2][0];
}
console.log(result);