// function solution(digits){
//     let answer = digits.substr(0, 5);
    
//     for (let i=0; i<= digits.length -5; i++){
//       let number = digits.substr(i, 5); 
//       console.log(number);
//       if(number > answer){       
//         answer = number
//       }
//     }
//     return answer
//   }
// console.log(solution('123453789055555'));

// function solution1(digits){
//     let answer = 0;
    
//     for (let i=0; i<digits.length; i++){
//       let bigNumber = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
//       if(Number(bigNumber) > answer){       //convert to number and compare against answer
//         answer = Number(bigNumber);
//       }
//     }
//     return answer;
//   }
//   console.log(solution1('1234567890'));

// var input = "Rs. 6,67,000";
// var res = input.replace(/\D/g,'');
// console.log(res); // 667000

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
//   findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(str) {
//   var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
//   return longestWord[0].length;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function smash (words) {
//   return words.join(" ");
//   };

//   console.log(smash(['Hello', 'World']));

  // function countSheeps(arrayOfSheep) {
  //   let answer = 0;
  //   for (let i=0; i < arrayOfSheep.length; i++)
  //     // console.log(arrayOfSheep);
      
  //     if (arrayOfSheep[i] === true)
  //       answer++;

  //     return answer;
  //   }  

  //   function countSheeps(arrayOfSheeps) {
  //     return arrayOfSheeps.filter(Boolean).length;
  //   }

  // var array1 = [true,  true,  true,  false,
  //   true,  true,  true,  true ,
  //   true,  false, true,  false,
  //   true,  false, false, true ,
  //   true,  true,  true,  true ,
  //   false, false, true,  true ];
  // console.log(countSheeps(array1));


  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  console.log(getCount('abracadabras'));

  function getAverage(marks){
    const arrAvg = Math.floor(marks.reduce((a,b) => a + b, 0) / marks.length);
    return arrAvg;
  }

  function numberToString(num) {
    return num.toString();
  }

  