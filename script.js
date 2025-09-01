const display = document.getElementById("display");

function appendSymbol(symbol) {
    display.value += symbol;
}

function allClear() {
    display.value = "";
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(display.value);
        if (!isNaN(result)) {
            display.value = result;
        } else {
            display.value = "Error";
        }
    } catch {
        display.value = "Error";
    }
}