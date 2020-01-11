var name= "luke"
console.log(name.toUpperCase())

//concat
    var s = "s"
    var newName = name.concat(s)
    console.log(newName)

//split - turn a string into an array
var animal = "tiger"
var characterArr = animal.split("g")
console.log(characterArr)

// slice => cut up a string
    var phoneNumber = "5038080876"//outcome-> 503-808-0876
        var first3 = phoneNumber.slice(0,3)
        var next3 = phoneNumber.slice(3, 6)
        var last4 = phoneNumber.slice(6)
        var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
        console.log(phoneNumWithDashes)
        

//indexOf = i need to know the letter "a" occurs in a string

// var city = "New York City"
// var indexOfC = city.indexOf("C")
// console.log(indexOfC)

//array methods
var arrOfFood = ["pancake", "egg", "ice cream", "pizza", "hamburger"];
//push - adds item to end of array
    arrOfFood.push("cereal")
    console.log(arrOfFood)
//pop - removes item from the end of the array
arrOfFood.pop()
    console.log(arrOfFood)
//unshift - adds item to the beginning of the array
arrOfFood.unshift("cereal")
console.log(arrOfFood)
//shift - removes item from the beginning of the array
arrOfFood.shift()
console.log(arrOfFood)
//concat - 
var colors1 = ["blue", "green"]
var colors2 = ["purple", "red"]
var newArr = colors1.concat(colors2)
console.log(newArr)

//indexOf
var pizzaIndex = arrOfFood.indexOf("pizza")
console.log(pizzaIndex)

//slice
var newArray = arrOfFood.slice(1, 3)
console.log(newArray)

//join
var name = "steve"
var splitName= name.split("")
// console.log(splitName)
var joinedName = splitName.join("")
console.log(joinedName)
//reverse
var names = "rick" //kcir
var splitsName = names.split("")
var reverseArr = splitsName.reverse()
var reversedName = reverseArr.join("")
        // console.log(reversedName)
var allAtOnce = names.split("").reverse().join("")
console.log(allAtOnce)
//splice - changes original array
arrOfFood.splice(2, 2,"bacon","egg" )
console.log(arrOfFood)