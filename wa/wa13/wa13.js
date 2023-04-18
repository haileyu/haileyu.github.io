function flipSquare(square) {
    if (Math.random() < 0.02) {
        const goofySound = new Audio("goofy.mp3");
        const volume = Math.min(outputInt / 100, 1); // Set volume based on outputInt
        goofySound.volume = volume;
        goofySound.play();
        badalert();
        reset();
        return;
    }
    const boomSound = new Audio("boom.mp3");
    const volume = Math.min(outputInt / 100, 1); // Set volume based on outputInt
    boomSound.volume = volume;
    boomSound.play();
    if (square.classList.contains("flip")) {
        square.classList.remove("flip");
        square.classList.add("flip-reverse");
        if (isNaN(parseInt(output.textContent))) {
            outputInt = 0;
        } else if (outputInt > 0) {
            outputInt -= 1;
        }
    } else {
        square.classList.remove("flip-reverse");
        square.classList.add("flip");
        if (isNaN(parseInt(output.textContent))) {
            outputInt = 1;
        } else if (outputInt < 100) {
            outputInt += 1;
        }
    }
    output.textContent = outputInt;
}

function badalert() {
    alert("you've flipped over an evil square! your volume is now reset - start over!");
}

function submit() {
    if (isNaN(parseInt(output.textContent))) {
        output.textContent = "0";
    }
    alert("your volume is: " + output.textContent);
}

function reset() {
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("flip");
        squares[i].classList.remove("flip-reverse");
    }
    outputInt = 0;
    output.textContent = outputInt;
}

const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);

const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);