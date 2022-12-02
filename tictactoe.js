// = = winningMessage() = = = = = = = = = = = = = = = = = = = = =
//  In : - winner
//          A Character either 'X' or 'Y'
//  Out: Displays the winning Message for X or Y
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
function winningMessage(winner) {
  if (winner == "X") {
    document.getElementById("DisplayMessage").innerHTML("X is the Winner!");
    console.log("Displayed Winning Message for: X");
  } else if (winner == "X") {
    document.getElementById("DisplayMessage").innerHTML("Y is the Winner!");
    console.log("Displayed Winning Message for: Y");
  } else {
    document.getElementById("DisplayMessage").innerHTML("An Error has occured");
    console.log(winner);
  }
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
function winningMoves() {
  var block1 = document.getElementById("b1").value;
  var block2 = document.getElementById("b2").value;
  var block3 = document.getElementById("b3").value;
  var block4 = document.getElementById("b4").value;
  var block5 = document.getElementById("b5").value;
  var block6 = document.getElementById("b6").value;
  var block7 = document.getElementById("b7").value;
  var block8 = document.getElementById("b8").value;
  var block9 = document.getElementById("b9").value;

  // = = = = = = Winning Move: Horizontal X = = = = = =
  if (block1 == "X" && block2 == "X" && block3 == "X") {
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("X");
  } else if (block4 == "X" && block5 == "X" && block6 == "X") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("X");
  } else if (block7 == "X" && block8 == "X" && block9 == "X") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    winningMessage("X");
  }

  // = = = = = = Winning Move: Horizontal O = = = = = =
  if (block1 == "O" && block2 == "O" && block3 == "O") {
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("O");
  } else if (block4 == "O" && block5 == "O" && block6 == "O") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("O");
  } else if (block7 == "O" && block8 == "O" && block9 == "O") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    winningMessage("O");
  }

  // = = = = = = Winning Move: Vertical X = = = = = =
  if (block1 == "X" && block4 == "X" && block7 == "X") {
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("X");
  } else if (block2 == "X" && block5 == "X" && block8 == "X") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("X");
  } else if (block3 == "X" && block6 == "X" && block9 == "X") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winningMessage("X");
  }

  // = = = = = = Winning Move: Vertical O = = = = = =
  if (block1 == "O" && block4 == "O" && block7 == "O") {
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("O");
  } else if (block2 == "O" && block5 == "O" && block8 == "O") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("O");
  } else if (block3 == "O" && block6 == "O" && block9 == "O") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winningMessage("O");
  }

  // = = = = = = Winning Move: Diagonal X = = = = = =
  if (block1 == "X" && block5 == "X" && block9 == "X") {
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winningMessage("X");
  } else if (block3 == "X" && block5 == "X" && block7 == "X") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("X");
  }

  // = = = = = = Winning Move: Diagonal O = = = = = =
  if (block1 == "O" && block5 == "O" && block9 == "O") {
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    winningMessage("O");
  } else if (block3 == "O" && block5 == "O" && block7 == "X") {
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    winningMessage("O");
  }

  // = = = = = = Check for Tie = = = = = =
  if (
    (block1 == "X" || block1 == "O") &&
    (block2 == "X" || block2 == "O") &&
    (block3 == "X" || block3 == "O") &&
    (block4 == "X" || block4 == "O") &&
    (block5 == "X" || block5 == "O") &&
    (block6 == "X" || block6 == "O") &&
    (block7 == "X" || block7 == "O") &&
    (block8 == "X" || block8 == "O") &&
    (block9 == "X" || block9 == "O")
  ) {
    document.getElementById("DisplayMessage").innerHTML("Tie");
  }
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
  if (gameBoard[i][j].innerHTML == "") {
    gameBoard[i][j].innerHTML = currentTurn();
    //TODO: CHECK WIN FOR WIN HERE
    toggleTurn();
  }
}

generateBoard();
