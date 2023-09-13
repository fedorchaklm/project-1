document.addEventListener("DOMContentLoaded", run);

function run() {
  new Coin(document.getElementById("container"));
}

const coins = {
  HEADS: "heads",
  TAILS: "tails",
};

class Coin {
  constructor(container) {
    this.container = container;
    this.initialize();
  }

  initialize = () => {
    const coin = document.createElement("div");
    coin.setAttribute("id", "coin");
    coin.innerHTML = `
      <div id='heads' class='side'></div>
      <div id='tails' class='side'></div>
    `;
    this.container.appendChild(coin);
    coin.addEventListener("click", this.handleCoinClick);
  };

  handleCoinClick = (event) => {
    const coin = event.currentTarget;

    if (coin.classList.contains("disabled")) {
      return;
    }

    const value = Math.random() >= 0.5 ? coins.HEADS : coins.TAILS;

    if (coin.classList.contains(value)) {
      coin.classList.toggle("rotate");
    } else {
      coin.classList.remove(coins.HEADS);
      coin.classList.remove(coins.TAILS);
      coin.classList.add(value);
    }

    coin.classList.add("disabled");
    this.soundPlay();

    setTimeout(() => {
      coin.classList.remove("disabled");
    }, 2000);
  };

  soundPlay() {
    const audio = new Audio();
    audio.src = "audio/coin-drop.mp3";
    audio.play();
  }
}
