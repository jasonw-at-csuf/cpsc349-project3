// = = winningMessage() = = = = = = = = = = = = = = = = = = = = =
//  In : - winner
//          A Character either 'X' or 'Y'
//  Out: Displays the winning Message for X or Y
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function winningMessage(winner) {
  alert(winner);
  //   if (winner == "X") {
  //     document.getElementById("DisplayMessage").innerHTML("X is the Winner!");
  //     console.log("Displayed Winning Message for: X");
  //   } else if (winner == "X") {
  //     document.getElementById("DisplayMessage").innerHTML("Y is the Winner!");
  //     console.log("Displayed Winning Message for: Y");
  //   } else {
  //     document.getElementById("DisplayMessage").innerHTML("An Error has occured");
  //     console.log(winner);
  //   }
}

// = = resetBoard() = = = = = = = = = = = = = = = = = = = = = =
//  In : None
//  Out: Reloads the browsers &
//       Reset the board state
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function resetBoard() {
  // Refresh the page
  location.reload();
  console.log("Reloaded\n");
}

// = = winningMoves() = = = = = = = = = = = = = = = = = = = = = =
//  In : None
//  Out: Checks the blocks and sees if any of them is the winning
//       move
//       Disables all the other buttons so they can't be clicked
//       once a user has won.
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function checkWin(gameBoard) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0].innerHTML &&
      gameBoard[i][0].innerHTML === gameBoard[i][1].innerHTML &&
      gameBoard[i][1].innerHTML === gameBoard[i][2].innerHTML
    ) {
      return gameBoard[i][0];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[0][i].innerHTML &&
      gameBoard[0][i].innerHTML === gameBoard[1][i].innerHTML &&
      gameBoard[1][i].innerHTML === gameBoard[2][i].innerHTML
    ) {
      return gameBoard[0][i];
    }
  }

  // Check diagonals
  if (
    gameBoard[0][0].innerHTML &&
    gameBoard[0][0].innerHTML === gameBoard[1][1].innerHTML &&
    gameBoard[1][1].innerHTML === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }
  if (
    gameBoard[0][2].innerHTML &&
    gameBoard[0][2].innerHTML === gameBoard[1][1].innerHTML &&
    gameBoard[1][1].innerHTML === gameBoard[2][0].innerHTML
  ) {
    return gameBoard[0][2];
  }

  // No win found
  return null;
}

/**
 * Utility function to map 2d array indices to a 1d array. Given the number of
 * columns and the 2d array index to map, returns the index of the
 * element in the 1d array
 */
function index2d(cols, i, j) {
  return cols * i + j;
}

/**
 * The inverse function of index2d(), given the index on a 1d array and the
 * number of columns, return its index in the 2d array as a tuple
 */
function index1d(cols, x) {
  const i = Math.floor(x / cols);
  const j = x % cols;
  return [i, j];
}

function currentTurn() {
  return document.querySelector("#currentPlayer").innerHTML;
}

function toggleTurn() {
  const nextTurn = currentTurn() == "X" ? "O" : "X";
  document.querySelector("#currentPlayer").innerHTML = nextTurn;
  return nextTurn;
}

function generateBoard() {
  const len = 3;
  const gameBoard = Array.from({ length: len }, () => []);
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < len; ++j) {
      const e = document.createElement("button");
      e.classList.add(
        "flex",
        "justify-center",
        "content-center",
        "m-2",
        "bg-white",
        "text-3xl",
        "w-28",
        "h-28",
        "outline",
        "rounded",
        "btn-square",
        "outline-amber-900",
        "hover:outline-amber-900",
        "hover:outline-8"
      );
      e.id = `b${index1d(len, i, j)}`;
      e.onclick = () => {
        addTile(gameBoard, i, j);
      };
      gameBoard[i][j] = e;
      console.log(e);
      document.querySelector("#game-grid").appendChild(e);
    }
  }
}

function addTile(gameBoard, i, j) {
  let win = checkWin(gameBoard);
  if (win == null && gameBoard[i][j].innerHTML == "") {
    gameBoard[i][j].innerHTML = currentTurn();
    win = checkWin(gameBoard);
    if (win != null) {
      winningMessage(win);
      console.log(gameBoard);
      console.log(win);
    } else toggleTurn();
  }
}

generateBoard();
