// Conditionals
// Boolean - true / false


// Preliminaries
function greaterThan (x,y){
if(x > y){
    console.log(x + " is greater than " + y)
}}
greaterThan(5,3)
var cat="cat";
var dog="dog";
function lengthOf (x,y){
    if(x.length == y){
        console.log(x + " is the length " + y)
}else if(x.length != y.length){
    console.log("not the same")
}}
 lengthOf(cat,3)
 lengthOf(cat, dog)

 // Bronze Medal
var person ={
    name:"Bobby",
    age: 12
}
if (person.age > 17){
    console.log(person.name + ' is allowed to go to the movies');
}
else { 
    console.log(person.name+ ' is not allowed to go to the movies');
}
var person = {
    name: "Bobby",
    age: 12
}
var fletter = person.name.substring(1,1);
if(fletter = "B"){
    console.log(person.name + ' is allowed to go to the movies');
}
else { 
    console.log(person.name+ ' is not allowed to go to the movies');
}
var person = {
    name: "Bobby",
    age: 12
}
var fletter = person.name.substring(1,1);
if(fletter = "B" && person.age > 17){
    console.log(person.name + ' is allowed to go to the movies');
}
else { 
    console.log(person.name + ' is not allowed to go to the movies');
}


// Silver Medal
if(1==="1"){
    console.log('Strict');  
}else {
    if(1=="1"){
        console.log('Abstract');
    }
}

// Gold Me
var stringValue = "dog";
if (typeof stringValue === "string") {
console.log('my string value is a string');
}
else {
    console.log('my string value is not a string')
}
var boolValue = true;
if (typeof boolValue === "boolean") {
console.log('my boolean value is boolean');
}
else {
    console.log('my boolean value is not boolean')
}
if (typeof pickle !== 'undefined') {
    console.log ('my variable ' + pickle + ' is defined');
}
else {
    console.log ('my variable is not defined')
}
var sLetter = "s";
if (sLetter > 12) {
    console.log ('s is greater then 12');
}
else{
    console.log ('s is not greater then 12')
}
var sLetter = 20;
if (sLetter > 12) {
    console.log ('s is greater then 12');
}
else{
    console.log ('s is not greater then 12')
}
1 <= 2 && 2 <= 4 ? (
    console.log('Yes')
    ) : (
        console.log('no')
    );
    var myNum = 11
; 
    if (myNum % 2 == 0) {
        console.log ('myNum is an even number');
    } else {
        console.log ('myNum is an odd number')
    } 