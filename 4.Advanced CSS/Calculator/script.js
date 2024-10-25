// Select screen and buttons
const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.button');

// Variables for holding calculations
let currentInput = '0';
let previousInput = '';
let operator = null;

// Update the screen with current input
function updateScreen() {
  screen.value = currentInput;
}

// Clear the screen
function clear() {
  currentInput = '0';
  previousInput = '';
  operator = null;
  updateScreen();
}

// Handle number inputs
function handleNumber(number) {
  if (currentInput === '0') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateScreen();
}

// Handle operator inputs
function handleOperator(op) {
  if (operator) {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '0';
}

// Calculate the result
function calculate() {
  let result;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateScreen();
}

// Handle decimal point
function handleDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
  }
  updateScreen();
}

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.textContent;

    // Handle each button type
    if (value >= '0' && value <= '9') {
      handleNumber(value);
    } else if (value === '.') {
      handleDecimal();
    } else if (value === 'C') {
      clear();
    } else if (value === '=') {
      calculate();
    } else {
      handleOperator(value);
    }
  });
});
