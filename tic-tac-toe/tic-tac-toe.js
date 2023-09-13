document.addEventListener("DOMContentLoaded", run);

function run() {
  const container = document.getElementById("items-container");
  new TicTacToe(container);
}

const steps = {
  CROSS: "cross",
  NOUGHT: "nought",
};

const winners = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"],
  ["0-0", "1-0", "2-0"],
  ["0-1", "1-1", "2-1"],
  ["0-2", "1-2", "2-2"],
  ["0-0", "1-1", "2-2"],
  ["0-2", "1-1", "2-0"],
];

class TicTacToe {
  constructor(container) {
    this.container = container;
    this.initialize();
    this.step = steps.CROSS;
    this.isGameEnded = false;
  }

  initialize = () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.setAttribute("id", `${row}-${col}`);
        item.style.top = `${row * 33.3}%`;
        item.style.left = `${col * 33.3}%`;
        this.container.appendChild(item);
        item.addEventListener("click", this.handleItemClick);
      }
    }
  };

  handleItemClick = (event) => {
    if (this.isGameEnded) {
      return;
    }

    const isUsed =
      event.target.classList.contains(steps.CROSS) ||
      event.target.classList.contains(steps.NOUGHT);
    if (!isUsed) {
      event.target.classList.add(this.step);
      this.step = this.step === steps.CROSS ? steps.NOUGHT : steps.CROSS;
      const winner = this.victory();
      if (winner) {
        winner.forEach((id) => {
          const item = this.container.querySelector(`[id="${id}"]`);
          item.classList.add("winner");
        });
        this.isGameEnded = true;
      }
    }
  };

  victory = () => {
    const items = this.container.querySelectorAll(".item");
    const elements = [...items].map((item) => ({
      id: item.id,
      value: this.getValue(item),
    }));
    return checkTicTacToeVictory(elements);
  };
  0;
  getValue = (item) => {
    if (item.classList.contains(steps.CROSS)) {
      return steps.CROSS;
    }
    if (item.classList.contains(steps.NOUGHT)) {
      return steps.NOUGHT;
    }
    return "";
  };
}

function checkTicTacToeVictory(elements) {
  const checkWinner = (winner, value) => {
    return winner.every((id) => {
      const element = elements.find((el) => el.id === id);
      return element && element.value === value;
    });
  };

  for (let i = 0; i < winners.length; i++) {
    const isWinner =
      checkWinner(winners[i], steps.CROSS) ||
      checkWinner(winners[i], steps.NOUGHT);

    if (isWinner) {
      return winners[i];
    }
  }

  return null;
}
