/* Create box class */
class Box {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
    // Randomly add obstacles in the 2D array
    placeObstacle() {
        for (let i = 0; i < 12; i++) {
            let posX = generateAtRandom(10);
            let posY = generateAtRandom(10);
            gameBoard.arr[posX].splice(posY, 1, gameObstacle.name);
        }

    }
    // Randomly add weapons in the 2D array
    placeWeapon() {
        for (let i = 0; i < 4; i++) {
            let posX = generateAtRandom(10);
            let posY = generateAtRandom(10);
            gameBoard.arr[posX].splice(posY, 1, weapons[i].name);
        }
    }
    // Randomly add players in the 2D array
    placePlayer() {
        for (let i = 0; i < 2; i++) {
            let posX = generateAtRandom(10);
            let posY = generateAtRandom(10);
            gameBoard.arr[posX].splice(posY, 1, players[i].name);
        }
    }
    // Highlight top possible movement
    topHighlight(rowIndex, columnIndex, playerIndex) {
        for (let i = rowIndex - 1; i >= rowIndex - 3 && i > -1; i--) {
            if (gameBoard.arr[i][columnIndex] === gameObstacle.name) {
                break;
            } else if (gameBoard.arr[i][columnIndex] === players[playerIndex].name) {
                break;
            } else {
                gameBoard.table.rows[i].cells[columnIndex].classList.add("highlight");
            }
        }
    }
    // Highlight right possible movement
    rightHighlight(rowIndex, columnIndex, playerIndex) {
        for (let i = columnIndex + 1; i <= columnIndex + 3 && i < 10; i++) {
            if (gameBoard.arr[rowIndex][i] === gameObstacle.name) {
                break;
            } else if (gameBoard.arr[rowIndex][i] === players[playerIndex].name) {
                break;
            } else {
                gameBoard.table.rows[rowIndex].cells[i].classList.add("highlight");
            }
        }
    }
    // Highlight left possible movement
    leftHighlight(rowIndex, columnIndex, playerIndex) {
        for (let i = columnIndex - 1; i >= columnIndex - 3 && i > -1; i--) {
            if (gameBoard.arr[rowIndex][i] === gameObstacle.name) {
                break;
            } else if (gameBoard.arr[rowIndex][i] === players[playerIndex].name) {
                break;
            } else {
                gameBoard.table.rows[rowIndex].cells[i].classList.add("highlight");
            }
        }
    }
    // Highlight bottom possible movement
    bottomHighlight(rowIndex, columnIndex, playerIndex) {
        for (let i = rowIndex + 1; i <= rowIndex + 3 && i < 10; i++) {
            if (gameBoard.arr[i][columnIndex] === gameObstacle.name) {
                break;
            } else if (gameBoard.arr[i][columnIndex] === players[playerIndex].name) {
                break;
            }
            else {
                gameBoard.table.rows[i].cells[columnIndex].classList.add("highlight");
            }
        }
    }
    // Remove highlight
    clearHighlight() {
        $("td").removeClass("highlight");
    }
}

// Create box object
const box = new Box("x", "y");

// Add the obstacle
box.placeObstacle();

// Add the players
box.placePlayer();

// Add the weapon
box.placeWeapon();