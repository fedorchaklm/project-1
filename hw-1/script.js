function pow(x, n) {
  return x ** n;
}

//  Условные операторы

//Если а – четное посчитать а*б, иначе а+б
function sumOrMultiply(a, b) {
  return a % 2 == 0 ? a * b : a + b;
}

// Определить какой четверти принадлежит точка с координатами (х,у)
function getQuater(x, y) {
  if (x > 0 && y > 0) {
    return "I";
  }

  if (x < 0 && y > 0) {
    return "II";
  }

  if (x < 0 && y < 0) {
    return "III";
  }

  if (x > 0 && y < 0) {
    return "IV";
  }

  return "axis";
}

// Найти сумму только положительных из трех чисел
function sumOfOnlyPositiveNumbers(a, b, c) {
  let sum = 0;

  if (a > 0) sum += a;

  if (b > 0) sum += b;

  if (c > 0) sum += c;

  return sum;
}

// Посчитать выражение макс (а*б*с, а+б+с)+3
function maxOfExpresion(a, b, c) {
  const multiply = a * b * c + 3;
  const sum = a + b + c + 3;

  return multiply > sum ? multiply : sum;
}

// Написать программу определения оценки студента по его рейтингу, на основе следующих правил
function showMark(rating) {
  if (rating >= 0 && rating < 20) {
    return "F";
  }
  if (rating >= 20 && rating < 40) {
    return "E";
  }
  if (rating >= 40 && rating < 60) {
    return "D";
  }
  if (rating >= 60 && rating < 75) {
    return "C";
  }
  if (rating >= 75 && rating < 90) {
    return "B";
  }
  if (rating >= 90 && rating <= 100) {
    return "A";
  }

  // You can use something like: assert.throws(() => showMark(-1));
  throw Error("Invalid rating provided: " + rating);
}

// Циклы
// Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumOfEvenNumbers() {
  // return {
  //   sum: 2450,
  //   quantity: 49
  // };
  let sum = 0;
  let quantity = 0;
  for (let i = 1; i <= 99; i++) {
    if (i % 2 == 0) {
      sum += i;
      quantity++;
    }
  }
  return {
    sum,
    quantity,
  };
}

// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function isPrimedNumber(num) {
  if (num == 1) return false;

  for (let i = 2, j = num; i < j; i++, j = num / i) {
    if (num > 0 && num % i == 0) {
      return false;
    }
  }
  return true;
}

// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

// вариант последовательного подбора
function getRootOfNumber(num) {
  if (num == 0) {
    return 0;
  }
  for (let i = 1; i <= num; i++) {
    if (i * i == num) {
      return i;
    }
    if (i * i > num) {
      return i - 1;
    }
  }
  throw Error("Not found root");
}

// метод бинарного поиска
function getRootBinary(n) {
  const getMid = (a, b) => parseInt((a + b) / 2);
  let start = 0;
  let end = n;
  let mid = getMid(start, end);

  while (start <= end) {
    mid = getMid(start, end);
    const square = mid * mid;

    if (square > n) {
      end = mid - 1;
    } else if (square < n) {
      start = mid + 1;
    } else {
      break;
    }
  }

  return mid;
}

// Вычислить факториал числа n

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function loopFact(n) {
  let res = 1;

  for (let i = n; i > 1; i--) {
    res *= i;
  }

  return res;
}

// Посчитать сумму цифр заданного числа
function getSumOfDigits(n) {
  let res = 0;
  let current = n;

  do {
    const remainder = current % 10;
    res += remainder;
    current = (current - remainder) / 10;
  } while (current > 0);

  return res;
}

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321

function getMirrorNumber(n) {
  let res = "";
  let current = n;

  do {
    let remainder = current % 10;
    res += remainder;
    current = (current - remainder) / 10;
  } while (current > 0);

  return res;
}

function getMirrorNumber2(n) {
  let res = 0;
  let current = n;

  do {
    let remainder = current % 10;
    current = (current - remainder) / 10;
    res *= 10;
    res += remainder;
  } while (current > 0);

  return res;
}

// Одномерные массивы
// Найти минимальный элемент массива

function findMinElementOfArray(arr) {
  if (!arr.length) {
    throw Error("Empty array");
  }

  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// Найти максимальный элемент массива
function findMaxElementOfArray(arr) {
  if (!arr.length) {
    throw Error("Empty array");
  }

  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Найти индекс минимального элемента массива

function findIndexOfMinElementOfArray(arr) {
  if (!arr.length) {
    throw Error("Empty array");
  }

  let minIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }

  return minIndex;
}

// Найти индекс максимального элемента массива
function findIndexOfMaxElementOfArray(arr) {
  if (!arr.length) {
    throw Error("Empty array");
  }

  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }

  return maxIndex;
}

