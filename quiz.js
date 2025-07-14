// Personality Quiz Questions - 32 questions about self-knowledge and personality traits
const quizQuestions = [
    {
        question: "I enjoy being the center of attention in social gatherings.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I prefer to plan things well in advance rather than be spontaneous.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I find it easy to empathize with other people's emotions.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I often worry about things that might go wrong in the future.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I am comfortable taking risks when the potential reward is high.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I prefer working alone rather than in a team.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I am very organized and like to keep things tidy.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I often think about philosophical and abstract concepts.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I feel energized after spending time with a large group of people.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I tend to be very critical of my own performance.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I enjoy trying new foods and experiences.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I find it difficult to say 'no' when people ask for help.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I prefer to make decisions based on logic rather than emotions.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I often start projects but have trouble finishing them.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I am comfortable expressing my opinions even when others disagree.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I need quiet time alone to recharge after social interactions.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I am very detail-oriented and notice small things others might miss.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I often put others' needs before my own.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I enjoy competitive situations and trying to win.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I find it easy to adapt when plans change unexpectedly.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I often think about past mistakes and how I could have done better.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I enjoy learning new skills and knowledge regularly.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I tend to be optimistic about future outcomes.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I prefer to have a few close friends rather than many acquaintances.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I am comfortable being a leader and making important decisions.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I often get lost in my thoughts and daydreams.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I find it important to maintain harmony in my relationships.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I enjoy discussing ideas and theories more than practical matters.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I am usually the first to try new technology or trends.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I feel stressed when my environment is disorganized or messy.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I often seek approval and validation from others.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
        points: [5, 4, 3, 2, 1]
    },
    {
        question: "I prefer to take time to think things through before making decisions.",
        options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
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
    
    if (totalPoints >= 144) { // 90% or higher (144-160 points)
        message = "� Highly Self-Aware: You demonstrate exceptional self-knowledge and confidence in your responses.";
    } else if (totalPoints >= 128) { // 80-89% (128-143 points)
        message = "✨ Well-Balanced: You show good self-awareness with a balanced perspective on your traits.";
    } else if (totalPoints >= 112) { // 70-79% (112-127 points)
        message = "🎯 Moderate Self-Reflection: You have decent self-knowledge with room for deeper introspection.";
    } else if (totalPoints >= 96) { // 60-69% (96-111 points)
        message = "� Developing Awareness: Your responses suggest you're still exploring your personality traits.";
    } else { // Below 60% (32-95 points)
        message = "🌱 Self-Discovery Journey: This assessment suggests there's much to explore about yourself.";
    }
    
    scoreMessage.innerHTML = `${message}<br><small>You scored ${averageScore}% (${totalPoints} out of ${maxPossiblePoints} possible points)</small>`;
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