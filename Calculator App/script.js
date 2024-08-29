function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendCharacter(character) {
    document.getElementById("display").value += character;
}

function deleteLastCharacter() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
