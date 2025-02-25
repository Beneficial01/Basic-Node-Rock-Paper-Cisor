/* 
* Run npm install prompt-sync if you don't have it.
* We pass a configuration object with signal interrupt to true to make sure the user can exit at will
* and is not forced to play our game (snif).
*/
const prompt = require('prompt-sync')({sigint: true});

function playGame(){
    console.log("Let's play rock paper cisors");

    let humanChoice = Number(prompt("Enter 1 for cisor, 2 for paper or 3 for rock: "))
    switch(humanChoice){
        case 1: console.log("you picked cisor");
            break;
        case 2: console.log("you picked paper");
            break;
        case 3: console.log("you picked rock")
            break;
        default: console.log("You need to pick 1, 2 or 3 ya hmar")
            throw console.error("Don't you know how to play?");
    }

    let computerChoice = Math.floor(Math.random()*3 +1);
    switch(computerChoice){
        case 1: console.log("computer picked cisor");
            if(humanChoice === 3)
                console.log("YOU WIN!")
            else
                console.log("You don't win brada");
            break;
        case 2: console.log("computer picked paper");
            if(humanChoice === 1)
                console.log("YOU WIN!")
            else
                console.log("You don't win brada");
            break;
        case 3: console.log("computer picked rock")
        if(humanChoice === 2)
            console.log("YOU WIN!")
        else
            console.log("You don't win brada");
    }
}


playGame();