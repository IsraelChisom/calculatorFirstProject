let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Use 'eval' for simplicity, but it's not recommended for security in real-world scenarios
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}