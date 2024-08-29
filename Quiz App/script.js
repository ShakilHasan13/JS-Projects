const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "Who is the founder of Microsoft?",
        a: "Steve Jobs",
        b: "Bill Gates",
        c: "Elon Musk",
        d: "Mark Zuckerberg",
        correct: "b"
    },
    {
        question: "What is the square root of 64?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c"
    }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const quiz = document.getElementById("quiz");
    const currentQuizData = quizData[currentQuiz];

    quiz.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.d}
        </label>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer = null;

    answers.forEach((answer) => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });

    return selectedAnswer;
}

function submitQuiz() {
    const selectedAnswer = getSelected();

    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML = "";
            document.getElementById("submit").disabled = true;
            document.getElementById("results").innerText = `You scored ${score} out of ${quizData.length}`;
        }
    } else {
        alert("Please select an answer before submitting!");
    }
}

document.addEventListener("DOMContentLoaded", loadQuiz);
