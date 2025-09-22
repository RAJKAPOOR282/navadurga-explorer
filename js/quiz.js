const quizData = [
    {
        question: "Who is the first form of Navadurga?",
        options: ["Shailaputri", "Brahmacharini", "Chandraghanta", "Kushmanda"],
        answer: "Shailaputri"
    },
    {
        question: "Which form created the universe with her smile?",
        options: ["Kushmanda", "Mahagauri", "Kalaratri", "Siddhidatri"],
        answer: "Kushmanda"
    },
    {
        question: "Which form grants spiritual and material perfection?",
        options: ["Siddhidatri", "Katyayani", "Skandamata", "Chandraghanta"],
        answer: "Siddhidatri"
    }
    // Add more questions if needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').innerText = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(option) {
    if(option === quizData[currentQuestion].answer) score++;
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz').style.display = "none";
        document.getElementById('score').innerText = `Your Score: ${score} / ${quizData.length}`;
    }
}

document.getElementById('next-btn').addEventListener('click', loadQuestion);

loadQuestion();
