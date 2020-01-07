//Write a function that accepts two numbers as parameters, and returns the sum.

function sum(num1, num2){
    return num1 + num2
}

var result = sum(5, 10)
console.log(result)

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
var result = findMax(1, 123, 500);
console.log(result)

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function findEvenOdd(num1){
    if(num1 % 2 == 0)
        console.log("Even")
    else if(num1 % 2 != 0)  
        console.log("Odd")
}
findEvenOdd(15)

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function func(myString){
    if(myString.length <= 20)
        console.log(myString + myString);
    else
        console.log(myString.substring(0, myString.length / 2));       
}
var string = "12, 16, 6, 79, 41, 80";
func(string);