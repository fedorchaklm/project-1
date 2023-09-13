describe("pow", function () {
  it("возводит 2 в степень 3", function () {
    const expected = 8;

    const actual = pow(2, 3);

    assert.equal(expected, actual);
  });
});

describe("sumOrMultiply", function () {
  it("should return a*b when a - even", function () {
    const actual = sumOrMultiply(4, 2);
    const expected = 8;
    assert.equal(expected, actual);
  });
  it("should return a+b when a - odd", function () {
    const actual = sumOrMultiply(5, 2);
    const expected = 7;
    assert.equal(expected, actual);
  });
});

describe("getQuater", function () {
  it("should return I when point with coardinates (4,2)", function () {
    const actual = getQuater(4, 2);
    const expected = "I";
    assert.equal(expected, actual);
  });
  it("should return II when point with coardinates (-4,2)", function () {
    const actual = getQuater(-4, 2);
    const expected = "II";
    assert.equal(expected, actual);
  });
  it("should return III when point with coardinates (-4,-2)", function () {
    const actual = getQuater(-4, -2);
    const expected = "III";
    assert.equal(expected, actual);
  });
  it("should return IV when point with coardinates (4,-2)", function () {
    const actual = getQuater(4, -2);
    const expected = "IV";
    assert.equal(expected, actual);
  });
  it("should return IV when point with coardinates (4,0)", function () {
    const actual = getQuater(4, 0);
    const expected = "axis";
    assert.equal(expected, actual);
  });
  it("should return IV when point with coardinates (0,4)", function () {
    const actual = getQuater(0, 4);
    const expected = "axis";
    assert.equal(expected, actual);
  });
  it("should return IV when point with coardinates (-4,0)", function () {
    const actual = getQuater(-4, 0);
    const expected = "axis";
    assert.equal(expected, actual);
  });
  it("should return IV when point with coardinates (0,-4)", function () {
    const actual = getQuater(0, -4);
    const expected = "axis";
    assert.equal(expected, actual);
  });
});

describe("sumOfOnlyPositiveNumbers", function () {
  it("should return a+b+c", function () {
    const actual = sumOfOnlyPositiveNumbers(4, 6, 2);
    const expected = 12;
    assert.equal(expected, actual);
  });
  it("should return a+b", function () {
    const actual = sumOfOnlyPositiveNumbers(4, 6, -3);
    const expected = 10;
    assert.equal(expected, actual);
  });
  it("should return b + c", function () {
    const actual = sumOfOnlyPositiveNumbers(-5, 6, 2);
    const expected = 8;
    assert.equal(expected, actual);
  });
  it("should return a + c", function () {
    const actual = sumOfOnlyPositiveNumbers(8, -5, 6);
    const expected = 14;
    assert.equal(expected, actual);
  });
  it("should return c", function () {
    const actual = sumOfOnlyPositiveNumbers(-3, -3, 8);
    const expected = 8;
    assert.equal(expected, actual);
  });
  it("should return b", function () {
    const actual = sumOfOnlyPositiveNumbers(-5, 4, -7);
    const expected = 4;
    assert.equal(expected, actual);
  });
  it("should return a", function () {
    const actual = sumOfOnlyPositiveNumbers(8, -3, -7);
    const expected = 8;
    assert.equal(expected, actual);
  });
});

describe("maxOfExpresion", function () {
  it("should return a*b*c + 3", function () {
    const actual = maxOfExpresion(2, 3, 4);
    const expected = 27;
    assert.equal(expected, actual);
  });
  it("should return a+b+c+3", function () {
    const actual = maxOfExpresion(1, 1, 1);
    const expected = 6;
    assert.equal(expected, actual);
  });
});

