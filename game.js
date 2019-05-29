const hands = document.querySelectorAll(".select img");
const startGameBtn = document.querySelector(".start");

const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0
};

const currentGame = {
  playerHand: "",
  aiHand: "",
  currentWinner: ""
};

function handSelection() {
  currentGame.playerHand = this.dataset.option;
  hands.forEach(hand => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px green";
}

function aiRandom() {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      currentGame.aiHand = "papier";
      break;
    case 2:
      currentGame.aiHand = "kamień";
      break;
    case 3:
      currentGame.aiHand = "nożyczki";
      break;
  }
}

function competition() {
  gameSummary.numbers += 1;

  if (currentGame.playerHand === "papier") {
    if (currentGame.aiHand === "papier") {
      currentGame.currentWinner = "Remis";
      gameSummary.draws += 1;
    } else if (currentGame.aiHand === "nożyczki") {
      currentGame.currentWinner = "Komputer :(";
      gameSummary.losses += 1;
    } else {
      currentGame.currentWinner = "Ty!";
      gameSummary.wins += 1;
    }
  } else if (currentGame.playerHand === "kamień") {
    if (currentGame.aiHand === "kamień") {
      currentGame.currentWinner = "Remis";
      gameSummary.draws += 1;
    } else if (currentGame.aiHand === "papier") {
      currentGame.currentWinner = "Komputer :(";
      gameSummary.losses += 1;
    } else {
      currentGame.currentWinner = "Ty!";
      gameSummary.wins += 1;
    }
  } else if (currentGame.playerHand === "nożyczki") {
    if (currentGame.aiHand === "nożyczki") {
      currentGame.currentWinner = "Remis";
      gameSummary.draws += 1;
    } else if (currentGame.aiHand === "kamień") {
      currentGame.currentWinner = "Komputer :(";
      gameSummary.losses += 1;
    } else {
      currentGame.currentWinner = "Ty!";
      gameSummary.wins += 1;
    }
  }
}

function displayCurrentGame() {
  const fields = document.querySelectorAll("[data-summary]");
  fields[0].textContent = currentGame.playerHand;
  fields[1].textContent = currentGame.aiHand;
  fields[2].textContent = currentGame.currentWinner;
  if (fields[2].textContent == "Ty!") fields[2].style.color = "green";
  else if (fields[2].textContent == "Komputer :(")
    fields[2].style.color = "red";
  else fields[2].style.color = "grey";

  const numbers = document.querySelectorAll("[data-numbers]");
  numbers[0].textContent = gameSummary.numbers;
  numbers[1].textContent = gameSummary.wins;
  numbers[2].textContent = gameSummary.losses;
  numbers[3].textContent = gameSummary.draws;
}

function reset() {
  Object.keys(currentGame).forEach(function (item) {
    currentGame[item] = "";
  });
  hands.forEach(hand => (hand.style.boxShadow = ""));
}

function game() {
  if (currentGame.playerHand === "") alert("Wybierz swoją rękę");
  else {
    aiRandom();
    competition();
    displayCurrentGame();

    reset();
  }
}

hands.forEach(hand => hand.addEventListener("click", handSelection));
startGameBtn.addEventListener("click", game);