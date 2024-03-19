const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const result = document.getElementById('result');

let firstOperand = '';
let secondOperand = '';
let currentOperator = '';
let shouldResetScreen = false;

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (shouldResetScreen) {
            result.value = '';
            shouldResetScreen = false;
        }
        result.value += btn.value;
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (currentOperator) {
            calculate();
        }
        firstOperand = result.value;
        currentOperator = btn.value;
        shouldResetScreen = true;
    });
});

equalsBtn.addEventListener('click', () => {
    if (!firstOperand || !currentOperator || !secondOperand) {
        return;
    }
    calculate();
});

clearBtn.addEventListener('click', () => {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    result.value = '';
});

function calculate() {
    secondOperand = result.value;
    let calculation;
    const prevOperand = parseFloat(firstOperand);
    const currentOperand = parseFloat(secondOperand);
    switch (currentOperator) {
        case '+':
            calculation = prevOperand + currentOperand;
            break;
        case '-':
            calculation = prevOperand - currentOperand;
            break;
        case '*':
            calculation = prevOperand * currentOperand;
            break;
        case '/':
            if (currentOperand === 0) {
                alert('Cannot divide by zero');
                return;
            }
            calculation = prevOperand / currentOperand;
            break;
        default:
            return;
    }
    result.value = calculation;
}