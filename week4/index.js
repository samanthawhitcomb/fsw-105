// //capitalize and lowercase
// var name = "luke"
// var uppercasedLuke = name.toUpperCase()
// var lowercasedLuke = uppercasedLuke.toLowerCase()
//     console.log(uppercasedLuke + lowercasedLuke)
// //function that returns a number half the length, and rounded down.

// var string = "hello" // => 2
// console.log(Math.floor(string.length / 2));

// var string = "hello World" // => 5
// console.log(Math.floor(string.length / 2));

// // function that uses slice() and the other functions you've written to return the first half of the string.
// var string = "hello" // => "he"
// var first2 = string.slice(0,2)
// console.log(first2)

// var string = "hello World" // => "hello"
// var firstWord = string.slice(0,6)
// console.log(firstWord)

var string = "hello" // => "HEllo"
var first2 = string.slice(0,2);
var uppercasedHello = first2.toUpperCase();
var last =string.slice(2) 
console.log(uppercasedHello + last)

var string = "hello World" // => "HELLO world"
var firstWord = string.slice(0,6);
var uppercasedHello = firstWord.toUpperCase();
var last =string.slice(5) 
console.log(uppercasedHello + last)

// function that takes any string and capitalizes any character that follows a space.
var string = " hey friends! practice practice practice!"
var capitalizeFirstLetter = string.startsWith(" ");
console.log(capitalizeFirstLetter)