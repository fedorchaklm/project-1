class Presenter {
  constructor() {
    this.calculator = new Calculator();
    this.isRunning = false;
    this.output = document.getElementById("output");
    this.current = null;
    this.prevNumber = null;
    this.result = null;
    this.operators = ["+", "-", "*", "/", "ce", "."];
    this.operatorChosen = null;
    this.turnOn();
    this.turnOff();
    this.addEventNumbers();
    this.addEventOperators();
    this.addEventEqual();
  }

  turnOn() {
    const turnOnButton = document.querySelector('[data-value="on"]');
    turnOnButton.addEventListener("click", (evt) => {
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
    turnOffButton.addEventListener("click", () => {
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
      return;
    });
  }

  addEventNumbers() {
    const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < value.length; i++) {
      const buttonNumber = document.querySelector(`[data-value="${i}"]`);
      buttonNumber.addEventListener("click", () => {
        if (this.output.textContent.includes(".")) {
          this.output.textContent += ".";
          this.current = Number(this.output.textContent);
          console.log("prevNumber", this.prevNumber, "current", this.current);
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
    for (let i = 0; i < this.operators.length; i++) {
      const buttonOperator = document.querySelector(
        `[data-value="${this.operators[i]}"]`
      );
      buttonOperator.addEventListener("click", (evt) => {
        debugger;
        const { value } = evt.target.dataset;

        if (this.operatorChosen) {
          this.chooseOperator();
          this.operatorChosen = value;
          console.log("operator", this.operatorChosen);
        } else {
          this.operatorChosen = value;
          console.log("operator", this.operatorChosen);
        }

        if (this.operatorChosen === this.operators[4]) {
          this.current = 0;
          this.output.textContent = 0;
          console.log("prevNumber", this.prevNumber, "current", this.current);
          return;
        }

        if (this.operatorChosen === this.operators[5]) {
          if (!this.output.textContent.includes(".")) {
            this.output.textContent += ".";
            this.current = Number(this.output.textContent);
            console.log("prevNumber", this.prevNumber, "current", this.current);
            return;
          } else {
            return;
          }
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
    buttonEqual.addEventListener("click", () => {
      if (!this.prevNumber) {
        this.output.textContent = this.current;
        console.log("enter without operator");
      } else {
        console.log("operatorChosen", this.operatorChosen);
        this.chooseOperator();
        console.log("Enter =", this.result);
        this.output.textContent = this.result;
        this.prevNumber = this.result;
        this.current = null;
      }
    });
  }

  chooseOperator() {
    if (this.operatorChosen === this.operators[0]) {
      this.result = this.calculator.getSum(
        Number(this.prevNumber),
        Number(this.current)
      );
    }
    if (this.operatorChosen === this.operators[1]) {
      this.result = this.calculator.getSubtract(
        Number(this.prevNumber),
        Number(this.current)
      );
    }
    if (this.operatorChosen === this.operators[2]) {
      this.result = this.calculator.getMultiplу(
        Number(this.prevNumber),
        Number(this.current)
      );
    }
    if (this.operatorChosen === this.operators[3]) {
      this.operatorChosen = this.operators[3];
      console.log("operator", this.operatorChosen);
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
    this.operatorChosen = null;
    console.log({
      result: this.result,
      prevNumber: this.prevNumber,
      current: this.current,
    });
  }
}
