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
  var intNumbers = stringNumbers.split(",").map(number => {
    return parseInt(number);
  });

  const sortedNumbers = intNumbers.sort((current, next) => {
    return current - next;
  });

  document.getElementById("q3_result").innerHTML = sortedNumbers;
}
