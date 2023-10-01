const calculatorHtml = `
<div class="calculator">
  <div class="display">
    <span id='output'></span>
  </div>
  <div class="buttons">
    <div class="buttons-row">
      <button class="button-text-sm" data-value="on">
          On
      </button>
      <button class="button-text-sm" data-value="off">
          Off
      </button>
      <button class="button-text-sm" data-value="ce">
          CE
      </button>
      <button class="button-text-sm" data-value="%">
          %
      </button>
    </div>
    <div class="buttons-row">
      <button data-value="7">
          7
      </button>
      <button data-value="8">
          8
      </button>
      <button data-value="9">
          9
      </button>
      <button data-value="/">
          &#247;
      </button>
    </div>
    <div class="buttons-row">
      <button data-value="4">
          4
      </button>
      <button data-value="5">
          5
      </button>
      <button data-value="6">
          6
      </button>
      <button data-value="*">
          &times;
      </button>
    </div>
    <div class="buttons-row">
      <button data-value="1">
          1
      </button>
      <button data-value="2">
          2
      </button>
      <button data-value="3">
          3
      </button>
      <button data-value="-">
          &minus;
      </button>
    </div>
    <div class="buttons-row">
      <button data-value='0'>
          0
      </button>
      <button data-value=".">
          &#8226;
      </button>
      <button data-value="+">
          &plus;
      </button>
      <button id="equal" data-value="=">
          &#61;
      </button>
    </div>
  </div>
</div>
`;

const PLUS = "+";
const MINUS = "-";
const MULTIPLY = "*";
const DIVIDE = "/";
const CE = "ce";
const DOT = ".";
const RATE = "%";

const operators = {
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  CE,
  DOT,
  RATE,
};

class Presenter {
  constructor(container) {
    this.container = container;
    this.container.innerHTML = calculatorHtml;
    this.calculator = new Calculator();
    this.isRunning = false;
    this.output = document.getElementById("output");
    this.current = null;
    this.prevNumber = null;
    this.result = null;
    this.operator = null;
    this.listeners = this.addEventListeners();
  }

  destroy() {
    Object.values(this.listeners).forEach(([element, type, listener]) => {
      element.removeEventListener(type, listener);
    });
    this.container.innerHTML = "";
  }

  addEventListeners() {
    const listeners = {};

    const turnOnButton = document.querySelector('[data-value="on"]');
    turnOnButton.addEventListener("click", this.handleTurnOnButtonClick);
    listeners.turnOn = [turnOnButton, "click", this.handleTurnOnButtonClick];

    const turnOffButton = document.querySelector('[data-value="off"]');
    turnOffButton.addEventListener("click", this.handleTurnOffButtonClick);
    listeners.turnOff = [turnOffButton, "click", this.handleTurnOffButtonClick];

    for (let i = 0; i < 10; i++) {
      const numberButton = document.querySelector(`[data-value="${i}"]`);
      numberButton.addEventListener("click", this.handleNumberButtonClick);
      listeners[`numberButton_${i}`] = [
        numberButton,
        "click",
        this.handleNumberButtonClick,
      ];
    }

    const operatorsValues = Object.values(operators);
    for (let i = 0; i < operatorsValues.length; i++) {
      const operatorButton = document.querySelector(
        `[data-value="${operatorsValues[i]}"]`
      );
      operatorButton.addEventListener("click", this.handleOperatorButtonClick);
      listeners[`operatorButton_${operatorsValues[i]}`] = [
        operatorButton,
        "click",
        this.handleOperatorButtonClick,
      ];
    }

    const equalButton = document.querySelector('[data-value="="]');
    equalButton.addEventListener("click", this.handleEqualButtonClick);
    listeners.equalButton = [equalButton, "click", this.handleEqualButtonClick];

    return listeners;
  }

  handleTurnOnButtonClick = () => {
    if (!this.isRunning) {
      this.output.textContent = 0;
      this.isRunning = true;
    }
  };

  handleTurnOffButtonClick = () => {
    if (this.isRunning) {
      this.output.textContent = "";
      this.isRunning = false;
      this.prevNumber = null;
      this.current = null;
      this.result = null;
    }
  };

  handleNumberButtonClick = (e) => {
    if (!this.isRunning) {
      return;
    }

    if (this.prevNumber && !this.current) {
      this.output.textContent = "";
    }
    this.current = Number(e.target.dataset.value);
    if (this.output.textContent === "0") {
      this.output.textContent = this.current;
    } else {
      this.output.textContent += this.current;
      this.current = Number(this.output.textContent);
    }
  };

  handleOperatorButtonClick = (e) => {
    if (!this.isRunning) {
      return;
    }

    const { value } = e.target.dataset;

    if (value === ".") {
      if (!this.output.textContent.includes(".")) {
        this.output.textContent += ".";
        this.current = Number(this.output.textContent);
      }
      return;
    }

    if (this.operator) {
      if (value === "%") {
        const rate = Number(this.prevNumber * (this.current / 100));
        this.output.textContent = rate;

        if (this.operator === operators.PLUS) {
          this.result = this.prevNumber + rate;
        } else if (this.operator === operators.MINUS) {
          this.result = this.prevNumber - rate;
        } else if (this.operator === operators.MULTIPLY) {
          this.result = this.prevNumber * rate;
        } else if (this.operator === operators.DIVIDE) {
          this.result = this.prevNumber / rate;
        }

        this.output.textContent = this.result;
        this.prevNumber = this.result;
        this.current = null;
        this.operator = null;

        return;
      }

      this.chooseOperator(value);
    }

    this.operator = value;

    if (this.operator === operators.CE) {
      this.current = 0;
      this.output.textContent = 0;
      return;
    }

    if (this.prevNumber && this.current) {
      this.chooseOperator();
    } else if (this.prevNumber && !this.current) {
      this.current = null;
      this.output.textContent = this.prevNumber;
    } else {
      this.prevNumber = this.current;
      this.current = null;
      this.output.textContent = this.prevNumber;
    }
  };

  handleEqualButtonClick = (e) => {
    if (!this.isRunning) {
      return;
    }

    if (!this.prevNumber) {
      this.output.textContent = this.current;
    } else {
      this.chooseOperator();
      this.output.textContent = this.result;
      this.prevNumber = this.result;
      this.current = null;
    }
  };

  chooseOperator() {
    if (this.operator === operators.PLUS) {
      this.result = this.calculator.getSum(
        Number(this.prevNumber),
        Number(this.current)
      );
    }
    if (this.operator === operators.MINUS) {
      this.result = this.calculator.getSubtract(
        Number(this.prevNumber),
        Number(this.current)
      );
    }
    if (this.operator === operators.MULTIPLY) {
      this.result = this.calculator.getMultiplу(
        Number(this.prevNumber),
        Number(this.current)
      );
    }
    if (this.operator === operators.DIVIDE) {
      if (this.current !== 0) {
        this.result = this.calculator.getDivision(
          Number(this.prevNumber),
          Number(this.current)
        );
      } else {
        this.output.textContent = "Error";
      }
    }
    this.output.textContent = this.result;
    this.prevNumber = this.result;
    this.current = null;
    this.operator = null;
  }
}
