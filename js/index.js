//  random string qiymat  yaratish
function randStr(length = 8) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function innerHtml(ansId, resValue) {
  document.getElementById(ansId).innerHTML = resValue;
}

// X span bosilganda javobni yashirish funksiyasi

function close(closeBtn, hiddenAns) {
  document.getElementById(closeBtn).onclick = function () {
    document.getElementById(hiddenAns).innerHTML = " ";
  };
}

// html input tegidan qiymat olish
function getValue(valueId) {
  return document.getElementById(valueId).value;
}

// random massiv qiymat toldirish
function randNum(arrLenght = 15, maxValue = 1000) {
  let arr = [];
  Lenght = Math.trunc(Math.random() * arrLenght) + 1;
  for (let i = 0; i < Lenght; i++) {
    arr[i] = Math.trunc(Math.random() * maxValue);
  }
  return arr;
}
//

// random string massiv
function randStrArr(arrLenght = 5, maxValue = 10) {
  let arr = [];

  Lenght = Math.trunc(Math.random() * arrLenght) + 1;
  for (let i = 0; i < Lenght; i++) {
    arr[i] = randStr(maxValue);
  }
  return arr;
}

//

// random manfiy sonlik massiv qiymat toldirish
function randNgtNum(arrLenght = 15, maxValue = 1000) {
  let arr = [];

  Lenght = Math.trunc(Math.random() * arrLenght) + 1;

  for (let i = 0; i < Lenght; i++) {
    if (Math.random() > 0.6) {
      arr[i] = Math.trunc(Math.random() * maxValue) * -1;
    } else {
      arr[i] = Math.trunc(Math.random() * maxValue);
    }
  }

  return arr;
}

//
//
//
//

//                                   Uyga Vazifalar

function checkWords(arr) {
  let filteredWords = arr.filter(function (str) {
    return str.length >= 5;
  });

  let upperFirststr = filteredWords.map(function (str) {
    return str[0].toUpperCase() + str.slice(1);
  });

  return upperFirststr;
}

document.getElementById("first--btn").addEventListener("click", function () {
  let strLenght = Math.trunc(Math.random() * 12) + 1;
  let firstArr = randStrArr(8, strLenght);

  let res = "Massiv:<br>" + firstArr + "<br>" + checkWords(firstArr);

  innerHtml("first--answer", res);

  close("first--close", "first--answer");
});

let fnStudents = [
  "Avazbek",
  16,
  "Zuhriddin",
  18,
  "VAlijov",
  17,
  "Muslimbek",
  16,
  "Oyatillo",
  21,
];

function findStudent(arr) {
  let index = arr.findIndex(function (value) {
    return typeof value == "number" && value > 20;
  });

  if (index !== -1) {
    return arr[index - 1].toUpperCase();
  } else {
    return "Bunday talaba yo'q";
  }
}

document.getElementById("second--btn").addEventListener("click", function () {
  let res = "Oquvchilar<br>" + fnStudents + "<br>" + findStudent(fnStudents);

  innerHtml("second--answer", res);

  close("second--close", "second--answer");
});

function totalExpProducts(prices) {
  let expensiveProducts = prices.filter(function (price) {
    return price > 10000;
  });

  let totalSum = 0;
  totalSum = expensiveProducts.reduce(function (sum, price) {
    return sum + price;
  });

  return totalSum;
}

document.getElementById("third--btn").addEventListener("click", function () {
  let productPrices = randNum(15, 30000);
  let result =
    "Mahsulot narxlari:<br>" +
    productPrices +
    "<br>" +
    "10000 dan katta mahsulotlarning umumiy narxi:<br> " +
    totalExpProducts(productPrices);

  innerHtml("third--answer", result);

  close("third--close", "third--answer");
});

function checkNumbers(arr) {
  let allPst = arr.every(function (num) {
    return num > 0;
  });

  let numBigger = arr.some(function (num) {
    return num > 100;
  });
  res = "";
  if (allPst) {
    res += " <br>Barcha sonlar musbat <br>";
  } else {
    res += "<br>Musbat bo'lmagan sonlar bor <br>";
  }

  if (numBigger) {
    res += "Katta son bor";
  }
  return res;
}

document.getElementById("four--btn").addEventListener("click", function () {
  let randomNumbers = randNgtNum(10, 150);
  let result = "Sonlar:<br>" + randomNumbers + "<br>";

  result += checkNumbers(randomNumbers);

  innerHtml("four--answer", result);

  close("four--close", "four--answer");
});

