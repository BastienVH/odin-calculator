// variable that stores display DOM element
const display = document.querySelector('.display-text');

// variable that stores display value
let displayValue = "0";
let firstValue;
let secondValue;
let operator;

//function that adds on clicked buttons value to back displayValue
const numberBtns = document.querySelectorAll('.btnNum');
numberBtns.forEach(btn => btn.addEventListener('click', () => {
  if (displayValue === "0") {displayValue = ""};
  if (displayValue.length < 16) {
    displayValue += btn.textContent;
  }
  updateDisplay();
}));

//function that adds on clicked operatorButtons value to variable and stores operator
const operatorBtns = document.querySelectorAll(".btnOperate");
operatorBtns.forEach(btn => btn.addEventListener('click', (event) => {
  // if firstValue has a value, we should first operate on that one to string operations and show the result
  if (firstValue) {
    calculate();
  }
  //store entered value in variable
  firstValue = parseFloat(displayValue);
  //  - store which operator button was called
  operator = event.target.id;
  // reset displayValue so new numbers don't get tacked onto what is already on screen
  displayValue = "";
}));

// clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  clearData();
  clearDisplay();
});


const calcBtn = document.getElementById('calculate');
calcBtn.addEventListener('click', calculate);

function checkDivideByZero() {
  if (operator === "divide" && secondValue === 0) {
    return true;
  } else {
    return false;
  }
}

// function to limit amount of decimals in display
function removeDecimals() {
  // check if displayValue has a decimal point and is longer than 16 digits
  if (displayValue.toString().length > 16 && displayValue.toString().includes('.')) {
    displayValue = parseFloat(displayValue.toString().substring(0,16));
  }
}

// function to update display after clicking a button
function updateDisplay () {
  removeDecimals();
  display.textContent = displayValue;
}

// function to clear all data
function clearData() {
  operator = "";
  firstValue = 0;
  secondValue = 0;
}

// function to clear the display
function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

// calculate
function calculate() {
  // exit if not all values have been entered before pressing equals
  if (!operator) return;
  //  - store displayValue as number in secondValue
  secondValue = parseFloat(displayValue);
  if (checkDivideByZero()) {
    displayValue = "Can't divide by zero!";
  } else {
    displayValue = operate(operator, firstValue, secondValue);
  }
  updateDisplay();
  clearData();
}

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