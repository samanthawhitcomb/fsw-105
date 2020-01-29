const readline = require("readline-sync");
const name = readline.question("What is your name? ");
    console.log("type '*' to Put hand in hole, '+' to find the key, or '-' to Open the door. Then press enter.");
    let isAlive = true;
    let choseKey = true;

    while(isAlive = true){
    let playerChooses = readline.question("what do you do? ");
        if(playerChooses == "*"){
            console.log("Sorry, you Died!");
        }
        else if(playerChooses == "+"){
            console.log("You found the Key.");
        }
        else if(playerChooses == "-"){
            console.log("The door is locked.");
        }
        if(playerChooses == "-" && choseKey == true){
        console.log("You used the key to open the door!!");
        } 
        else if(playerChooses == "-" && choseKey == false){
        console.log("The door is locked, you need to find the key first!");
        }
        else if (playerChooses == "+" && choseKey == false){
            console.log("You already found the key.");
        }
    }