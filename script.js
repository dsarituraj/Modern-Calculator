let input = document.getElementById('input');
let currentNum = '';
let cancelTimeout;

function updateDisplay(value) {
    currentNum += value;
    input.value = currentNum;
}

function addNumber(number) {
    updateDisplay(number);
}

function operation(operator) {
    updateDisplay(operator);
}

function calculate() {
    try {
        currentNum = eval(currentNum).toString();
        input.value = currentNum;
    } catch (error) {
        input.value = 'Error';
        currentNum = ''; 
    }
}

function clearInput() {
    currentNum = '';
    input.value = '';
}

function removeLastCharacter() {
    currentNum = currentNum.slice(0, -1);
    input.value = currentNum;
}

function handleCancelMouseDown() {
    console.log('Mouse down on cancel button');
    cancelTimeout = setTimeout(clearInput, 1000); 
}

function handleCancelMouseUp() {
    clearTimeout(cancelTimeout);
    console.log('Mouse up on cancel button');
    removeLastCharacter(); 
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key)) {
        addNumber(key); 
    } else if (['+', '-', '*', '/'].includes(key)) {
        operation(key); 
    } else if (key === 'Enter') {
        calculate(); 
    } else if (key === 'Backspace') {
        removeLastCharacter(); 
    } else if (key.toLowerCase() === 'c') {
        clearInput();
    }
});

const cancelButton = document.querySelector('.clear');
cancelButton.addEventListener('mousedown', handleCancelMouseDown);
cancelButton.addEventListener('mouseup', handleCancelMouseUp);
cancelButton.addEventListener('mouseleave', () => clearTimeout(cancelTimeout)); // Clear timeout if mouse leaves button
