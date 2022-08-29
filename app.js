// make restart button using window.location.reload()


let USS_HelloWorld = {
    name: "USS",
    Hull: 20,
    Firepower: 3,
    accuracy: 0.8
}

// alien[0].accuracy
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// You could be battling six alien ships each with unique values.

// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) {
//     console.log('You have been hit!');

// how to make 6 aliens - make a array of aliens. if alien hull === 0, array.pop. 

let numOaliens = 6
let AlienSquad = [{
    name: "Alien 1",
    Hull: 3,
    Firepower: 3,
    accuracy: 0.5
}, {
    name: "Alien 2",
    Hull: 3,
    Firepower: 3,
    accuracy: 0.5
}, {
    name: "Alien 3",
    Hull: 3,
    Firepower: 3,
    accuracy: 0.5
}, {
    name: "Alien 4",
    Hull: 3,
    Firepower: 3,
    accuracy: 0.5
}, {
    name: "Alien 5",
    Hull: 3,
    Firepower: 3,
    accuracy: 0.5
}, {
    name: "Alien 6",
    Hull: 3,
    Firepower: 3,
    accuracy: 0.5
}]


// class Aliens {
//     constructor(name) {
//         this.name = name
//         this.hull = hull
//         this.firePower = fire.power
//         this.Acuracy = this.Acuracy
//     }
// }




// mess ^

// ONE ALIEN 
// let AlienShip1 = {
//     name: "Alien",
//     Hull: 3,
//     Firepower: 3,
//     accuracy: 0.5
// }


checkScore = () => {
    console.log(USS_HelloWorld);
    console.log(AlienSquad[0]);
}

// ONE ALIEN 
// const attackAlien = () => {
//     AlienShip1.Hull -= 5;
//     USS_HelloWorld.Firepower--;
// }

const attackAlien = () => {
    AlienSquad[0].Hull -= 5;
    USS_HelloWorld.Firepower--;
}

const attackUSS = () => {
    USS_HelloWorld.Hull -= 3;
    AlienSquad[0].Firepower--;
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


// each round is 1 button click 


// this is the ATTACK Button 
let Match = 0

const MatchCount = () => {
    Match++;
    console.log('XXXX  Match ' + Match + ' complete XXXX')
}

const AttackAlienResult = () => {
    console.log("USS Fire 1");
    if (Math.random() < AlienSquad[0].accuracy) {
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

    if (AlienSquad[0].Hull <= 0) {
        console.log("USS WINS");
        window.alert("you destroyed the alien. congratulations. there are " + numOaliens-- + " still up there. Do you want more?");
        AlienSquad.shift();
    }
    if (USS_HelloWorld.Hull <= 0) {
        console.log("YOU LOSE")
        window.alert("you ded.");

    }

    MatchCount()

    document.querySelector('#HEALTH').innerHTML = ("LIFE LEFT " + USS_HelloWorld.Hull);
}



let AttackButton = document.getElementById("AttackButton");
AttackButton.addEventListener("click", AttackAlienResult);


const restartbtn = () => {
    globalThis.location.reload()
}



let RestartButton = document.getElementById("restartButton");
RestartButton.addEventListener("click", restartbtn);




// attack button END 


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





// If you destroy the ship, you have the option to attack the next ship or to retreat

// If you retreat, the game is over, perhaps leaving the game open for further developments or options

// You win the game if you destroy all of the aliens

// You lose the game if you are destroyed