function squareForEach(arr) {
  let squaredArr = [];
  arr.forEach(function (num) {
    squaredArr.push(num ** 2);
  });
  return squaredArr;
}

function printArrCon(arr) {
  arr.forEach(function (value) {
    console.log(value);
  });
}

document.getElementById("five--btn").addEventListener("click", function () {
  let randomNumbers = randNum(10, 20);

  let squaredNumbers = squareForEach(randomNumbers);

  printArrCon(squaredNumbers);

  let result =
    "Massiv:<br>" +
    randomNumbers +
    "<br>Kvadratga kotarilgan massiv:<br>" +
    squaredNumbers;
  innerHtml("five--answer", result);

  close("five--close", "five--answer");
});

function calculateSalaries(arr) {
  let filteredSalaries = arr.filter(function (salary) {
    return salary >= 2000;
  });

  let increasedSalaries = filteredSalaries.map(function (salary) {
    return salary * 1.1;
  });

  let totalSalaries = 0;
  totalSalaries = increasedSalaries.reduce(function (total, salary) {
    return total + salary;
  });

  return totalSalaries;
}

document.getElementById("six--btn").addEventListener("click", function () {
  let salaries = randNum(10, 5000);
  let totalSalaries = calculateSalaries(salaries);
  let result =
    "Massiv<br>" +
    salaries +
    " <br>Yangi umumiy maosh: " +
    totalSalaries.toFixed(2);
  innerHtml("six--answer", result);

  close("six--close", "six--answer");
});

let sevenStudentArr = [
  "Avazbek",
  20,
  75,
  "Zuxriddin",
  22,
  85,
  "Oyatillo",
  19,
  90,
  "Hayotbrk",
  21,
  65,
  "Muslimbek",
  23,
  81,
];

function processStudents(arr) {
  let firstHighScoreStudent = arr.find(function (value, index) {
    return index % 3 === 2 && value >= 80;
  });

  let firstStudentInfo = firstHighScoreStudent
    ? `Birinchi talaba yoshi: ${
        arr[arr.indexOf(firstHighScoreStudent) - 1]
      }, Ismi ${arr[arr.indexOf(firstHighScoreStudent) - 2]}`
    : "Kamida 80 ball olgan talabalar yo'q";

  let highScoreNames = [];
  for (let i = 0; i < arr.length; i += 3) {
    if (arr[i + 2] > 80) {
      highScoreNames.push(arr[i].toUpperCase());
    }
  }

  return {
    firstStudentInfo: firstStudentInfo,
    highScoreNames: highScoreNames,
  };
}

document.getElementById("seven--btn").addEventListener("click", function () {
  let result = processStudents(sevenStudentArr);
  let response =
    result.firstStudentInfo +
    "<br>80 dan yuqori ball olgan talabalar: " +
    result.highScoreNames.join(", ");
  innerHtml("seven--answer", response);

  close("seven--close", "seven--answer");
});

function convertToUpperCase(str) {
  return str.toUpperCase();
}

document.getElementById("eight--btn").addEventListener("click", function () {
  let inputStr = getValue("eight--input");
  if (inputStr == "") {
    inputStr = randStr();
  }
  let result = convertToUpperCase(inputStr);

  innerHtml("eight--answer", result);
  close("eight--close", "eight--answer");
});

function replaceJavaScript(str) {
  return str.replace(/JavaScript/g, "JS");
}

document.getElementById("nine--btn").addEventListener("click", function () {
  let inputStr = getValue("nine--input");
  if (inputStr == "") {
    inputStr = randStr();
  }
  let result = replaceJavaScript(inputStr);

  innerHtml("nine--answer", result);
  close("nine--close", "nine--answer");
});

function reverseStr(str) {
  return str.split(" ").reverse().join(" ");
}

document.getElementById("ten--btn").addEventListener("click", function () {
  let inputStr = getValue("ten--input");

  let result = "SAtr<br>" + inputStr + "<br>Natija:<br>" + reverseStr(inputStr);

  innerHtml("ten--answer", result);
  close("ten--close", "ten--answer");
});

function trimSpace(str) {
  return str.trim();
}

document.getElementById("eleven--btn").addEventListener("click", function () {
  let inputStr = getValue("eleven--input");

  if (inputStr.trim() == "") {
    inputStr = randStr();
  }

  let result =
    "Satr: <br>" + inputStr + "<br> Natija: <br>" + trimSpace(inputStr);

  innerHtml("eleven--answer", result);
  close("eleven--close", "eleven--answer");
});
