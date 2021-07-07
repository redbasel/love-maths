
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);

            }
            
        })

    }

    runGame("addition");


})

/**the main game loop 
 * thisis so cool
 */

function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
    


}

/**
 * checks answer agaisnt first item in array of calculatedcorrectaneer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! Yougot it right! :D");
    }else {
        alert(`Aww.... you answered %{userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);
    


}
/** gets the operande and operator directly frm th edom returns corretanswer */

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText);

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented oeprator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting`;

    }
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}