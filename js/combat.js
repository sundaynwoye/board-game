// Get player1 attack button, defend button, and div that display player health
let player1AttackButton = document.getElementById("player1-attack");
let player1DefendButton = document.getElementById("player1-defend");
let displayPlayer1Health = document.getElementById("player1-health");

// Get the health progress bar
let barPlayer1 = document.getElementById("bar-player1");
let barPlayer2 = document.getElementById("bar-player2");

// Get player2 attack button, defend button, and div that display player health
let player2AttackButton = document.getElementById("player2-attack");
let player2DefendButton = document.getElementById("player2-defend");
let displayPlayer2Health = document.getElementById("player2-health");

// Hide the attack and defend button
$("#player1-attack, #player1-defend, #player2-attack, #player2-defend").hide();

// Set defence mode to false
let defenceMode = false;

// Start Fight
const startFight = () => {
    if (fightMode === true) {
        box.clearHighlight();
        $("table").fadeOut(1600);
        document.getElementById("card-left").style.margin = "auto";
        document.getElementById("card-right").style.margin = "auto";
        $("#player1-attack, #player1-defend, #player2-attack, #player2-defend").show();
        disableButton(player2AttackButton, player2DefendButton);
        // player1
        attack(players[0], players[1], barPlayer2, player1AttackButton, displayPlayer2Health, displayPlayer1DamagePoint.textContent);
        defend(player1DefendButton);
        // player2
        attack(players[1], players[0], barPlayer1, player2AttackButton, displayPlayer1Health, displayPlayer2DamagePoint.textContent);
        defend(player2DefendButton);
    } else {
        return null;
    }
}

// Create attack
const attack = (player, opponent, bar, playerButton, displayHealth, damagePoint) => {
    playerButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (opponent.health <= 0) {
            alert("GAME OVER!" + "\n" + player.name + " " + "won");
            location.reload();
        } else if (defenceMode === true) {
            opponent.health = opponent.health - (damagePoint/2);
            defenceMode = false;
        }
        else {
            opponent.health = opponent.health - damagePoint;
        }
        displayHealth.textContent = opponent.health + "%";
        bar.style.width = opponent.health + "%";
        if (playerButton === player1AttackButton) {
            disableButton(player1AttackButton, player1DefendButton);
            enableButton(player2AttackButton, player2DefendButton);
        } else {
            disableButton(player2AttackButton, player2DefendButton);
            enableButton(player1AttackButton, player1DefendButton);
        }
    })
}

// Create defence
const defend = (playerButton) => {
    playerButton.addEventListener("click", (event) => {
        event.preventDefault();
        defenceMode = true;
        if (playerButton === player1DefendButton) {
            disableButton(player1AttackButton, player1DefendButton);
            enableButton(player2AttackButton, player2DefendButton);
        } else {
            disableButton(player2AttackButton, player2DefendButton);
            enableButton(player1AttackButton, player1DefendButton);
        }
    })
}

// Disable attack and defend button
const disableButton = (attackButton, defendButton) => {
    attackButton.disabled = true;
    defendButton.disabled = true;
}

// Able attack and defend button
const  enableButton = (attackButton, defendButton) => {
    attackButton.disabled = false;
    defendButton.disabled = false;
}

