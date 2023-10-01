describe("Calculator", function () {
  const container = document.getElementById("calculator-container");

  beforeEach(() => {
    new Presenter(container);
    const button = document.querySelector("button[data-value='on']");
    button.click();
  });

  afterEach(() => {
    container.innerHTML = "";
  });

  describe("on", function () {
    it("should show 0 when calculator was turned on", function () {
      const output = document.querySelector("#output");
      assert.equal(output.textContent, "0");
    });

    it("should handle user clicks after calculator was turned on", function () {
      const button = document.querySelector("button[data-value='on']");
      button.click();
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      const output = document.querySelector("#output");
      assert.equal(output.textContent, "1");
    });
  });

  describe("off", function () {
    it("should show nothing when calculator was turned off", function () {
      const button = document.querySelector("button[data-value='off']");
      button.click();
      const output = document.querySelector("#output");
      assert.equal(output.textContent, "");
    });

    it("shouldn`t show when calculator was turned off", function () {
      const button = document.querySelector("button[data-value='off']");
      button.click();
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      const output = document.querySelector("#output");
      assert.equal(output.textContent, "");
    });
  });

  describe("plus", function () {
    it("should show 3 when enter 1 + 2", function () {
      const output = document.querySelector("#output");
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      assert.equal(output.textContent, "1");
      const button = document.querySelector("button[data-value='+']");
      button.click();
      const two = document.querySelector('button[data-value="2"]');
      two.click();
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "3");
    });

    it("should show 33 when enter 11 + 22", function () {
      const output = document.querySelector("#output");
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      assert.equal(output.textContent, "1");
      one.click();
      assert.equal(output.textContent, "11");
      const button = document.querySelector("button[data-value='+']");
      button.click();
      const two = document.querySelector('button[data-value="2"]');
      two.click();
      assert.equal(output.textContent, "2");
      two.click();
      assert.equal(output.textContent, "22");
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "33");
    });
  });

  describe("minus", function () {
    it("should show 22 when enter 45 - 23", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="4"]');
      four.click();
      assert.equal(output.textContent, "4");
      const five = document.querySelector('button[data-value="5"]');
      five.click();
      assert.equal(output.textContent, "45");
      const button = document.querySelector("button[data-value='-']");
      button.click();
      const two = document.querySelector('button[data-value="2"]');
      two.click();
      const three = document.querySelector('button[data-value="3"]');
      three.click();
      assert.equal(output.textContent, "23");
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "22");
    });

    it("should show 100 when enter  123 - 23", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="1"]');
      four.click();
      assert.equal(output.textContent, "1");
      const two = document.querySelector('button[data-value="2"]');
      two.click();
      assert.equal(output.textContent, "12");
      const three = document.querySelector('button[data-value="3"]');
      three.click();
      assert.equal(output.textContent, "123");
      const button = document.querySelector("button[data-value='-']");
      button.click();
      two.click();
      assert.equal(output.textContent, "2");
      three.click();
      assert.equal(output.textContent, "23");
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "100");
    });
  });

  describe("multiply", function () {
    it("should show 8 when enter 4 * 2", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="4"]');
      four.click();
      assert.equal(output.textContent, "4");
      const button = document.querySelector("button[data-value='*']");
      button.click();
      const two = document.querySelector('button[data-value="2"]');
      two.click();
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "8");
    });

    it("should show 96 when enter  12 * 8", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="1"]');
      four.click();
      assert.equal(output.textContent, "1");
      const two = document.querySelector('button[data-value="2"]');
      two.click();
      assert.equal(output.textContent, "12");
      const button = document.querySelector("button[data-value='*']");
      button.click();
      const eight = document.querySelector('button[data-value="8"]');
      eight.click();
      assert.equal(output.textContent, "8");
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "96");
    });
  });

  describe("divide", function () {
    it("should show 7 when enter 49 / 7", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="4"]');
      four.click();
      assert.equal(output.textContent, "4");
      const nine = document.querySelector('button[data-value="9"]');
      nine.click();
      assert.equal(output.textContent, "49");
      const button = document.querySelector("button[data-value='/']");
      button.click();
      const seven = document.querySelector('button[data-value="7"]');
      seven.click();
      assert.equal(output.textContent, "7");
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "7");
    });

    it("should show 25 when enter  125 / 5", function () {
      const output = document.querySelector("#output");
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      assert.equal(output.textContent, "1");
      const two = document.querySelector('button[data-value="2"]');
      two.click();
      assert.equal(output.textContent, "12");
      const five = document.querySelector('button[data-value="5"]');
      five.click();
      assert.equal(output.textContent, "125");
      const button = document.querySelector("button[data-value='/']");
      button.click();
      five.click();
      assert.equal(output.textContent, "5");
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "25");
    });
  });

  describe("ce", function () {
    it("should show 0 when enter CE", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="4"]');
      four.click();
      assert.equal(output.textContent, "4");
      const button = document.querySelector("button[data-value='ce']");
      button.click();
      assert.equal(output.textContent, "0");
    });
  });

  describe(".", function () {
    it("should show 1.6 when enter ", function () {
      const output = document.querySelector("#output");
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      assert.equal(output.textContent, "1");
      const button = document.querySelector("button[data-value='.']");
      button.click();
      assert.equal(output.textContent, "1.");
      const six = document.querySelector('button[data-value="6"]');
      six.click();
      assert.equal(output.textContent, "1.6");
    });

    it("should show 1.6 when enter ", function () {
      const output = document.querySelector("#output");
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      assert.equal(output.textContent, "1");
      const button = document.querySelector("button[data-value='.']");
      button.click();
      assert.equal(output.textContent, "1.");
      const six = document.querySelector('button[data-value="6"]');
      six.click();
      assert.equal(output.textContent, "1.6");
      button.click();
      assert.equal(output.textContent, "1.6");
    });
  });

  describe("%", function () {
    it("should show 600 when enter 400 + 50%", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="4"]');
      four.click();
      assert.equal(output.textContent, "4");
      const zero = document.querySelector('button[data-value="0"]');
      zero.click();
      assert.equal(output.textContent, "40");
      zero.click();
      assert.equal(output.textContent, "400");
      const button = document.querySelector("button[data-value='+']");
      button.click();
      const five = document.querySelector('button[data-value="5"]');
      five.click();
      assert.equal(output.textContent, "5");
      zero.click();
      assert.equal(output.textContent, "50");
      const button2 = document.querySelector("button[data-value='%']");
      button2.click();
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "600");
    });

    it("should show 200 when enter 400 - 50%", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="4"]');
      four.click();
      assert.equal(output.textContent, "4");
      const zero = document.querySelector('button[data-value="0"]');
      zero.click();
      assert.equal(output.textContent, "40");
      zero.click();
      assert.equal(output.textContent, "400");
      const button = document.querySelector("button[data-value='-']");
      button.click();
      const five = document.querySelector('button[data-value="5"]');
      five.click();
      assert.equal(output.textContent, "5");
      zero.click();
      assert.equal(output.textContent, "50");
      const button2 = document.querySelector("button[data-value='%']");
      button2.click();
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "200");
    });

    it("should show 2 when enter 400 / 50%", function () {
      const output = document.querySelector("#output");
      const four = document.querySelector('button[data-value="4"]');
      four.click();
      assert.equal(output.textContent, "4");
      const zero = document.querySelector('button[data-value="0"]');
      zero.click();
      assert.equal(output.textContent, "40");
      zero.click();
      assert.equal(output.textContent, "400");
      const button = document.querySelector("button[data-value='/']");
      button.click();
      const five = document.querySelector('button[data-value="5"]');
      five.click();
      assert.equal(output.textContent, "5");
      zero.click();
      assert.equal(output.textContent, "50");
      const button2 = document.querySelector("button[data-value='%']");
      button2.click();
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "2");
    });

    it("should show 500 when enter 100 * 5%", function () {
      const output = document.querySelector("#output");
      const one = document.querySelector('button[data-value="1"]');
      one.click();
      assert.equal(output.textContent, "1");
      const zero = document.querySelector('button[data-value="0"]');
      zero.click();
      assert.equal(output.textContent, "10");
      zero.click();
      assert.equal(output.textContent, "100");
      const button = document.querySelector("button[data-value='*']");
      button.click();
      const five = document.querySelector('button[data-value="5"]');
      five.click();
      assert.equal(output.textContent, "5");
      const button2 = document.querySelector("button[data-value='%']");
      button2.click();
      const equal = document.querySelector("button[data-value='=']");
      equal.click();
      assert.equal(output.textContent, "500");
    });
  });
});
