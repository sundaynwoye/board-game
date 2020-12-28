// Get player1 row and column index
let player1RowIndex = gameBoard.arr.findIndex(rowIndex => rowIndex.includes(players[0].name));
let  player1ColumnIndex = gameBoard.arr[player1RowIndex].indexOf(players[0].name);

// Get player2 row and column index
let player2RowIndex = gameBoard.arr.findIndex(rowIndex => rowIndex.includes(players[1].name));
let  player2ColumnIndex = gameBoard.arr[player2RowIndex].indexOf(players[1].name);


// Create the table and movement
gameBoard.createTable();

// Get the player possible move
Players.possibleMove();

/* check if players cross over adjacent squares */
let fightMode = false;

const getAdjacent = () => {
    if (player1RowIndex === player2RowIndex && player1ColumnIndex - player2ColumnIndex === 1) {
        fightMode = true;
    } else if (player2RowIndex === player1RowIndex && player2ColumnIndex - player1ColumnIndex === 1) {
        fightMode = true;
    } else if (player1ColumnIndex === player2ColumnIndex && player1RowIndex - player2RowIndex === 1) {
        fightMode = true;
    } else if (player2ColumnIndex === player1ColumnIndex && player2RowIndex - player1RowIndex === 1) {
        fightMode = true;
    } else {
        fightMode = false;
    }
}