// Посчитать сумму элементов массива с нечетными индексами

function getSumOfOddElements(arr) {
  if (!arr.length) {
    throw Error("Empty array");
  }
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// Сделать реверс массива (массив в обратном направлении)
function reverseArray(arr) {
  if (!arr.length) {
    throw Error("Empty array");
  }
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    let current = arr[i];
    newArr[arr.length - i - 1] = current;
  }

  return newArr;
}

// Посчитать количество нечетных элементов массива
function countOddElements(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      counter++;
    }
  }

  return counter;
}

// Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

function getChangedArray(arr) {
  const middle = arr.length / 2;
  const newArr = [];

  const start = middle % 1 ? middle + 0.5 : middle;
  for (let i = start; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }

  if (middle % 1) {
    newArr[newArr.length] = arr[middle - 0.5];
  }

  for (let i = 0; newArr.length < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }

  return newArr;
}

// Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// пузырьком (Bubble)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

// выбором (Select)
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minInd = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[minInd] > arr[j]) {
        minInd = j;
      }
    }

    if (minInd != i) {
      const tmp = arr[i];
      arr[i] = arr[minInd];
      arr[minInd] = tmp;
    }
  }

  return arr;
}

// вставками (Insert)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        // swap
        arr[j + 1] = arr[j];
        arr[j] = curr;
      }
    }
  }

  return arr;
}

// Функции

// Получить строковое название дня недели по номеру дня.

function getStringNameOfTheDay(n) {
  const weekDays = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const res = weekDays[n];

  if (!res) {
    throw Error("There is no such day!");
  }

  return res;
}

// Вводим число (0-999), получаем строку с прописью числа.

function getUnits(n) {
  return n % 10;
}

function getDozens(n) {
  return ((n - (n % 10)) / 10) % 10;
}

function getHundreds(n) {
  return ((n - (n % 100)) / 100) % 10;
}

const words = {
  teens: [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  units: [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ],
  dozens: [
    "",
    "ten",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ],
};

function getStringNameOfTheNumber(n) {
  if (n === 0) {
    return words.units[n];
  }

  const res = [];

  const units = getUnits(n);
  const dozens = getDozens(n);
  const hundreds = getHundreds(n);

  if (hundreds) {
    res.push(words.units[hundreds]);
    res.push("hundred");
  }

  if (dozens === 1 && units > 0) {
    res.push(words.teens[units]);
  } else if (dozens) {
    res.push(words.dozens[dozens]);
  }

  if (units && dozens !== 1) {
    res.push(words.units[units]);
  }

  return res.join(" ");
}

// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

function textToNumber99(text) {
  let res = 0;
  const parts = text.split(" ");

  for (let i = 0; i < parts.length; i++) {
    const unitIndex = words.units.indexOf(parts[i]);
    const teensIndex = words.teens.indexOf(parts[i]);
    const dozensIndex = words.dozens.indexOf(parts[i]);

    if (unitIndex > 0) {
      res += unitIndex;
    }

    if (teensIndex > 0) {
      res += teensIndex + 10;
    }

    if (dozensIndex > 0) {
      res += dozensIndex * 10;
    }
  }

  return res;
}

function textToNumber999(text) {
  let res = 0;
  const hundredParts = text.split("hundred");

  for (let i = 0; i < hundredParts.length; i++) {
    const part = hundredParts[i];
    if (part) {
      const m = 100 ** (hundredParts.length - i - 1);
      res += textToNumber99(hundredParts[i]) * m;
    }
  }

  return res;
}

// Найти расстояние между двумя точками в двумерном декартовом пространстве.

function getDistatnceBetweenTwoCoordinates(x1, y1, x2, y2) {
  const res = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return res;
}

function checkTickTacToeVictory(elements) {
  const checkWinner = (winner, value) => {
    return winner.every((id) => {
      const element = elements.find((el) => el.id === id);
      return element && element.value === value;
    });
  };

  const winners = [
    ["0-0", "0-1", "0-2"],
    ["1-0", "1-1", "1-2"],
    ["2-0", "2-1", "2-2"],
    ["0-0", "1-0", "2-0"],
    ["0-1", "1-1", "2-1"],
    ["0-2", "1-2", "2-2"],
    ["0-0", "1-1", "2-2"],
    ["0-2", "1-1", "2-0"],
  ];

  for (let i = 0; i < winners.length; i++) {
    const isWinner =
      checkWinner(winners[i], "nought") || checkWinner(winners[i], "cross");

    if (isWinner) {
      return true;
    }
  }

  return false;
}
