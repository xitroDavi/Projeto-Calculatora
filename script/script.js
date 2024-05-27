function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function deleteLast() {
    let display = document.getElementById("display");
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

function appendCharacter(character) {
    let display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = "Erro";
    }
}
