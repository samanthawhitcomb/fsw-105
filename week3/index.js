var officeItems = [ " computer", "desk", "chair", "computer", "mouse", "keyboard", "monitor", "computer"]
let counter = 0;
for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i].includes("computer")) {
        counter++;
    }
}
console.log("We found " + counter + " computers");

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18)
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Old Enough.");
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 17)
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Not Old Enough.");

for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)       
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18)
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Old Enough.  SHE'S good to go see Mad Max Fury Road.");
        else
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Old Enough.  HE'S good to go see Mad Max Fury Road.");

for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)       
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 17)
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female")
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is not Old Enough.  Don't let HER in.");
        else
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " Is Not Old Enough.  Don't let HIM in.");

            
for(var i = 0; i < 101; i++){
    if(i % 2 !== 0)
        console.log(i + " is odd")
    else
        console.log(i + " is even")
}
