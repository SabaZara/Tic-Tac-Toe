var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var boxes = document.querySelectorAll(".box");
var restartButton = document.querySelector("#restart");
let currentText = 'X';
var counter = 0;
var winner = false;
for (let x of boxes) {
  x.addEventListener("click", function () {
    x.innerText = currentText;
    x.setAttribute("style", "pointer-events:none");
    counter++;
    if (counter == 9 && winner == false) {
      p.innerText = "there is no winner";
      for (let a of boxes) {
        a.setAttribute("style", "pointer-events:none");
      }
    }
    if (currentText == 'X') {
      currentText = 'O';
    } else if (currentText == 'O') {
      currentText = 'X';
    }
    playerWon();
  });
}

function playerWon() {
  var combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (let i of combinations) {
    const [a, b, c] = i;
    if (
      boxes[a].innerText == boxes[b].innerText &&
      boxes[a].innerText == boxes[c].innerText &&
      boxes[a].innerText.length > 0
    ) {
      if (boxes[a].innerText == "O") {
        winner = true;
        p.innerText = 'playerO has won'
        for (let a of boxes) {
          a.setAttribute("style", "pointer-events:none");
        }
      } else if (boxes[a].innerText == "X") {
        winner = true;
        p.innerText = 'playerX has won'
        for (let a of boxes) {
          a.setAttribute("style", "pointer-events:none");
        }
      }
      else {
        p.innerText = 'there is no winner'
      }
    }
  }
  var restartBtn = document.querySelector("#restart");
  restartBtn.addEventListener("click", function restart() {
    for (let x of boxes) {
      x.innerText = "";
      x.removeAttribute("style", "pointer-events:none");
      p.innerText = "";
    }
  });
}