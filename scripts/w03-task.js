/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}
    document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let isMember = document.getElementById('member').checked;

    if (isMember) {
        subtotal *= 0.8;
    }

    let totalDue = subtotal.toFixed(2);
    document.getElementById('total').textContent = `$${totalDue}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray.join(', ');
/* Output Odds Only Array */
document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 === 1).join(', ');
/* Output Evens Only Array */
document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0).join(', ');
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').textContent = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2).join(', ');
/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);