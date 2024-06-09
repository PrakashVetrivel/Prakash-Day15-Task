document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.keys button');
    let memory = 0;

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.getAttribute('data-key');
            handleKeyPress(keyValue);
        });
    });

    document.addEventListener('keydown', (event) => {
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%', 'Enter', 'Backspace', 'Delete'];
        if (!allowedKeys.includes(event.key)) {
            alert('Only numbers are allowed');
            event.preventDefault();
        } else {
            handleKeyPress(event.key === 'Enter' ? '=' : event.key);
        }
    });

    function handleKeyPress(key) {
        if (key === 'C') {
            display.value = '';
        } else if (key === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (key === 'M+') {
            memory += parseFloat(display.value) || 0;
            display.value = '';
        } else if (key === 'M-') {
            memory -= parseFloat(display.value) || 0;
            display.value = '';
        } else if (key === 'MC') {
            memory = 0;
        } else {
            display.value += key;
        }
    }
});
