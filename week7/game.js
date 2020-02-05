const readlineSync = require('readline-sync');

const name = readlineSync.question('What is your name? ');

readlineSync.question('Hello ' + name +', Welcome to DOOM! Where you will risk your life to defeat evil. Press Enter to begin.');

const badGuys = ['Killer Zombie','Demon', 'Lost Soul', 'Cyber Demon']
const treasure = ['Medkit', 'Security Armor', 'Berserk Pack', 'Health Postion']
var prize = []
let userHealth = 40
const options = ['Walk', 'Exit', 'Print']
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5)
    const badGuy = badGuys[Math.floor(Math.random() * badGuys.length)]
    let badGuysHealth = 40
    const badGuysPower = Math.floor(Math.random() * (5 - 3 + 2) + 5)

    const index = readlineSync.keyInSelect(options, 'What would you like to do next?')

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp)
    } else if (options[index] === 'Walk'){
        let key = Math.random()
        if (key <= .3) {
            console.log('Walking....')
        } else if (key >= .3) {
            console.log(badGuy + ' showed up.')
        
            while(badGuysHealth > 0 && userHealth > 0) {

                const user = readlineSync.question('What do you want to do? enter "r" to run or "a" to attack: ')
                
                switch (user){
                    case 'r':
                        const run = Math.random()
                        if(run < .5) {
                            console.log('Before you can run away ' + badGuy + ' attacks you with: ' + badGuysPower)
                        }else {
                            console.log('You Ran Away!!')
                            break 
                        }
                
                    case 'a':
                        badGuysHealth -= attackPower
                        console.log('You attacked ' + badGuy + ' with ' + attackPower + ' attack power' )

                        userHealth -= badGuysPower
                        console.log('Enemy just attacked you with: ' + badGuysPower + ' attack power')

                        if (badGuysHealth <= 0){
                            console.log('You killed ' + badGuy + '.\n' + badGuy + ' left: ' + pickUp)
                            let loot = Math.random()
                            if (loot <= .3){
                                prize.push(pickUp)}
                            } else if(userHealth <= 0){
                                console.log(badGuy + ' has defeated you. You are dead.')}
                    }
                }
            }
        }
}
    while(userHealth > 0){
        userRestore = function(){
            userActive = true;
            userHealth = 40;
        };
        userRestore()
        game()
    }