describe("showMark", function () {
  it("should return F", function () {
    const actual = showMark(1);
    const expected = "F";
    assert.equal(expected, actual);
  });
  it("should return F", function () {
    const actual = showMark(19);
    const expected = "F";
    assert.equal(expected, actual);
  });
  it("should return F", function () {
    const actual = showMark(0);
    const expected = "F";
    assert.equal(expected, actual);
  });
  it("should return E", function () {
    const actual = showMark(20);
    const expected = "E";
    assert.equal(expected, actual);
  });
  it("should return E", function () {
    const actual = showMark(25);
    const expected = "E";
    assert.equal(expected, actual);
  });
  it("should return E", function () {
    const actual = showMark(39);
    const expected = "E";
    assert.equal(expected, actual);
  });
  it("should return D", function () {
    const actual = showMark(40);
    const expected = "D";
    assert.equal(expected, actual);
  });
  it("should return D", function () {
    const actual = showMark(50);
    const expected = "D";
    assert.equal(expected, actual);
  });
  it("should return D", function () {
    const actual = showMark(59);
    const expected = "D";
    assert.equal(expected, actual);
  });
  it("should return C", function () {
    const actual = showMark(60);
    const expected = "C";
    assert.equal(expected, actual);
  });
  it("should return C", function () {
    const actual = showMark(70);
    const expected = "C";
    assert.equal(expected, actual);
  });
  it("should return C", function () {
    const actual = showMark(74);
    const expected = "C";
    assert.equal(expected, actual);
  });
  it("should return B", function () {
    const actual = showMark(75);
    const expected = "B";
    assert.equal(expected, actual);
  });
  it("should return B", function () {
    const actual = showMark(80);
    const expected = "B";
    assert.equal(expected, actual);
  });
  it("should return B", function () {
    const actual = showMark(89);
    const expected = "B";
    assert.equal(expected, actual);
  });
  it("should return A", function () {
    const actual = showMark(90);
    const expected = "A";
    assert.equal(expected, actual);
  });
  it("should return A", function () {
    const actual = showMark(95);
    const expected = "A";
    assert.equal(expected, actual);
  });
  it("should return A", function () {
    const actual = showMark(100);
    const expected = "A";
    assert.equal(expected, actual);
  });
  it("should throw error", function () {
    assert.throws(() => showMark(102));
  });
});

describe("sumOfEvenNumbers", function () {
  it("should return object", function () {
    const actual = sumOfEvenNumbers();
    const expected = {
      sum: 2450,
      quantity: 49,
    };
    assert.deepEqual(actual, expected);
  });
});

describe("isPrimedNumber", function () {
  const testData = [
    { num: 1, expected: false },
    { num: 2, expected: true },
    { num: 3, expected: true },
    { num: 4, expected: false },
    { num: 5, expected: true },
    { num: 6, expected: false },
    { num: 7, expected: true },
    { num: 6700417, expected: true },
  ];

  for (const { num, expected } of testData) {
    it(`should return ${expected}, when num is ${num}`, function () {
      const actual = isPrimedNumber(num);
      assert.equal(expected, actual);
    });
  }
});

describe("getRootOfNumber", function () {
  it("should return 2", function () {
    const actual = getRootOfNumber(4);
    const expected = 2;
    assert.equal(expected, actual);
  });
  it("should return 3", function () {
    const actual = getRootOfNumber(9);
    const expected = 3;
    assert.equal(expected, actual);
  });
  it("should return 5", function () {
    const actual = getRootOfNumber(25);
    const expected = 5;
    assert.equal(expected, actual);
  });
  it("should return 2", function () {
    const actual = getRootOfNumber(5);
    const expected = 2;
    assert.equal(expected, actual);
  });
  it("should return 18", function () {
    const actual = getRootOfNumber(18);
    const expected = 4;
    assert.equal(expected, actual);
  });
  it("should return 0", function () {
    const actual = getRootOfNumber(0);
    const expected = 0;
    assert.equal(expected, actual);
  });
});

describe("getRootBinary", function () {
  const testData = [
    { n: 0, expected: 0 },
    { n: 4, expected: 2 },
    { n: 9, expected: 3 },
    { n: 25, expected: 5 },
    { n: 1234, expected: 36 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when number is ${n}`, function () {
      const actual = getRootBinary(n);
      assert.equal(expected, actual);
    });
  }
});

describe("factorial", function () {
  const testData = [
    { n: 2, expected: 2 },
    { n: 3, expected: 6 },
    { n: 4, expected: 24 },
    { n: 5, expected: 120 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when n is ${n}`, function () {
      const actual = factorial(n);
      assert.equal(expected, actual);
    });
  }
});

