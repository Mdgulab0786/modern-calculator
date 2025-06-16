let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldReset = false;

const display = document.getElementById('display');

function updateDisplay() {
  display.innerText = currentInput;
}

function appendNumber(number) {
  if (shouldReset) {
    currentInput = number;
    shouldReset = false;
  } else {
    if (number === '.' && currentInput.includes('.')) return;
    if (currentInput === '0' && number !== '.') {
      currentInput = number;
    } else {
      currentInput += number;
    }
  }
  updateDisplay();
}

function chooseOperator(op) {
  if (operator !== null) calculate();
  previousInput = currentInput;
  operator = op;
  shouldReset = true;
}

function calculate() {
  if (operator === null || shouldReset) return;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
    default: return;
  }

  currentInput = result.toString();
  operator = null;
  shouldReset = true;
  updateDisplay();
}

function clearAll() {
  currentInput = '0';
  previousInput = '';
  operator = null;
  shouldReset = false;
  updateDisplay();
}

function clearEntry() {
  currentInput = '0';
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}
