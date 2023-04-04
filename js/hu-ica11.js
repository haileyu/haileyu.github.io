const triviaButton = document.querySelector('#js-new-trivia');
triviaButton.addEventListener('click', getTrivia);

const ansButton = document.querySelector('#js-answer');
ansButton.addEventListener('click', getAnswer);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getTrivia() {
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayTrivia(json.question);
        displayAnswer(json.answer);
    }
    catch(err){
        alert("Failed to fetch trivia :(");
    }
}

async function getAnswer(){
    try{
        const response = await fetch(endpoint);
        const json = await response.json();
        displayAnswer(json.answer);
    }
    catch(err){
        alert("Failed to fetch answer :(");
    }
}

function displayTrivia(x) {
    const triviaBox = document.querySelector('#js-trivia-text');
    triviaBox.textContent = x;
}

function displayAnswer(x){
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = x;
}