describe("loopFact", function () {
  const testData = [
    { n: 2, expected: 2 },
    { n: 3, expected: 6 },
    { n: 4, expected: 24 },
    { n: 5, expected: 120 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when n is ${n}`, function () {
      const actual = loopFact(n);
      assert.equal(expected, actual);
    });
  }
});

describe("getSumOfDigits", function () {
  const testData = [
    { n: 11005005, expected: 12 },
    { n: 1, expected: 1 },
    { n: 12, expected: 3 },
    { n: 154, expected: 10 },
    { n: 10, expected: 1 },
    { n: 0, expected: 0 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when number is ${n}`, function () {
      const actual = getSumOfDigits(n);
      assert.equal(expected, actual);
    });
  }
});

describe("getMirrorNumber", function () {
  const testData = [
    { n: 123, expected: 321 },
    { n: 201, expected: 102 },
    { n: 10583, expected: 38501 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when number is ${n}`, function () {
      const actual = getMirrorNumber(n);
      assert.equal(expected, actual);
    });
  }
});

describe("getMirrorNumber2", function () {
  const testData = [
    { n: 123, expected: 321 },
    { n: 201, expected: 102 },
    { n: 10583, expected: 38501 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when number is ${n}`, function () {
      const actual = getMirrorNumber2(n);
      assert.equal(expected, actual);
    });
  }
});

describe("findMinElementOfArray", function () {
  const testData = [
    { arr: [1, 2, 0, 3, 4], expected: 0 },
    { arr: [1], expected: 1 },
    { arr: [1, 2], expected: 1 },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = findMinElementOfArray(arr);
      assert.equal(expected, actual);
    });
  }

  it("should throw Error", function () {
    assert.throws(() => findMinElementOfArray([]), "Empty array");
  });
});

describe("findMaxElementOfArray", function () {
  const testData = [
    { arr: [1, 2, 0, 3, 4], expected: 4 },
    { arr: [1], expected: 1 },
    { arr: [1, 2], expected: 2 },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = findMaxElementOfArray(arr);
      assert.equal(expected, actual);
    });
  }

  it("should throw Error", function () {
    assert.throws(() => findMaxElementOfArray([]), "Empty array");
  });
});

describe("findIndexOfMinElementOfArray", function () {
  const testData = [
    { arr: [3, 5, 5, 1, 0], expected: 4 },
    { arr: [3], expected: 0 },
    { arr: [3, 2], expected: 1 },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = findIndexOfMinElementOfArray(arr);
      assert.equal(expected, actual);
    });
  }
  it("should throw Error", function () {
    assert.throws(() => findIndexOfMinElementOfArray([]), "Empty array");
  });
});

describe("findIndexOfMaxElementOfArray", function () {
  const testData = [
    { arr: [3, 5, 6, 1, 0], expected: 2 },
    { arr: [3], expected: 0 },
    { arr: [3, 4], expected: 1 },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = findIndexOfMaxElementOfArray(arr);
      assert.equal(expected, actual);
    });
  }
  it("should throw Error", function () {
    assert.throws(() => findIndexOfMaxElementOfArray([]), "Empty array");
  });
});

describe("getSumOfOddElements", function () {
  const testData = [
    { arr: [3, 5, 6, 1, 0], expected: 6 },
    { arr: [3], expected: 0 },
    { arr: [3, 4], expected: 4 },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = getSumOfOddElements(arr);
      assert.equal(expected, actual);
    });
  }
  it("should throw Error", function () {
    assert.throws(() => getSumOfOddElements([]), "Empty array");
  });
});

describe("reverseArray", function () {
  const testData = [
    { arr: [3, 5, 6, 1, 0], expected: [0, 1, 6, 5, 3] },
    { arr: [3], expected: [3] },
    { arr: [3, 4], expected: [4, 3] },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = reverseArray(arr);
      assert.deepEqual(expected, actual);
    });
  }
  it("should throw Error", function () {
    assert.throws(() => reverseArray([]), "Empty array");
  });
});

