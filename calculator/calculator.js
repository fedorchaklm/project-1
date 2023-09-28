// let operator = null;
// let prev = "";
// let current = "";
// let isRunning = false;

// function handleButtonClick(evt) {
//   const { value } = evt.target.dataset;
//   console.log(evt.target.dataset);

//   if (!isRunning) {
//     if (value === "on") {
//       output.textContent = "0";
//       isRunning = true;
//     }
//     return;
//   }

//   if (value === "on") {
//     output.textContent = 0;
//   } else if (value === "off") {
//     output.textContent = "";
//   } else if (value === "ce") {
//     const result = output.textContent;
//     current = Math.floor(result / 10);
//     output.textContent = current;
//   } else if (operators.includes(value)) {
//     operator = value;
//     prev = current;
//     current = "";
//     output.textContent = prev;
//   } else if (value === "=") {
//     if (operator === "+") {
//       const result = Number(prev) + Number(current);
//       output.textContent = result;
//       current = result;
//     } else if (operator === "-") {
//       const result = Number(prev) - Number(current);
//       output.textContent = result;
//       current = result;
//     } else if (operator === "/") {
//       const result = Number(prev) / Number(current);
//       if (Number(current) !== 0) {
//         output.textContent = result;
//         current = result;
//       }
//       if (Number(current) === 0) {
//         output.textContent = "Error";
//       }
//     } else if (operator === "*") {
//       const result = Number(prev) * Number(current);
//       output.textContent = result;
//       current = result;
//     }
//   } else {
//     current += value;
//     output.textContent = current;
//   }
// }

class Calculator {
  makeMathOperation(a, b, operator) {
    let result;
    if ((operator === "+")) {
      result = a + b;
    }
    if ((operator === "-")) {
      result = a - b;
    }
    if ((operator === "*")) {
      result = a * b;
    }
    if ((operator === "/")) {
      result = a / b;
    }
    return result;
  }

  getSum(a, b) {
    const result = a + b;
    return result;
  }

  getSubtract(a, b) {
    const result = a - b;
    return result;
  }

  getMultiplу(a, b) {
    const result = a * b;
    return result;
  }

  getDivision(a, b) {
    const result = a / b;
    return result;
  }


}

