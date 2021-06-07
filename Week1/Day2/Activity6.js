// Challenge 6:Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgf
// djhiopiwquhejkdsoiufghedjwshi”.Find the index of a last vowel in the string

let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
//counter go through whole array using length as limiter
for (var i = 0; i < vowelArr.length; i++){
 console.log(string.lastIndexOf(vowelArr[i]));
//gets index of vowel in current iteration
    index = string.lastIndexOf(vowelArr[i]);
//compares current index to find highest index    
if (index >= highestIndex ){
//so new highestindex becomes index
    highestIndex = index;
//won't reach last two nums in vowelarray   
    lastVowel = vowelArr[i];
}
}
console.log(lastVowel);

// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowel = str.match(/[aeiou]/gi);
// console.log(str.lastIndexOf(vowel[vowel.length-1]));