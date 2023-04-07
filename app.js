const buttons = document.querySelectorAll('button');
const screenDisplay = document.querySelector('.screen');
const SYMBOLS = ['-', '+', '*', '/'];
let calculation = [];
let accumulativeCalculation;
function calculate(button) {
  const value = button.textContent;
  if (value === 'CLEAR') {
    calculation = [];
    screenDisplay.textContent = '0';
    return;
  }

  if (value === '=') {
    screenDisplay.textContent =  math.evaluate(accumulativeCalculation) || '0';
    return;
  }
  if (SYMBOLS.includes(calculation.at(-1)) && SYMBOLS.includes(value)) {
    calculation.splice(-1);
  }
  calculation.push(value);
  accumulativeCalculation = calculation.join('');
  screenDisplay.textContent = accumulativeCalculation || '0';
}
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
