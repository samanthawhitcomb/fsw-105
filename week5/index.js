// //1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
let vals = [3 ,6 ,8 ,2 ];

function fiveAndGreaterOnly(num){
    return (num >= 5)
}
vals = vals.filter(fiveAndGreaterOnly);
console.log(vals); 

// //2) Given an array of numbers, return a new array that only includes the even numbers.
const arr = [3 ,6 ,8 ,2 ]

const evensOnly = arr.filter(function(num) {
    if (num % 2 === 0)
        return num
})
console.log(evensOnly)

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const str = ["by", "dog", "wolf", "family", "eaten", "camping"]

const fiveCharactersOrFewerOnly = str.filter(function(name) {
    if (name.length <= 5) {
        return name
    }
})
console.log(fiveCharactersOrFewerOnly)

// //4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const club = [
    {name: "Angelina Jolie", member: true },
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kayne West", member: false},
    {name: "Bob Ziroll", member: true}
]
const peopleWhoBelongToTheIlluminati = club.filter(function(dontBelong) {
    if(dontBelong.member === true){
    return dontBelong
    }
})
console.log(peopleWhoBelongToTheIlluminati)

// //5) Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)
const ofAge = [
    {name: "Angelina Jolie", age: 80 },
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]
const oldEnough = ofAge.filter(function(older) {
    if(older.age > 18){
    return older
    }
})
console.log(oldEnough)
//Use the built-in .map() method on arrays to solve all of these problems:
//1) Make an array of numbers that are doubles of the first array
const arr = [2, 5, 100]

const result = arr.map(num => num * 2)
console.log(result)
//2) Take an array of numbers and make them strings
const arr = [2, 5, 100]

const newArr = arr.map(String)
console.log(newArr)

// //3) capitalize each of an array of names
var first = (["john", "JACOB", "jinGleHeimer", "schmidt"]);
function capitalizeName(arrName){
    return arrName.map(string => string.charAt(0).toUppercase() + string.slice(1).toLowercase());
}
console.log(capitalizeName(first));

//4) Make an array of strings of the names
var names = [
        {name: "Angelina Jolie", age: 80 },
        {name: "Eric Jones", age: 2},
        {name: "Paris Hilton", age: 5},
        {name: "Kayne West", age: 16},
        {name: "Bob Ziroll", age: 100}
    ];
    function namesOnly(arrNames){
        return arrNames.map(string => string.name);
    }
    console.log(namesOnly(names));


//5) Make an array of strings of the names saying whether or not they can go to The Matrix

const ofAge = [
    {name: "Angelina Jolie", age: 80 },
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kayne West", age: 16},
    {name: "Bob Ziroll", age: 100}
]
oldEnough = ofAge.map(older => {
    if(older.age >= 18)
    {
        return (`${older.name} can go to the Matrix.`);
    }
    else (older.age < 18)
    {
        return (`${older.name} is under age!!`);
    }
})
console.log(oldEnough)

readyToPutInTheDOM = ofAge.map(older => {
    return `<h1>${older.name}</h1><h2>${older.age}</h2>`
    })
    console.log(readyToPutInTheDOM)

//Use the built-in .reduce() method on arrays to solve all of these problems:
//1) Turn an array of numbers into a total of all the numbers

    const r =  [1, 2, 3]
    total = r.reduce((final, num) => {
        final += num
        return final
    },0);
        console.log(total);
//2) Turn an array of numbers into a long string of all those numbers.
    
    const r =  [1, 2, 3]
    total = r.reduce((final, num) => {
        final += num.toString()
        return final
    },[]);
        console.log(total);


//3) Turn an array of voter objects into a count of how many people voted
    const r = [
        { name: "Bob", age: 30, voted: true },
        { name: "Jake", age: 32, voted: true },
        { name: "Kate", age: 25, voted: false },
        { name: "Sam", age: 20, voted: false },
        { name: "Phil", age: 21, voted: true },
        { name: "Ed", age: 55, voted: true },
        { name: "Tami", age: 54, voted: true },
        { name: "Mary", age: 31, voted: false },
        { name: "Becky", age: 43, voted: false },
        { name: "Joey", age: 41, voted: true },
        { name: "Jeff", age: 30, voted: true },
        { name: "Zach", age: 19, voted: false }
    ]
    
    total = r.reduce((final, num) => {
        if(num.voted){final ++}
        return final
    },0);
        console.log(total);
//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
    const r  = [
        { tittle: "Tesla Model S", price: 90000 },
        { tittle: "4 carat diamond ring", price: 45000 },
        { tittle: "Fancy hacky Sack", price: 5 },
        { tittle: "Gold fidgit spinner", price: 2000 },
        { tittle: "A Second Tesla Model S", price: 90000 },
    ]
    total = r.reduce((final, num) => {
        (final += num.price )
        return final
    },0);
        console.log(total);

//5) Given an array of arrays, flatten them into a single array

    const arr = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ];
        total = arr.reduce((final, num) => {
        final = final.concat(num)
        return final
    },[]);
        console.log(total);
//6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

    const r = [
        { name: "Bob", age: 30, voted: true },
        { name: "Jake", age: 32, voted: true },
        { name: "Kate", age: 25, voted: false },
        { name: "Sam", age: 20, voted: false },
        { name: "Phil", age: 21, voted: true },
        { name: "Ed", age: 55, voted: true },
        { name: "Tami", age: 54, voted: true },
        { name: "Mary", age: 31, voted: false },
        { name: "Becky", age: 43, voted: false },
        { name: "Joey", age: 41, voted: true },
        { name: "Jeff", age: 30, voted: true },
        { name: "Zach", age: 19, voted: false }
    ]
        total = r.reduce((final, voters) => {
        (final += voters.voted)
        return `youngVotes: `
    },0);
        console.log(total);