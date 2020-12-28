// Get the div that display player1 weapon image, weapon name, and damage point
let displayPlayer1WeaponImage = document.getElementById("player1-weapon-image");
let displayPlayer1WeaponName = document.getElementById("player1-weapon-name");
let displayPlayer1DamagePoint = document.getElementById("player1-weapon-damage-point");

// Get the div that display player2 weapon image, weapon name, and damage point
let displayPlayer2WeaponImage = document.getElementById("player2-weapon-image");
let displayPlayer2WeaponName = document.getElementById("player2-weapon-name");
let displayPlayer2DamagePoint = document.getElementById("player2-weapon-damage-point");

/* Create Weapon class */
class Weapon {
    constructor(id, name, image, damagePoint) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.damagePoint = damagePoint;
    }
    // Check if player has an old weapon, if yes drop the weapon on site
    static checkOldWeapon(player, rowIndex, columnIndex) {
        if (player.oldWeapon !== "") {
            gameBoard.arr[rowIndex][columnIndex] = player.oldWeapon;
            player.oldWeapon = "";
        } else {
            gameBoard.arr[rowIndex][columnIndex] = "";
        }
    }
    // Switch weapon
    static switchWeapon(player, newWeapon, displayWeaponName, displayWeaponImage, displayDamagePoint) {
        player.oldWeapon = player.currentWeapon; // set current weapon to old weapon and
        player.currentWeapon = newWeapon.name; // set new weapon to current weapon
        displayWeaponName.textContent = player.currentWeapon;
        displayWeaponImage.src = newWeapon.image;
        displayDamagePoint.textContent = newWeapon.damagePoint;
    }
}

// Create the weapon object
const weapons = [new Weapon(1, "fork", "images/fork.png", 10),
                new Weapon(2, "pan", "images/pan.png", 20),
                new Weapon(3, "bat", "images/bat.png", 25),
                new Weapon(4, "hammer", "images/hammer.png",50)];

