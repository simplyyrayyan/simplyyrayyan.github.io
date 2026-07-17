
// JavaScript
// CONSTANTS
const displayElement = document.getElementById('display');
let firstNumberInput;
let secondNumberInput;
console.log(firstNumberInput);
let operatorUsed;
let sOTHasRun = false;
let answer;

function appendToDisplay(number) {
  console.log("Function appendToDisplay Start");
  if (sOTHasRun) {

  }
  const currentDisplayedText = displayElement.innerText;



  // Checking For a Decimal as the first number or more than 1
  if (
    (number === '.' && currentDisplayedText === '0' ||
     number === '.' && currentDisplayedText.includes('.'))
  ) {
    return;
  }

  // Limit display length to 14 numbers
  if (currentDisplayedText.length >=14) {
    console.log("Too Many Numbers")
    return;
  }
  // Appending the Button to the Display
  if (currentDisplayedText === "0") {
    displayElement.innerText = number;
  } else {
    displayElement.innerText += number;
  }

  console.log('Function appendToDisplay End');
}

function setOperatorTo(operator) {
  console.log('Function setOperatorTo Start');

  const currentDisplayedText = displayElement.innerText;

  if (
    operator.includes('+') ||
    operator.includes('-') ||
    operator.includes('x') ||
    operator.includes('÷')
  ) {
    console.log(operator);
    operatorUsed = operator;
  }

  if (
    (operator === '+' && currentDisplayedText.includes('+')) ||
    currentDisplayedText.includes('-') ||
    currentDisplayedText.includes('x') ||
    currentDisplayedText.includes('÷') ||
    (operator === '+' && currentDisplayedText === '0') ||
    (operator === '-' && currentDisplayedText.includes('+')) ||
    currentDisplayedText.includes('-') ||
    currentDisplayedText.includes('x') ||
    currentDisplayedText.includes('÷') ||
    (operator === '-' && currentDisplayedText === '0') ||
    (operator === 'x' && currentDisplayedText.includes('+')) ||
    currentDisplayedText.includes('-') ||
    currentDisplayedText.includes('x') ||
    currentDisplayedText.includes('÷') ||
    (operator === 'x' && currentDisplayedText === '0') ||
    (operator === '÷' && currentDisplayedText.includes('+')) ||
    currentDisplayedText.includes('-') ||
    currentDisplayedText.includes('x') ||
    currentDisplayedText.includes('÷') ||
    (operator === '÷' && currentDisplayedText === '0')
  ) {
    return;
  }

  firstNumberInput = currentDisplayedText;
  console.log(firstNumberInput);
  displayElement.innerText = "0"
  sOTHasRun = true;

  console.log('Function setOperatorTo End');
}

function clearEverything() {
  console.log('Function clearEverything Start');

  displayElement.innerText = '0';
  sOTHasRun = false;
  answer = 0

  console.log('Function clearEverything End');
}

function calculateEverything() {
  console.log('Function addEverything Start');
  console.log(displayElement.innerText);
  secondNumberInput = displayElement.innerText;

  // Identify the Operator.
  // Then cleanse the displayElement.innerText tags with .replace().
  // Then immediately change the firstNumberInput to the first set of numbers.
  firstNumberInput = Number(firstNumberInput);
  secondNumberInput = Number(secondNumberInput);
  if (operatorUsed === '+') {
    answer = firstNumberInput + secondNumberInput;
    displayElement.innerText = answer;
  } else if (operatorUsed === '-') {
    answer = firstNumberInput - secondNumberInput;
    displayElement.innerText = answer;
  } else if (operatorUsed === 'x') {
    answer = firstNumberInput * secondNumberInput;
    displayElement.innerText = answer;
  } else if (operatorUsed === '÷') {
    answer = firstNumberInput / secondNumberInput;
    displayElement.innerText = answer;
  }

  console.log(firstNumberInput + secondNumberInput);

  console.log('Function addEverything End');
}
// .idea .preittierrc node_modules package.JSON package-lock.json 