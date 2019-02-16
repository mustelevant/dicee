/*jshint esversion: 6 */

// Generate random numbers from 1-6
let randomNumber1 = Math.round(Math.random() * (6-1) + 1);
let randomNumber2 = Math.round(Math.random() * (6-1) + 1);

function checkWinner() {
  if (randomNumber1 > randomNumber2) {
    return 1;
  } if (randomNumber2 > randomNumber1) {
    return 2;
  } else {
    return 0;
  }
}

let winner = checkWinner();

// Set images according to random number
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Change the heading text according to the winner
if (winner > 0) {
  document.querySelector("h1").textContent = "Player " + winner + " wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
