    let input = document.getElementById('input');
    let currentNum = '';

    function addNumber(number) {
        currentNum += number;
        input.value = currentNum;
    }

    function operation(operator) {
        currentNum += operator;
        input.value = currentNum;
    }

    function calculate() {
        try {
            currentNum = eval(currentNum);
            input.value = currentNum;
        } catch (error) {
            input.value = 'Error';
        }
    }

    function clearInput() {
        currentNum = '';
        input.value = '';
    }

