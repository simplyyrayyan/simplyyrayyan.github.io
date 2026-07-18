
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
    return;
  }
  // Appending the Button to the Display
  if (currentDisplayedText === "0") {
    displayElement.innerText = number;
  } else {
    displayElement.innerText += number;
  }

}

function setOperatorTo(operator) {

  const currentDisplayedText = displayElement.innerText;

  if (
    operator.includes('+') ||
    operator.includes('-') ||
    operator.includes('x') ||
    operator.includes('÷')
  ) {
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
}

function clearEverything() {

  displayElement.innerText = '0';
  sOTHasRun = false;
  answer = 0
}

function calculateEverything() {
  secondNumberInput = displayElement.innerText;

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
}
function changeH1() {
  let myH1 = document.getElementById('myH1');
  myH1.innerText = 'You Changed it to this'
}
