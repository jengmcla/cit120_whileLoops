// Prompt the user to input the number of hits they are going to attempt to hit the dragon with up to 5.
// Have the user deal a random amount of damage, between 1 and the number they input, to the dragon.
// If the random number is above 5, have the user deal only 1 damage to the dragon.
// Then, have the dragon randomly deal either 1 damage or 2 damage to the user.
// Once the dragon takes 10 damage, the user wins.
// Once the user takes 5 damage, the user loses.
// while loop checks if user's or dragon's damage reaches max.
// random: math.random()

var ele = document.body.querySelector(".box");

var isDragonAlive = true;
var isUserAlive = true;
var dragonHealth = 10;
var userHealth = 5;

while(isDragonAlive == true && isUserAlive == true) {
    var numberAttacksQuestion = Number(prompt("How many times do you wanna hit the dragon up to 5?"));
    var numberAttacks = Math.floor(Math.random() * (numberAttacksQuestion + 1)) + 1;
    if (numberAttacks > 5) {
        numberAttacks = 1;
    }
    dragonHealth = dragonHealth - numberAttacks;
    var numberAttacksFromDragon = Math.floor(Math.random() * 2) + 1;
    userHealth = userHealth - numberAttacksFromDragon;

    ele.innerHTML += "<br/> The battle continues. <br/> Your health: " + userHealth + " <br/> Dragon health: " + dragonHealth;

    if (dragonHealth <= 0 && userHealth <= 0) {
        isDragonAlive = false;
        isUserAlive = false;
        document.getElementById("dragonPic").src = "images/fatalisDead.png";
        ele.innerHTML = "You both died, refresh and try again.";
    } else if (userHealth <= 0) {
        isUserAlive = false;
        ele.innerHTML = "Oops, you died! Refresh and try again.";
    } else if (dragonHealth <= 0) {
        isDragonAlive = false;
        document.getElementById("dragonPic").src = "images/fatalisDead.png";
        ele.innerHTML = "The dragon is dead!";
    }
}

// for loops
// i is industry standard as for loop starting point
// first condition is starting; second is how long it keeps looping; third is increase value every time loop completes
// var sum = Number(prompt("Give me a number."));
// var addNumber = Number(prompt("How much do you want to add to your number?"));
// var addUp = Number(prompt("How many times do you want to execute?"));
// for(var i = 0; i < addUp; i++) {
//     sum = sum + addNumber;
// }
// ele.innerHTML = sum;

// uncommon is while loop, continuous until browser crashes
// while(condition) {
//     // if condition is true, the prompt loops
//     var question = prompt("Pudding or cake?");
//     if(question === "Pudding") {
//         condition = false;
//         ele.innerHTML = "Ew, I don't like pudding. Program has stopped."
//     } else if(question === "Cake") {
//         condition = true;
//         ele.innerHTML = "HECK YEAH!"
//     }
// }