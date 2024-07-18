document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("rules").style.display = "none";
});
document.getElementById("rulesButton").addEventListener("click", () => {
  document.getElementById("rules").style.display = "block";
});

var computer_score = 0;
var your_score = 0;
var choices = ["stone", "paper", "scissors"];
function count_score(userChoice) {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let status = -1;
  if (userChoice === computerChoice) {
    status = 0;
  } else if (
    (userChoice === "stone" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "stone") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    status = 1;
    // You win
  } else {
    status = 2;
  }

  document.querySelector(".game").style.display = "none";
  if (status == 0) {
    // your_score += 1;
    // document.getElementById("your-value").innerText = your_score;
    // document.querySelector(".game-result h1").innerHTML = "";
    document.querySelector(".results3").style.display = "flex";

    let your_choice = document.querySelector(
      ".results3 .your-choice button img"
    );
    your_choice.src = `./assests/${userChoice}.png`;

    let computer_choice = document.querySelector(
      ".results3 .computer-choice button img"
    );
    computer_choice.src = `./assests/${computerChoice}.png`;

    document.querySelector(".results3 .game-result span").innerHTML =
      "<h1>TIE UP</h1>";

    document.querySelector(".results3 .game-result button").innerText =
      "REPLAY";
  } else if (status == 2) {
    computer_score += 1;
    document.getElementById("computer-value").innerText = computer_score;
    // document.querySelector(".results2.game-result h1").innerText = "";
    document.querySelector(".results2").style.display = "flex";

    document.querySelector(
      ".results2 .your-choice button img"
    ).src = `./assests/${userChoice}.png`;
    document.querySelector(
      ".results2 .computer-choice button img"
    ).src = `./assests/${computerChoice}.png`;
  } else {
    your_score += 1;
    document.getElementById("your-value").innerText = your_score;
    // document.querySelector(".game-result h1").innerHTML = "";
    document.querySelector(".results1").style.display = "flex";

    let your_choice = document.querySelector(
      ".results1 .your-choice button img"
    );
    your_choice.src = `./assests/${userChoice}.png`;

    let computer_choice = document.querySelector(
      ".results1 .computer-choice button img"
    );
    computer_choice.src = `./assests/${computerChoice}.png`;
  }
  // document.querySelector(".results").style.display = "flex";
  if (computer_score < your_score) {
    document.getElementById("next").style.display = "block";
  } else {
    document.getElementById("next").style.display = "none";
  }
}

document.querySelector(".playagain").addEventListener("click", () => {});

function playagain() {
  document.querySelector(".results1").style.display = "none";
  document.querySelector(".results2").style.display = "none";
  document.querySelector(".results3").style.display = "none";
  document.querySelector(".game").style.display = "block";
}
