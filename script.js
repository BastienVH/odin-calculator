// variable that stores display DOM element
const display = document.querySelector('.display-text');

// variable that stores display value
let displayValue = "";

//function that adds on clicked buttons value to back displayValue
const numberBtns = document.querySelectorAll('.btnNum');
numberBtns.forEach(btn => btn.addEventListener('click', () => {
  displayValue += btn.textContent;
  updateDisplay();
}));

// function to update display after clicking a button
function updateDisplay () {
  display.textContent = displayValue;
}

/*
Getting the calculator to work:
- when an operator button is pressed:
  - store displayValue as number in variable firstValue
  - store which operator button was called
  - reset display
- when equals button is pressed:
  - store displayValue as number in secondValue
  - call operate with operator firstValue and secondValue
  - set displayValue to return value of operate
*/

// general calculation function
function operate(operator, a, b) {
  if (operator == 'add') return add(a, b);
  if (operator == 'subtract') return subtract(a, b);
  if (operator == 'multiply') return multiply(a, b);
  if (operator == 'divide') return divide(a, b);
}

// Calculations
function add(a,b) {
  return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}