// Quiz Questions - 32 questions across various topics
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correct: 1
    },
    {
        question: "What is the smallest unit of matter?",
        options: ["Molecule", "Atom", "Electron", "Proton"],
        correct: 1
    },
    {
        question: "In what year did World War II end?",
        options: ["1944", "1945", "1946", "1947"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },
    {
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Asia", "North America", "Europe"],
        correct: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Steel", "Diamond", "Quartz", "Iron"],
        correct: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correct: 1
    },
    {
        question: "Which gas makes up most of Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 2
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Rupee"],
        correct: 2
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Leopard", "Tiger"],
        correct: 1
    },
    {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correct: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Osmium", "Oxygen", "Ozone", "Opium"],
        correct: 1
    },
    {
        question: "In which year was the first iPhone released?",
        options: ["2006", "2007", "2008", "2009"],
        correct: 1
    },
    {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
        correct: 1
    },
    {
        question: "How many bones are there in an adult human body?",
        options: ["196", "206", "216", "226"],
        correct: 1
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["Britain", "Spain", "France", "Italy"],
        correct: 2
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Pepper", "Onion"],
        correct: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correct: 2
    },
    {
        question: "What does 'WWW' stand for?",
        options: ["World Wide Web", "World War Won", "World Wrestling Warriors", "Wide World Web"],
        correct: 0
    },
    {
        question: "Which blood type is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        correct: 3
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2
    },
    {
        question: "How many sides does a hexagon have?",
        options: ["5", "6", "7", "8"],
        correct: 1
    },
    {
        question: "Which scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correct: 1
    },
    {
        question: "What is the largest country in the world by land area?",
        options: ["Canada", "China", "United States", "Russia"],
        correct: 3
    },
    {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correct: 3
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
        correct: 2
    }
];

// Quiz state
let currentQuestion = 0;
let score = 0;
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
    score = 0;
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
    nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';
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
    
    // Store answer
    userAnswers.push(selectedAnswer);
    
    // Check if answer is correct
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
        score++;
    }
    
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
    
    finalScore.textContent = score;
    
    // Generate score message
    const percentage = (score / quizQuestions.length) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = "🎉 Excellent! You're a quiz master!";
    } else if (percentage >= 80) {
        message = "👏 Great job! Very impressive score!";
    } else if (percentage >= 70) {
        message = "👍 Good work! Solid performance!";
    } else if (percentage >= 60) {
        message = "📚 Not bad! Room for improvement.";
    } else {
        message = "💪 Keep learning! Practice makes perfect.";
    }
    
    scoreMessage.textContent = message;
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
        const correct = question.correct;
        const isCorrect = userAnswer === correct;
        
        return {
            questionNumber: index + 1,
            question: question.question,
            userAnswer: question.options[userAnswer],
            correctAnswer: question.options[correct],
            isCorrect: isCorrect
        };
    });
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
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
                score: score,
                totalQuestions: quizQuestions.length,
                percentage: percentage,
                detailedResults: detailedResults
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