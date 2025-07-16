// Personality Quiz Questions - 32 questions about self-knowledge and personality traits
const quizQuestions = [
    {
        question: "1.	Eu gosto de ajudar outras pessoas a crescerem e superarem desafios.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "2.	Compartilhar meus aprendizados e experiências me parece algo empolgante.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "3.	Sinto que minha história ou jornada pode inspirar outras pessoas.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "4.	A ideia de ver alguém aplicar meu conhecimento para alcançar resultados me motiva.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "5.	A mentoria parece alinhada com o propósito de vida que busco.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "6.	Eu tenho um conjunto de experiências ou conhecimentos que considero valiosos.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "7.	Sinto que já superei desafios importantes que me permitem orientar outras pessoas.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "8.	Estou aberta a aprender enquanto ensino, vendo a mentoria como uma via de mão dupla.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "9.	Sinto confiança para assumir o papel de guiar alguém, mesmo com possíveis imperfeições.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "10.	Já recebi feedbacks de que sou boa em ouvir e dar conselhos práticos.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "11.	Tenho energia e tempo disponíveis para dedicar à mentoria no meu momento atual.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "12.	Minhas prioridades atuais permitem que eu me comprometa com outra pessoa.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: '13.	Estou disposta a dizer "não" a algumas coisas para abrir espaço para a mentoria.',
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "14.	Ser mentora se encaixa com meus planos de curto ou médio prazo.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "15.	O impacto que desejo causar é maior do que o medo de começar.",
        options: [" Concordo totalmente", " Concordo", " Neutra", "Discordo", "Discordo totalmente"],
        points: [5, 4, 3, 2, 1]
    }
  ];

// Quiz state
let currentQuestion = 0;
let totalPoints = 0;
let userAnswers = [];
let selectedAnswer = null;

// DOM elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const finalScore = document.getElementById('final-score');
const scoreMessage = document.getElementById('score-message');
const resultsForm = document.getElementById('results-form');
const loading = document.getElementById('loading');
const successMessage = document.getElementById('success-message');

// Initialize quiz
function initializeQuiz() {
    currentQuestion = 0;
    totalPoints = 0;
    userAnswers = [];
    selectedAnswer = null;
    showQuestion();
    updateProgress();
}

// Display current question
function showQuestion() {
    const question = quizQuestions[currentQuestion];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index, button);
        optionsContainer.appendChild(button);
    });
    
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? 'Finish Assessment' : 'Next Question';
}

// Handle answer selection
function selectAnswer(answerIndex, buttonElement) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selection to clicked button
    buttonElement.classList.add('selected');
    selectedAnswer = answerIndex;
    nextBtn.disabled = false;
}

// Move to next question or finish quiz
function nextQuestion() {
    if (selectedAnswer === null) return;
    
    // Store answer and points
    const question = quizQuestions[currentQuestion];
    const pointsEarned = question.points[selectedAnswer];
    
    userAnswers.push({
        questionIndex: currentQuestion,
        selectedOption: selectedAnswer,
        selectedText: question.options[selectedAnswer],
        pointsEarned: pointsEarned
    });
    
    totalPoints += pointsEarned;
    
    // Move to next question or finish
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        selectedAnswer = null;
        showQuestion();
        updateProgress();
    } else {
        finishQuiz();
    }
}

// Update progress bar
function updateProgress() {
    const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressBar.style.width = progressPercentage + '%';
    progressText.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
}

// Finish quiz and show results
function finishQuiz() {
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    const maxPossiblePoints = quizQuestions.length * 5; // 32 questions × 5 points max
    const averageScore = (totalPoints / maxPossiblePoints * 100).toFixed(1);
    
    finalScore.textContent = totalPoints;
    
    // Generate personality message based on total points
    let message = '';
    
    if (totalPoints >= 45 ) { // 90% or higher (45-160 points)
        message = "Você está pronta para começar sua jornada como mentora! Sua motivação, preparação e momento de vida mostram que a mentoria é uma escolha alinhada com seus valores e desejos. Hora de planejar suas próximas ações!";
    } else if (totalPoints >= 30) { // (30-44 points)
        message = "Você tem interesse e algum preparo para a mentoria, mas pode haver bloqueios ou desafios a serem trabalhados antes de se comprometer. Reflita sobre suas prioridades e desenvolva mais clareza sobre como começar.";
    } else if (totalPoints >= 15) { // (15-29 points)
        message = "Pode não ser o momento certo para você se tornar uma mentora. Avalie se há outros compromissos ou questões pessoais que precisam de atenção antes de investir energia nesse papel.";
    } else { // (-15 de points)
        message = "Talvez a mentoria não seja o caminho mais adequado para você neste momento, e tudo bem! Considere explorar outras formas de contribuir com o mundo ou focar no seu próprio desenvolvimento.";
    }
    
}

// Handle form submission
resultsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(resultsForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const comments = formData.get('comments');
    
    // Show loading
    resultsContainer.classList.add('hidden');
    loading.classList.remove('hidden');
    
    // Prepare detailed results
    const detailedResults = quizQuestions.map((question, index) => {
        const userAnswer = userAnswers[index];
        
        return {
            questionNumber: index + 1,
            question: question.question,
            selectedAnswer: userAnswer.selectedText,
            pointsEarned: userAnswer.pointsEarned,
            maxPoints: 5
        };
    });
    
    const maxPossiblePoints = quizQuestions.length * 5;
    const percentage = ((totalPoints / maxPossiblePoints) * 100).toFixed(1);
    
    try {
        const response = await fetch('/submit-results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                comments: comments,
                totalPoints: totalPoints,
                maxPossiblePoints: maxPossiblePoints,
                totalQuestions: quizQuestions.length,
                percentage: percentage,
                detailedResults: detailedResults,
                assessmentType: 'personality'
            })
        });
        
        if (response.ok) {
            loading.classList.add('hidden');
            successMessage.classList.remove('hidden');
        } else {
            throw new Error('Failed to submit results');
        }
    } catch (error) {
        loading.classList.add('hidden');
        alert('Sorry, there was an error submitting your results. Please try again.');
        resultsContainer.classList.remove('hidden');
    }
});

// Restart quiz
function restartQuiz() {
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    successMessage.classList.add('hidden');
    loading.classList.add('hidden');
    
    // Reset form
    resultsForm.reset();
    
    // Reinitialize quiz
    initializeQuiz();
}

// Start the quiz when page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);