describe("countOddElements", function () {
  const testData = [
    { arr: [3, 5, 6, 1, 0], expected: 3 },
    { arr: [3], expected: 1 },
    { arr: [3, 5], expected: 2 },
    { arr: [], expected: 0 },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = countOddElements(arr);
      assert.equal(expected, actual);
    });
  }
});

describe("getChangedArray", function () {
  const testData = [
    { arr: [3, 5, 1, 0], expected: [1, 0, 3, 5] },
    { arr: [], expected: [] },
    { arr: [1], expected: [1] },
    { arr: [1, 2], expected: [2, 1] },
    { arr: [1, 2, 3, 4], expected: [3, 4, 1, 2] },
    { arr: [1, 2, 3, 4, 5, 6], expected: [4, 5, 6, 1, 2, 3] },
    { arr: [1, 2, 3], expected: [3, 2, 1] },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = getChangedArray(arr);
      assert.deepEqual(expected, actual);
    });
  }
});

describe("getChangedArray", function () {
  const testData = [
    { arr: [], expected: [] },
    { arr: [1], expected: [1] },
    { arr: [1, 2], expected: [2, 1] },
    { arr: [1, 2, 3, 4], expected: [3, 4, 1, 2] },
    { arr: [1, 2, 3], expected: [3, 2, 1] },
    { arr: [1, 2, 3, 4, 5], expected: [4, 5, 3, 1, 2] },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = getChangedArray(arr);
      assert.deepEqual(expected, actual);
    });
  }
});

describe("bubbleSort", function () {
  const testData = [
    { arr: [], expected: [] },
    { arr: [1], expected: [1] },
    { arr: [1, 2], expected: [1, 2] },
    { arr: [2, 1, 0, 4, 2], expected: [0, 1, 2, 2, 4] },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = bubbleSort(arr);
      assert.deepEqual(expected, actual);
    });
  }
});

describe("insertionSort", function () {
  const testData = [
    { arr: [], expected: [] },
    { arr: [1], expected: [1] },
    { arr: [1, 2], expected: [1, 2] },
    { arr: [2, 1, 0, 4, 2], expected: [0, 1, 2, 2, 4] },
    {
      arr: [5, 7, 2, 1, 9, 0, 8, 4, 10],
      expected: [0, 1, 2, 4, 5, 7, 8, 9, 10],
    },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = insertionSort(arr);
      assert.deepEqual(expected, actual);
    });
  }
});

describe("selectSort", function () {
  const testData = [
    { arr: [], expected: [] },
    { arr: [1], expected: [1] },
    { arr: [1, 2], expected: [1, 2] },
    { arr: [2, 1, 0, 4, 2], expected: [0, 1, 2, 2, 4] },
  ];

  for (const { arr, expected } of testData) {
    it(`should return ${expected} when array is ${arr}`, function () {
      const actual = selectSort(arr);
      assert.deepEqual(expected, actual);
    });
  }
});

describe("getStringNameOfTheDay", function () {
  const testData = [
    { n: 1, expected: "Monday" },
    { n: 2, expected: "Tuesday" },
    { n: 3, expected: "Wednesday" },
    { n: 4, expected: "Thursday" },
    { n: 5, expected: "Friday" },
    { n: 6, expected: "Saturday" },
    { n: 7, expected: "Sunday" },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when n is ${n}`, function () {
      const actual = getStringNameOfTheDay(n);
      assert.equal(expected, actual);
    });
  }
  it("should throw error", function () {
    assert.throws(() => (getStringNameOfTheDay(77), "There is no such day!"));
  });
});

describe("getStringNameOfNumber", function () {
  const testData = [
    { n: 1, expected: "one" },
    { n: 2, expected: "two" },
    { n: 3, expected: "three" },
    { n: 4, expected: "four" },
    { n: 5, expected: "five" },
    { n: 6, expected: "six" },
    { n: 7, expected: "seven" },
    { n: 8, expected: "eight" },
    { n: 9, expected: "nine" },
    { n: 10, expected: "ten" },
    { n: 11, expected: "eleven" },
    { n: 20, expected: "twenty" },
    { n: 21, expected: "twenty one" },
    { n: 167, expected: "one hundred sixty seven" },
    { n: 120, expected: "one hundred twenty" },
    { n: 130, expected: "one hundred thirty" },
    { n: 200, expected: "two hundred" },
    { n: 356, expected: "three hundred fifty six" },
    { n: 111, expected: "one hundred eleven" },
    { n: 306, expected: "three hundred six" },
    { n: 999, expected: "nine hundred ninety nine" },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when n is ${n}`, function () {
      const actual = getStringNameOfTheNumber(n);
      assert.equal(expected, actual);
    });
  }
  // it("should throw error", function () {
  //   assert.throws(() => (getStringNameOfTheNumber(1000), "There is too big number!"));
  // });
});

