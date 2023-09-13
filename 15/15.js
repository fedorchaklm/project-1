document.addEventListener("DOMContentLoaded", run);

function run() {
  const container = document.getElementById("items-container");
  new Fifteens(container);
}

class Fifteens {
  constructor(container) {
    this.container = container;
    this.initialize();
  }

  victory = () => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const item = this.container.querySelector(`[id="${row}-${col}"]`);
        if (item.textContent !== `${row * 4 + col + 1}`) {
          return false;
        }
      }
    }
    return true;
  };

  canMove = (elementId, invisibleId) => {
    const [elemntRow, elemntCol] = elementId.split("-");
    const [invisibleRow, invisibleCol] = invisibleId.split("-");
    if (elemntRow === invisibleRow) {
      return Math.abs(elemntCol - invisibleCol) === 1;
    }
    if (elemntCol === invisibleCol) {
      return Math.abs(elemntRow - invisibleRow) === 1;
    }
    return false;
  };

  handleClick = (evt) => {
    const invisible = this.container.querySelector(".invisible");
    if (this.canMove(evt.target.id, invisible.id)) {
      const top = invisible.style.top;
      const left = invisible.style.left;
      invisible.style.top = evt.target.style.top;
      invisible.style.left = evt.target.style.left;
      evt.target.style.top = top;
      evt.target.style.left = left;
      const id = invisible.id;
      invisible.setAttribute("id", evt.target.id);
      evt.target.setAttribute("id", id);
      
      if (this.victory()) {
        setTimeout(() => {
          alert('Congratulations!!!');
        }, 1000);
      }
    }
      };

  initialize = () => {
    const usedValues = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        // const value = this.getRandomValue(usedValues);
        const value = this.getMockValue(row, col);
        usedValues.push(value);
        const item = document.createElement("div");
        item.classList.add("item");
        item.setAttribute("id", `${row}-${col}`);
        item.textContent = value;
        item.style.top = `${row * 25}%`;
        item.style.left = `${col * 25}%`;
        if (value === 16) {
          item.classList.add("invisible");
        }
        item.addEventListener("click", this.handleClick);
        this.container.appendChild(item);
      }
    }
  };

  getRandomValue = (usedValues) => {
    const min = 1;
    const max = 16;
    let value;
    do {
      value = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedValues.includes(value));
    return value;
  };

  getMockValue = (row, col) => {
    return row * 4 + col + 1;
  }
}



