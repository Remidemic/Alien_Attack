// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) {
//     console.log('You have been hit!');
// }



let USS_HelloWorld = {
    name: "USS",
    Hull: 20,
    Firepower: 5,
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
    AlienShip1.Hull = -5;
    USS_HelloWorld.Firepower--;
}

const attackUSS = () => {
    USS_HelloWorld.Hull = -3;
    AlienShip1.Firepower--;
}

checkScore();
attackUSS();
checkScore();
attackAlien();
checkScore();




if (AlienShip1.Hull <= 0) {
    console.log("USS WINS")
}
if (USS_HelloWorld.Hull <= 0) {
    console.log("YOU LOSE")
}

const GameOver = () => {
    console.log("game over ${winner} wins")
}

const PlayerAttact = () => {
    // if (player accuracy is greater than accuracy) {
    // log hit
}


const AttackAlienButton = () => {
    if (Math.random() < alien[0].accuracy) {
        attackAlien();
        console.log('You have been hit!');

    }
}


// attack button will : determine if oponent is hit 
// if oponent is hit, use AttackAlien function, console log results.