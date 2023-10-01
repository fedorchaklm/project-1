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
    container.innerHTML = calculatorHtml;
    this.calculator = new Calculator();
    this.isRunning = false;
    this.output = document.getElementById("output");
    this.current = null;
    this.prevNumber = null;
    this.result = null;
    this.operator = null;
    this.turnOn();
    this.turnOff();
    this.addEventNumbers();
    this.addEventOperators();
    this.addEventEqual();
  }

  turnOn() {
    const turnOnButton = document.querySelector('[data-value="on"]');
    turnOnButton.addEventListener("click", (e) => {
      console.log("Enter On");
      if (!this.isRunning) {
        this.output.textContent = 0;
        this.isRunning = true;
        console.log(
          "prevNumber",
          this.prevNumber,
          "current",
          this.current,
          "result",
          this.result
        );
      }
      return;
    });
  }

  turnOff() {
    const turnOffButton = document.querySelector('[data-value="off"]');
    turnOffButton.addEventListener("click", (e) => {
      console.log("Enter Off");
      if (this.isRunning) {
        this.output.textContent = "";
        this.isRunning = false;
        this.prevNumber = null;
        this.current = null;
        this.result = null;
        console.log(
          "prevNumber",
          this.prevNumber,
          "current",
          this.current,
          "result",
          this.result
        );
      }
    });
  }

  addEventNumbers() {
    for (let i = 0; i < 10; i++) {
      const buttonNumber = document.querySelector(`[data-value="${i}"]`);
      buttonNumber.addEventListener("click", (e) => {
        if (!this.isRunning) {
          return;
        }

        if (this.prevNumber && !this.current) {
          this.output.textContent = "";
        }
        this.current = i;
        console.log("prevNumber", this.prevNumber, "current", this.current);
        if (this.output.textContent === "0") {
          this.output.textContent = this.current;
        } else {
          this.output.textContent += this.current;
          this.current = Number(this.output.textContent);
          console.log("prevNumber", this.prevNumber, "current", this.current);
        }
      });
    }
  }

  addEventOperators() {
    const operatorsValues = Object.values(operators);
    for (let i = 0; i < operatorsValues.length; i++) {
      const buttonOperator = document.querySelector(
        `[data-value="${operatorsValues[i]}"]`
      );
      buttonOperator.addEventListener("click", (e) => {
        if (!this.isRunning) {
          return;
        }

        const { value } = e.target.dataset;
        console.log(e.target.dataset.value);

        if (value === ".") {
          if (!this.output.textContent.includes(".")) {
            this.output.textContent += ".";
            this.current = Number(this.output.textContent);
            console.log("prevNumber", this.prevNumber, "current", this.current);
          }
          return;
        }

        if (this.operator) {
          if (value === "%") {
            console.log("HERE");
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
          this.operator = value;
          console.log("operator", this.operator);
        } else {
          this.operator = value;
          console.log("operator", this.operator);
        }

        if (this.operator === operators.CE) {
          this.current = 0;
          this.output.textContent = 0;
          console.log("prevNumber", this.prevNumber, "current", this.current);
          return;
        }

        if (this.prevNumber && this.current) {
          console.log("prevNumber", this.prevNumber, "current", this.current);
          this.chooseOperator();
        } else if (this.prevNumber && !this.current) {
          this.current = null;
          this.output.textContent = this.prevNumber;
          console.log("prevNumber", this.prevNumber, "current", this.current);
        } else {
          console.log("prevNumber", this.prevNumber, "current", this.current);
          this.prevNumber = this.current;
          this.current = null;
          console.log("prevNumber", this.prevNumber, "current", this.current);
          this.output.textContent = this.prevNumber;
        }
      });
    }
  }

  addEventEqual() {
    const buttonEqual = document.querySelector('[data-value="="]');
    buttonEqual.addEventListener("click", (e) => {
      if (!this.isRunning) {
        return;
      }

      if (!this.prevNumber) {
        this.output.textContent = this.current;
        console.log("enter without operator");
      } else {
        console.log("operatorChosen", this.operator);
        this.chooseOperator();
        console.log("Enter =", this.result);
        this.output.textContent = this.result;
        this.prevNumber = this.result;
        this.current = null;
      }
    });
  }

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
      console.log("operator", this.operator);
      if (this.current !== 0) {
        console.log("operator", this.operator);
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
    console.log({
      result: this.result,
      prevNumber: this.prevNumber,
      current: this.current,
    });
  }
}
