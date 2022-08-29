// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) {
//     console.log('You have been hit!');
// }



let USS_HelloWorld = {
    name: "USS",
    Hull: 20,
    Firepower: 3,
    accuracy: 0.8
}

// alien[0].accuracy

let AlienShip1 = {
    name: "Alien",
    Hull: 3,
    Firepower: 3,
    accuracy: 0.5
}


checkScore = () => {
    console.log(USS_HelloWorld);
    console.log(AlienShip1);
}

const attackAlien = () => {
    AlienShip1.Hull -= 5;
    USS_HelloWorld.Firepower--;
}

const attackUSS = () => {
    USS_HelloWorld.Hull -= 3;
    AlienShip1.Firepower--;
}

// ask in office hours how to do this restart everything back to original numbers
const restartGame = () => {

}

// checkScore();
// attackUSS();
// checkScore();
// attackAlien();
// checkScore();





const GameOver = () => {
    console.log("game over ${winner} wins")
}

const PlayerAttact = () => {

    // if (player accuracy is greater than accuracy) {
    // log hit
}

// each round is 1 button click 

// this will activate the button

let Match = 0

const MatchCount = () => {
    Match++;
    console.log('XXXX  Match ' + Match + ' complete XXXX')
}

const AttackAlienResult = () => {
    console.log("USS Fire 1");
    if (Math.random() < AlienShip1.accuracy) {
        attackAlien();
        checkScore();
        console.log('You hit alien target!');
    } else { console.log('you missed') };

    console.log("Alien Fire 1");
    if (Math.random() < USS_HelloWorld.accuracy) {
        attackUSS();
        checkScore();
        console.log('You have been hit!');
    } else { console.log('alien missed USS Hello world') }



    if (AlienShip1.Hull <= 0) {
        console.log("USS WINS")
    }
    if (USS_HelloWorld.Hull <= 0) {
        console.log("YOU LOSE")
    }

    MatchCount()
}

let AttackButton = document.getElementById("AttackButton");
AttackButton.addEventListener("click", AttackAlienResult);

// attack button will : determine if oponent is hit 
// if oponent is hit, use AttackAlien function, console log results.


// const RestartGame = () => {
//     console.log("Restart pressed");
//     if (Math.random() < AlienShip1.accuracy) {
//         attackAlien();
//         checkScore();
//         console.log('You have been hit!');
//     } else { console.log('you missed') }

// }

// let restartButton = document.getElementById("restartButton");
// restartButton.addEventListener("click", RestartGame);





// You attack the first alien ship

// If the ship survives, it attacks you

// If you survive, you attack the ship again

// If it survives, it attacks you again … etc

// If you destroy the ship, you have the option to attack the next ship or to retreat

// If you retreat, the game is over, perhaps leaving the game open for further developments or options

// You win the game if you destroy all of the aliens

// You lose the game if you are destroyed