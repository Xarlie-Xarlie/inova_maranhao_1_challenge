function clearInputs(inputIds) {
  inputIds.forEach(function(id) {
    document.getElementById(id).value = "";
  });
}

function clearInnerText(inputIds) {
  inputIds.forEach(function(id) {
    document.getElementById(id).innerHTML = "";
  });
}

// Questão 1
function calculateAverage() {
  var grade1 = document.getElementById("q1_1").valueAsNumber;
  var grade2 = document.getElementById("q1_2").valueAsNumber;
  var grade3 = document.getElementById("q1_3").valueAsNumber;

  var average = (grade1 + grade2 + grade3) / 3;

  if (isNaN(average)) {
    document.getElementById("q1").innerHTML =
      "Verifique se suas notas estão corretas, e tente novamente!";
  } else {
    document.getElementById("q1").innerHTML = average.toFixed(2);
  }
}

// Questão 2
function findMinMax() {
  var stringNumbers = document.getElementById("q2").value;
  var intNumbers = stringNumbers.split(",").map(number => {
    return parseInt(number);
  })

  var min = Infinity;
  var max = 0;

  intNumbers.forEach(element => {
    if (element > max) {
      max = element
    } if (element < min) {
      min = element
    }
  });

  if (min !== Infinity && max !== 0) {
    document.getElementById("q2_min").innerHTML = min;
    document.getElementById("q2_max").innerHTML = max;
  }
}

//Questão 3
function sortItems() {
  var stringNumbers = document.getElementById("q3").value;

  var intNumbers =
    stringNumbers
      .split(",")
      .map(number => { return parseInt(number); })
      .filter(element => element === 0 || Number(element))
    ;

  const sortedNumbers = intNumbers.sort((current, next) => {
    return current - next;
  });

  document.getElementById("q3_result").innerHTML = sortedNumbers;
}

//Questão 4
function findPrimeNumbers() {
  var stringNumbers = document.getElementById("q4").value;

  var intNumbers =
    stringNumbers
      .split(",")
      .map(number => { return parseInt(number); })
      .filter(element => element === 0 || Number(element))
    ;

  const primeNumbers = intNumbers.filter(number => {
    isPrime = true;
    for (let comparator = 2; comparator < number; comparator++) {
      if (number % comparator === 0) {
        isPrime = false;
      }
    }

    return isPrime;
  });

  document.getElementById("q4_result").innerHTML = primeNumbers;
}

//Questão 5
function countWords() {
  var phrases = document.getElementById("q5").value;

  var numberOfWords = phrases.split(/\s+/);

  document.getElementById("q5_result").innerHTML = numberOfWords.length + " palavra(s)";
}

//Questão 6
function calculateFactorial() {
  var number = document.getElementById("q6").value;
  number = parseInt(number);

  var factorial = 1;

  for (let acc = 1; acc <= number; acc++) {
    factorial = factorial * acc;
  }

  document.getElementById("q6_result").innerHTML = factorial;
}

//Questão 7
function calculatePurchase() {
  const regex = /R\$ \d+,\d\d/g;
  const values = document.getElementById("q7").value;
  const prices = values.match(regex);

  const total = prices.map(price => {
    stringPrice = price.replace("R$", "").replace(",", ".");
    return parseFloat(stringPrice);
  }).reduce((acc, current) => acc + current, 0);

  document.getElementById("q7_result").innerHTML = `R$ ${total}`.replace(".", ",");
}

//Questão 8
function calculatePenalty() {
  const days = document.getElementById("q8").value;
  const penalty = parseInt(days) * 0.5;
  if (!isNaN(penalty)) {
    document.getElementById("q8_result").innerHTML = `R$ ${penalty}`.replace(".", ",");
  }
}

//Questão 9
function calculateDamage() {
  const playerLife = 100;
  const damagePerAttack = 20;
  const inputValue = document.getElementById("q9").value;
  const numberOfAttacks = parseInt(inputValue);

  const remainingHP = playerLife - numberOfAttacks * damagePerAttack;

  if (numberOfAttacks < 0) {
    document.getElementById("q9_result").innerHTML = 100;
  }
  else if (remainingHP < 0) {
    document.getElementById("q9_result").innerHTML = 0;
  } else {
    document.getElementById("q9_result").innerHTML = remainingHP;
  }
}
