// //1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
// let vals = [3 ,6 ,8 ,2 ];

// function fiveAndGreaterOnly(num){
//     return (num >= 5)
// }
// vals = vals.filter(fiveAndGreaterOnly);
// console.log(vals);  ///[6, 8]

// //2) Given an array of numbers, return a new array that only includes the even numbers.
// const arr = [3 ,6 ,8 ,2 ]

// const evensOnly = arr.filter(function(num) {
//     if (num % 2 === 0)
//         return num
// })
// console.log(evensOnly)

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
// const str = ["by", "dog", "wolf", "family", "eaten", "camping"]

// const fiveCharactersOrFewerOnly = str.filter(function(name) {
//     if (name.length <= 5) {
//         return name
//     }
// })
// console.log(fiveCharactersOrFewerOnly)

// //4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
// const club = [
//     {name: "Angelina Jolie", member: true },
//     {name: "Eric Jones", member: false},
//     {name: "Paris Hilton", member: true},
//     {name: "Kayne West", member: false},
//     {name: "Bob Ziroll", member: true}
// ]
// const peopleWhoBelongToTheIlluminati = club.filter(function(dontBelong) {
//     if(dontBelong.member === true){
//     return dontBelong
//     }
// })
// console.log(peopleWhoBelongToTheIlluminati)

// //5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
// const ofAge = [
//     {name: "Angelina Jolie", age: 80 },
//     {name: "Eric Jones", age: 2},
//     {name: "Paris Hilton", age: 5},
//     {name: "Kayne West", age: 16},
//     {name: "Bob Ziroll", age: 100}
// ]
// const oldEnough = ofAge.filter(function(older) {
//     if(older.age > 18){
//     return older
//     }
// })
// console.log(oldEnough)
//Use the built-in .map() method on arrays to solve all of these problems:
//1) Make an array of numbers that are doubles of the first array
// const arr = [2, 5, 100]

// const result = arr.map(num => num * 2)
// console.log(result)
//2) Take an array of numbers and make them strings
// const arr = [2, 5, 100]

// const newArr = arr.map(String)
// console.log(newArr)

//3) capitalize each of an array of names
var first = (["john", "JACOB", "jinGleHeimer", "schmidt"]);
function capitalizeName(arrName){
    return arrName.map(string => string.charAt(0).toUppercase() + string.slice(1).toLowercase());
}
console.log(capitalizeName(first));