describe("getUnits", () => {
  const testData = [
    { n: 0, expected: 0 },
    { n: 8, expected: 8 },
    { n: 51, expected: 1 },
    { n: 234, expected: 4 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when n is ${n}`, function () {
      const actual = getUnits(n);
      assert.equal(expected, actual);
    });
  }
});

describe("getDozens", () => {
  const testData = [
    { n: 0, expected: 0 },
    { n: 8, expected: 0 },
    { n: 51, expected: 5 },
    { n: 234, expected: 3 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when n is ${n}`, function () {
      const actual = getDozens(n);
      assert.equal(expected, actual);
    });
  }
});

describe("getHundreds", () => {
  const testData = [
    { n: 0, expected: 0 },
    { n: 8, expected: 0 },
    { n: 51, expected: 0 },
    { n: 234, expected: 2 },
  ];

  for (const { n, expected } of testData) {
    it(`should return ${expected} when n is ${n}`, function () {
      const actual = getHundreds(n);
      assert.equal(expected, actual);
    });
  }
});

describe("textToNumber999", function () {
  const testData = [
    { text: "one", expected: 1 },
    { text: "zero", expected: 0 },
    { text: "eleven", expected: 11 },
    { text: "twenty", expected: 20 },
    { text: "nineteen", expected: 19 },
    { text: "twenty one", expected: 21 },
    { text: "ninety nine", expected: 99 },
    { text: "one hundred", expected: 100 },
    { text: "one hundred two", expected: 102 },
    { text: "five hundred twenty five", expected: 525 },
    { text: "nine hundred ninety nine", expected: 999 },
  ];

  for (const { text, expected } of testData) {
    it(`should return ${expected} when text is ${expected}`, function () {
      const actual = textToNumber999(text);
      assert.equal(expected, actual);
    });
  }
});

describe("getDistatnceBetweenTwoCoordinates", function () {
  function almostEqual(exp, act, accuracy) {
    return Math.abs(act - exp) <= accuracy;
  }

  const testData = [
    { x1: 1, y1: 5, x2: 4, y2: 1, expected: 5 },
    { x1: 1, y1: 1, x2: 2, y2: 4, expected: 3.16228 },
  ];

  for (const { x1, y1, x2, y2, expected } of testData) {
    it(`should return ${expected} when point A {${x1};${y1}}, point B {${x2};${y2}}
    `, function () {
      const actual = getDistatnceBetweenTwoCoordinates(x1, y1, x2, y2);
      assert.isTrue(almostEqual(expected, actual, 0.00001));
    });
  }
});

describe.only("checkTickTacToeVictory", () => {
  const testData = [
    {
      elements: [],
      expected: false,
    },
    {
      elements: [
        { id: "0-0", value: "nought" },
        { id: "0-1", value: "nought" },
        { id: "0-2", value: "nought" },
      ],
      expected: true,
    },
    {
      elements: [
        { id: "0-0", value: "cross" },
        { id: "0-1", value: "cross" },
        { id: "0-2", value: "cross" },
      ],
      expected: true,
    },
    {
      elements: [
        { id: "1-0", value: "cross" },
        { id: "1-1", value: "cross" },
        { id: "1-2", value: "cross" },
      ],
      expected: true,
    },
  ];

  for (const { elements, expected } of testData) {
    it(`should return ${expected} when ${JSON.stringify(elements)}`, () => {
      const actual = checkTickTacToeVictory(elements);
      assert.equal(expected, actual);
    });
  }
});
