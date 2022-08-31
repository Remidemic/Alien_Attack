// make restart button using window.location.reload()

// center.innerHTML=(`You Started with ${player.hull} health.<br>`);

window.confirm(" GET READY TO FIGHT SOME ALIENS!!!")

let USS_HelloWorld = {
    name: "USS",
    Hull: 20,
    Firepower: 3,
    accuracy: 0.8
}



// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) {
//     console.log('You have been hit!');

// how to make 6 aliens - make a array of aliens. if alien hull === 0, array.pop. 


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




// make array of random aliens 

const alienShips = document.querySelector('.alienShips');
let AlienSquad = []

for (let i = 0; i < AlienSquad.length; i++) {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `class="alien"`

    alienShips.appendChild(newDiv)
}

let randNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


for (let i = 0; i < randNum(5, 10); i++) {

    AlienSquad.push({
        name: "Alien 1",
        Hull: randNum(3, 6),
        Firepower: randNum(2, 4),
        accuracy: randNum(0.6, 0.8)

    })
}

console.log(AlienSquad.length);
// array end 


// make as many aliens in array into img divs in game 


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
ScreenLog

document.querySelector('#screenlog').innerHTML = ("Remaining aliens " + AlienSquad.length)

const AttackAlienResult = () => {


    console.log("USS Fire 1");
    if (Math.random() < AlienSquad[0].accuracy) {
        attackAlien();
        checkScore();
        console.log('You hit alien target!');
        document.querySelector('#screenlog').innerHTML += ('<br> You hit alien target!');

    } else {
        console.log('you missed alien target');
        document.querySelector('#screenlog').innerHTML += ('you missed alien target')
    };

    console.log("Alien Fire 1");
    if (Math.random() < USS_HelloWorld.accuracy) {
        attackUSS();
        checkScore();
        console.log('You have been hit!');
        document.querySelector('#screenlog').innerHTML += ('<br> You have been hit!');

    } else {
        console.log('alien missed USS HelloWorld')
        document.querySelector('#screenlog').innerHTML += ('alien missed USS HelloWorld')
    }

    if (AlienSquad[0].Hull <= 0) {
        console.log("USS WINS");
        document.querySelector('#screenlog').innerHTML += ('<br> USS WINS');
        numOaliens--;
        window.alert("you destroyed the alien. congratulations. there are " + numOaliens + " still up there. Do you want more?");
        AlienSquad.shift();
        let enemy = document.querySelector('.alien')
        enemy.remove()
    }
    if (USS_HelloWorld.Hull <= 0) {
        console.log("YOU LOSE")
        document.querySelector('#screenlog').innerHTML += ("YOU LOSE");
        window.alert("you ded.");
    }

    MatchCount()
    document.querySelector('#screenlog').innerHTML += ('XXXX  Match ' + Match + ' complete XXXX' + ' <br> Aliens Remaining ' + numOaliens);


    document.querySelector('#HEALTH').innerHTML = ("LIFE LEFT " + USS_HelloWorld.Hull);


}


let AttackButton = document.getElementById("AttackButton");
AttackButton.addEventListener("click", AttackAlienResult);


// RESTART BUTTON
const restartbtn = () => {
    globalThis.location.reload()
}
let RestartButton = document.getElementById("restartButton");
RestartButton.addEventListener("click", restartbtn);