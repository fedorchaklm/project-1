(function run() {
  const container = document.getElementById("calculator-container");
  const calculator = new Presenter(container);
})();

function arraySortInfo(inputArray) {
  if (inputArray.find((el) => typeof el !== "number")) {
    return console.log("some elements are not numbers");
  }

  if (
    inputArray.every((el, index) =>
      index > 0 ? el >= inputArray[index - 1] : true
    )
  ) {
    return console.log("sorted ABC");
  }

  if (
    inputArray.every((el, index) =>
      index > 0 ? el <= inputArray[index - 1] : true
    )
  ) {
    return console.log("sorted ABC");
  }
  return console.log("not sorted");
}

const a = [5, "abc", 7, 8];
const b = [1, 2, 3, 4, 5];
const c = [8, 6, 3, 2, 1];
arraySortInfo(a);
arraySortInfo(b);
arraySortInfo(c);
