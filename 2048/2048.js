document.addEventListener("DOMContentLoaded", run);

function run() {
  const container = document.getElementById("container");
  new Game(container);
}

function moveItems(items) {
  // console.log('> 0', items);
  const elements = items.sort((a, b) => a !== '' && b !== ''  ? 0 : a === '' ? 1 : -1);
  // console.log('> 1', elements);
  for (let i = 0; i < elements.length - 1; i++) {
    const el = elements[i];
    if (el !== '' && el === elements[i + 1]) {
      elements[i] = `${el * 2}`;
      elements[i + 1] = '';
      i++;
    }
  }
  // console.log('> 2', elements);
  for (let i = 0; i < elements.length - 1; i++) {
    const el = elements[i];
    if (!el) {
      elements[i] = elements[i + 1];
      elements[i + 1] = '';
    }
  }
  // console.log('> 3', elements);
  return elements;
}

const DIRECTION = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
};

class Game {
  constructor(container) {
    this.container = container;
    this.initialize();
  }

  initialize = () => {
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.dataset.row = row;
        item.dataset.col = col;
        item.style.top = `${row * 25}%`;
        item.style.left = `${col * 25}%`;
        this.container.appendChild(item);
      }
    }

    this.addNewItem();
    this.addNewItem();

    document.addEventListener("keydown", this.handleKeyDown);
  };

  handleKeyDown = (evt) => {
    switch (evt.key) {
      case "ArrowUp": {
        this.updateElements(['col', 'row', false]);
        break;
      }
      case "ArrowDown": {
        this.updateElements(['col', 'row', true]);
        break;
      }
      case "ArrowRight": {
        this.updateElements(['row', 'col', true]);
        break;
      }
      case "ArrowLeft": {
        this.updateElements(['row', 'col', false]);
        break;
      }
      default:
      // we don't handle other keydown keys
    }

    this.addNewItem();
  };

  updateElements = (config) => {
    const allItems = [...this.container.querySelectorAll(".item")];

    for (let i = 0; i < 4; i++) {
      const items = allItems.filter((el) => el.dataset[config[0]] === `${i}`);
      let values = items.map(item => item.dataset.value || '');
      if (config[2]) {
        values = values.reverse();
      }
      // console.log('> values', values);
      let newValues = moveItems(values);
      if (config[2]) {
        newValues = newValues.reverse();
      }
      // console.log('> newValues', newValues);
      items.forEach(item => {
        const index = Number(item.dataset[config[1]]);
        item.dataset.value = newValues[index];
        item.textContent = newValues[index];
      });
    }
  }

  getEmptyItems = () => {
    const allItems = [...this.container.querySelectorAll(".item")];
    const emptyItems = allItems.filter((el) => !el.dataset.value);
    return emptyItems;
  }

  addNewItem = () => {
    const emptyItems = this.getEmptyItems();
    if (emptyItems.length) {
      const value = this.generateValue();
      const randIndex = getRandomValue(0, emptyItems.length - 1);
      emptyItems[randIndex].textContent = value;
      emptyItems[randIndex].dataset.value = value;
    }
  };

  generateValue = () => {
    const rand = getRandomValue(0, 100);
    return rand < 10 ? 4 : 2;
  };
}

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
