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
  displayValue += btn.textContent;
  updateDisplay();
}));

//function that adds on clicked operatorButtons value to variable and stores operator
const operatorBtns = document.querySelectorAll(".btnOperate");
operatorBtns.forEach(btn => btn.addEventListener('click', (event) => {
  //store entered value in variable
  firstValue = parseFloat(displayValue);
  //  - store which operator button was called
  operator = event.target.id;
  // empty out the display
  displayValue = "";
  updateDisplay();
}));

const calcBtn = document.getElementById('calculate');
calcBtn.addEventListener('click', () => {
  //  - store displayValue as number in secondValue
  secondValue = parseFloat(displayValue);
  //  - call operate with operator firstValue and secondValue
  displayValue = operate(operator, firstValue, secondValue);
  updateDisplay();
});

// function to update display after clicking a button
function updateDisplay () {
  display.textContent = displayValue;
}

// function to clear the display
function clearDisplay() {
  displayValue = "0";
  updateDisplay();
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