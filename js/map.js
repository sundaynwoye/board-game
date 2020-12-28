// Get access to the main div
let main = document.getElementById("main");

/* Create a board class */
 class Board {
     constructor(table, rows, cols) {
         this.table = table;
         this.rows = rows;
         this.cols = cols;
         this.arr = [];
     }
     // Create a 2D Array
     create2dArray() {
         for (let i = 0; i < 10; i++) {
             this.arr[i] = [];
             for (let j = 0; j < 10; j++) {
                 this.arr[i][j] = "";
             }
         }
         return this.arr;
     }
     // Create table
     createTable() {
         this.table = document.getElementById("grid");
         $("#grid").empty() // remove the table
         for (let i = 0; i < 10; i++) {
             this.rows = document.createElement("tr");
             for (let j = 0; j < 10; j++) {
                 this.cols = document.createElement("td");
                 this.cols.textContent = this.arr[i][j]; // Get table content from the array items
                 this.rows.appendChild(this.cols);
             }
             this.table.appendChild(this.rows);
         }
         this.addItem(); // add item
         Players.movement(players[0], players[1]); // create movement

         return this.table;
     }
     // Add item on the grid
     addItem() {
         $("td:contains(rock)").addClass("obstacle");
         $("td:contains(fork)").addClass("weapon1");
         $("td:contains(pan)").addClass("weapon2");
         $("td:contains(bat)").addClass("weapon3");
         $("td:contains(hammer)").addClass("weapon4");
         $("td:contains(Tom)").addClass("player1");
         $("td:contains(Jerry)").addClass("player2");

     }

 }
 // create the board object
 const gameBoard = new Board("table", "row", "col");

 // create the 2D array
gameBoard.create2dArray();

// create a random function to generate number
 const generateAtRandom = (num) => {
     return Math.floor(Math.random() * Math.floor(num));
 }

// Get the new game button
 let newGame = document.getElementById("new-game");

 // When the user clicks on the button, reload the page
 newGame.addEventListener("click", () => {
     location.reload();
 })

// Get the modal
let gameRules = document.getElementById("rules-section");

 // Get the button that opens the modal
let rulesBtn = document.getElementById("rules-btn");

// Get the <span> element that closes the modal
let closeIcon = document.getElementById("close-icon");

// When the user clicks on the button, open the modal
rulesBtn.addEventListener("click", () => {
    gameRules.style.display = "block";
})

// When the user clicks clicks on <span> (X), close the modal
closeIcon.addEventListener("click", () => {
    gameRules.style.display = "none";
})

// When the use clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
    if (event.target === gameRules) {
        gameRules.style.display = "none";
    }
})