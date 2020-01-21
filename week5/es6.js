// let name1 = "John"
// let age = 101
// function runForLoop(pets) {
//     const petObjects = []
//     for (let i = 0; i < pets.length; i++){
//         let pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         } 
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name1)
//     return petObjects
// }
// runForLoop(["cat", "dog"])


// //Re-write this .map() using an arrow function:

// //Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

// const arr = ["bright orange", "ripe", "rotten"]

// const result = arr.map(carrot => ({type: "carrot", name: carrot}))

// console.log(result)

// // //-write this .filter() using an arrow function:
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = people.filter(person => person.friendly === true)
// console.log(filterForFriendly)

// //Re-write the following functions to be arrow functions:
// //first part
// let doMath = [20, 5]

// const result = doMath.reduce((a, b) => a + b)

// console.log(result)
// //second part
// let doMath = [20, 5]

// const result = doMath.reduce((a, b) => a * b)

// console.log(result)

//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
//firstName should default to "Jane"
//lastName should default to "Doe"
//age should default to 100
// //Use template literals to build the string from #5

// function printString(firstName = 'Jane', lastName = 'Doe', age = 100)
// {
//     return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
// }
//     console.log(printString(`Kat`, `Strark`, 40));



// //Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];
// const filterForDogs = animals.filter(animal => animal.type === "dog")
// console.log(filterForDogs)

// //Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// // var loc = {
// //     name: `Janice`,
// //     location: `Hawaii`,
// //     age: 100,
// // };
// // console.log(`Hi `  + loc.name +`!\n`,

// // `Welcome to ` +loc.location+`.\n`,

// // `I hope you enjoy your stay. Please ask the president of ` +loc.location+ ` if you need anything.`)
