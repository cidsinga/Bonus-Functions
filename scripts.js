// var input = prompt("Please enter a sentence");
//
//
// // var manipulate = function () {
// // var last = input.length - 1;
// // var makeUpper2 = input.charAt(last).toUpperCase();
// // var makeUpper = input.charAt(0).toUpperCase();
// //
// // console.log(makeUpper + makeUpper2);
// //
// // };
// // manipulate();
// //
// // var stuff = fucntion () {
// // var last = input.length - 1;
// // var makeUpper2 =
// // }
//
// //asks person for sting
//
// //collect first character
//
// //collect last character
//   // -how many characters are in inputted sting
//
// //log result to the console
//
// var stuff = function() {
// var firstChar = input.charAt(0).toUpperCase();
// var lastChar = input.length - 1;
// var totalChar = input.length;
// var middle = Math.floor(totalChar / 2);
// var dog = input.charAt(lastChar).toUpperCase();
//
// console.log(firstChar + dog);
//
// var array = [firstChar,dog];
// var beef = array.reverse();
// var reversal = beef.reverse();
// var reverse = reversal.toString();
// var reverse = reverse.replace(",","");
// var smash = input.concat(reverse);
// var middlePosition = input.charAt(middle);
//
// // var letters
// //console.log(smash);
// var final = [middlePosition, input, reverse];
// console.log(middlePosition + input + reverse);
//
//
// // console.log(toString(array.reverse()));
// }
//
// stuff();
//
// // # of letters in original sentance Dived by 2 (round down, output the letter at this index)
//
// // concat this first letter of prompt result


// Bonus Challenge _____________________________

var input = prompt("Please enter a sentence");


// var manipulate = function () {
// var last = input.length - 1;
// var makeUpper2 = input.charAt(last).toUpperCase();
// var makeUpper = input.charAt(0).toUpperCase();
//
// console.log(makeUpper + makeUpper2);
//
// };
// manipulate();
//
// var stuff = fucntion () {
// var last = input.length - 1;
// var makeUpper2 =
// }

//asks person for sting

//collect first character

//collect last character
  // -how many characters are in inputted sting

//log result to the console

var stuff = function() {
var firstChar = input.charAt(0).toUpperCase();
var lastChar = input.length - 1;
var totalChar = input.length;
var middle = Math.floor(totalChar / 2);
var dog = input.charAt(lastChar).toUpperCase();

console.log(firstChar + dog);

var array = [firstChar,dog];
var beef = array.reverse();
var reversal = beef.reverse();
var reverse = reversal.toString();
var reverse = reverse.replace(",","");
var smash = input.concat(reverse);
var middlePosition = input.charAt(middle);

// var letters
//console.log(smash);
// var final1 = input.split("");
// var final2 = reverse.split("");
// var final3 = [middlePosition];
console.log(middlePosition + input + reverse);

var final = middlePosition + input + reverse;

var splitFinal2 = final.split("");

var final3 = splitFinal2.reverse();
var final4 = final3.join("");
console.log(final4);

//console.log(splitFinal2);




// console.log(final3,final1,final2);
// var final4 = [final3,final1,final2].reverse();
// console.log(final4);

// console.log(toString(array.reverse()));
}

stuff();

// # of letters in original sentance Dived by 2 (round down, output the letter at this index)

// concat this first letter of prompt result
