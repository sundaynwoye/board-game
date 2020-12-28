/* Create player class */
class Players {
    constructor(id, name, image, health, oldWeapon, currentWeapon, turn) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.health = health;
        this.oldWeapon = oldWeapon;
        this.currentWeapon = currentWeapon;
        this.turn = turn;
    }
    // Get the possible movement of the players
    static possibleMove() {
        if (players[0].turn === true) {
            box.bottomHighlight(player1RowIndex, player1ColumnIndex, 1);
            box.topHighlight(player1RowIndex, player1ColumnIndex, 1);
            box.rightHighlight(player1RowIndex, player1ColumnIndex, 1);
            box.leftHighlight(player1RowIndex, player1ColumnIndex, 1);
        } else if (players[1].turn === true) {
            box.bottomHighlight(player2RowIndex, player2ColumnIndex, 0);
            box.topHighlight(player2RowIndex, player2ColumnIndex, 0);
            box.rightHighlight(player2RowIndex, player2ColumnIndex, 0);
            box.leftHighlight(player2RowIndex, player2ColumnIndex, 0);
        }
    }
    // Create players movement
    static movement(player1, player2) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                gameBoard.table.rows[i].cells[j].addEventListener("click", function (event) {
                    event.preventDefault();
                    if (this.classList.contains("highlight") && player1.turn === true) {
                        gameBoard.arr[i][j] = player1.name;
                        Weapon.checkOldWeapon(player1, player1RowIndex, player1ColumnIndex);
                        player1RowIndex = gameBoard.arr.findIndex(rowIndex => rowIndex.includes(players[0].name));
                        player1ColumnIndex = gameBoard.arr[player1RowIndex].indexOf(players[0].name);
                        if (gameBoard.table.rows[i].cells[j].classList.contains("weapon1")) {
                            Weapon.switchWeapon(player1, weapons[0], displayPlayer1WeaponName, displayPlayer1WeaponImage, displayPlayer1DamagePoint);
                        } else if (gameBoard.table.rows[i].cells[j].classList.contains("weapon2")) {
                            Weapon.switchWeapon(player1, weapons[1], displayPlayer1WeaponName, displayPlayer1WeaponImage, displayPlayer1DamagePoint);
                        } else if (gameBoard.table.rows[i].cells[j].classList.contains("weapon3")) {
                            Weapon.switchWeapon(player1, weapons[2], displayPlayer1WeaponName, displayPlayer1WeaponImage, displayPlayer1DamagePoint);
                        } else if (gameBoard.table.rows[i].cells[j].classList.contains("weapon4")) {
                            Weapon.switchWeapon(player1, weapons[3], displayPlayer1WeaponName, displayPlayer1WeaponImage, displayPlayer1DamagePoint);
                        }
                        getAdjacent();
                        gameBoard.createTable();
                        player1.turn = false
                        player2.turn = true;
                        Players.possibleMove();
                        startFight();
                    } else if (this.classList.contains("highlight") && player2.turn === true) {
                        gameBoard.arr[i][j] = player2.name;
                        Weapon.checkOldWeapon(player2, player2RowIndex, player2ColumnIndex);
                        player2RowIndex = gameBoard.arr.findIndex(rowIndex => rowIndex.includes(players[1].name));
                        player2ColumnIndex = gameBoard.arr[player2RowIndex].indexOf(players[1].name);
                        if (gameBoard.table.rows[i].cells[j].classList.contains("weapon1")) {
                            Weapon.switchWeapon(player2, weapons[0], displayPlayer2WeaponName, displayPlayer2WeaponImage, displayPlayer2DamagePoint);
                        } else if (gameBoard.table.rows[i].cells[j].classList.contains("weapon2")) {
                            Weapon.switchWeapon(player2, weapons[1], displayPlayer2WeaponName, displayPlayer2WeaponImage, displayPlayer2DamagePoint);
                        } else if (gameBoard.table.rows[i].cells[j].classList.contains("weapon3")) {
                            Weapon.switchWeapon(player2, weapons[2], displayPlayer2WeaponName, displayPlayer2WeaponImage, displayPlayer2DamagePoint);
                        } else if (gameBoard.table.rows[i].cells[j].classList.contains("weapon4")) {
                            Weapon.switchWeapon(player2, weapons[3], displayPlayer2WeaponName, displayPlayer2WeaponImage, displayPlayer2DamagePoint);
                        }
                        getAdjacent();
                        gameBoard.createTable();
                        player2.turn = false;
                        player1.turn = true;
                        Players.possibleMove();
                        startFight();
                    }
                })
            }
        }
    }
}

// Create the players object
const players = [new Players(1, "Tom", "images/tom.png", 100, "", "fork", true),
                 new Players(2, "Jerry", "images/jerry.png", 100, "", "fork", false)];
