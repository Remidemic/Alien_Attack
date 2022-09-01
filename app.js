// make restart button using window.location.reload()

// center.innerHTML=(`You Started with ${player.hull} health.<br>`);

// window.confirm(" GET READY TO FIGHT SOME ALIENS!!!")

let USS_HelloWorld = {
    name: "USS",
    Hull: 20,
    Firepower: 5,
    accuracy: 0.7
}



let randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let AlienSquad = []

for (let i = 1; i < randNum(5, 8); i++) {

    AlienSquad.push({
        name: "Alien " + i,
        Hull: randNum(3, 6),
        Firepower: randNum(2, 4),
        accuracy: 0.6
    })
}

console.log(AlienSquad)





// alien[0].accuracy
// hull - between 3 and 6
// firepower - between 2 and 4
// accuracy - between .6 and .8
// You could be battling six alien ships each with unique values.
console.log(AlienSquad.length)

const alienShips = document.querySelector('.alienShips')

for (let i = 0; i < AlienSquad.length; i++) {

    const newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'alien')
    alienShips.appendChild(newDiv)
}


// alienShips.appendChild(newDiv)


// let oldaliens = [{
//     name: "Alien 1",
//     Hull: 3,
//     Firepower: 3,
//     accuracy: 0.5,

// }, {
//     name: "Alien 2",
//     Hull: 3,
//     Firepower: 3,
//     accuracy: 0.5
// }, {
//     name: "Alien 3",
//     Hull: 3,
//     Firepower: 3,
//     accuracy: 0.5
// }, {
//     name: "Alien 4",
//     Hull: 3,
//     Firepower: 3,
//     accuracy: 0.5
// }, {
//     name: "Alien 5",
//     Hull: 3,
//     Firepower: 3,
//     accuracy: 0.5
// }, {
//     name: "Alien 6",
//     Hull: 3,
//     Firepower: 3,
//     accuracy: 0.5
// }]

let numOaliens = AlienSquad.length



checkScore = () => {
    console.log(USS_HelloWorld);
    console.log(AlienSquad[0]);
}


const attackAlien = () => {
    AlienSquad[0].Hull -= 5;
    USS_HelloWorld.Firepower--;
}

const attackUSS = () => {
    USS_HelloWorld.Hull -= 3;
    AlienSquad[0].Firepower--;
}



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

let ScreenLog = document.querySelector('#screenlog').innerHTML;

document.querySelector('#screenlog').innerHTML = ("Remaining Aliens: " + AlienSquad.length + " <br> ")

const AttackAlienResult = () => {


    console.log("USS Fire 1");
    if (Math.random() < AlienSquad[0].accuracy) {
        attackAlien();
        checkScore();
        console.log('You hit Alien target! <br>');
        document.querySelector('#screenlog').innerHTML += ('<br> You hit Alien target!');

    } else {
        console.log('you missed Alien target');
        document.querySelector('#screenlog').innerHTML += ('<br> you missed Alien target')
    };

    console.log("Alien Fire 1");
    if (Math.random() < USS_HelloWorld.accuracy) {
        attackUSS();
        checkScore();
        console.log('You have been hit!');
        document.querySelector('#screenlog').innerHTML += ('<br> You have been hit!');

    } else {
        console.log('alien missed USS HelloWorld')
        document.querySelector('#screenlog').innerHTML += ('<br>Alien missed USS HelloWorld')
    }

    if (AlienSquad[0].Hull <= 0) {
        console.log("USS WINS");
        document.querySelector('#screenlog').innerHTML += ('<br> USS WINS');
        numOaliens--;
        window.alert("you destroyed the Alien. congratulations! there are " + numOaliens + " still up there. Do you want more?");
        AlienSquad.shift();
        let enemy = document.querySelector('.alien')
        enemy.remove()
    }
    if (USS_HelloWorld.Hull <= 0) {
        console.log("YOU LOSE")
        document.querySelector('#screenlog').innerHTML += ("<br> YOU LOSE");
        window.alert("you ded.");
    }

    MatchCount()
    document.querySelector('#screenlog').innerHTML += ('<br> XXXX  Match ' + Match + ' complete XXXX <br>' + ' <br> Aliens Remaining ' + numOaliens);


    document.querySelector('#HEALTH').innerHTML = ("LIFE LEFT " + USS_HelloWorld.Hull);

    if (numOaliens === 0) {
        window.alert("YOU DEFEATED ALL THE ALIENS!!! <br> YOU SAVED THE PLANET!!!!")
    }

}



let AttackButton = document.getElementById("AttackButton");
AttackButton.addEventListener("click", AttackAlienResult);


// RESTART BUTTON
const restartbtn = () => {
    globalThis.location.reload()
}
let RestartButton = document.getElementById("restartButton");
RestartButton.addEventListener("click", restartbtn);