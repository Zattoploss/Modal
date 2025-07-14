# Quiz Website 🎓

A modern, interactive quiz website with 32 questions that collects user information and emails the results. Built with HTML, CSS, JavaScript, and Node.js with Express backend.

## Features ✨

- **32 Diverse Questions**: Covering topics like geography, science, history, literature, and general knowledge
- **Interactive UI**: Modern, responsive design with smooth animations
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Score Calculation**: Real-time scoring with percentage calculation
- **Email Integration**: Automatically sends detailed results via email
- **User-Friendly**: Clean interface that works on all devices
- **Results Summary**: Comprehensive breakdown of all answers

## Screenshot Preview

The quiz features:
- Gradient background with modern card-based design
- Interactive question options with hover effects
- Progress bar showing completion status
- Score display with circular progress indicator
- Professional email templates for results

## Installation & Setup 🚀

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A Gmail account (for sending emails)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Email Configuration
1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit the `.env` file with your email settings:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
PORT=3000
```

### Step 3: Gmail Setup (Important!)
For Gmail users, you need to:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to your Google Account settings
   - Select "Security" → "2-Step Verification" → "App passwords"
   - Generate a password for "Mail"
   - Use this 16-character password in your `.env` file (not your regular password)

### Step 4: Start the Server
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

### Step 5: Access the Quiz
Open your browser and go to:
```
http://localhost:3000
```

## Usage 📝

1. **Take the Quiz**:
   - Answer all 32 questions by clicking on your chosen option
   - Use the "Next Question" button to proceed
   - Track your progress with the visual progress bar

2. **Submit Results**:
   - After completing all questions, view your score
   - Fill in your name and email address
   - Add optional comments
   - Submit to send results via email

3. **Email Results**:
   - You'll receive a confirmation email with your score
   - The site owner receives detailed results including all answers
   - Results include question-by-question breakdown

## Email Templates 📧

The system sends two types of emails:

### 1. To Site Owner (Your Email)
- Complete quiz results with detailed breakdown
- Participant information (name, email, comments)
- Question-by-question analysis showing correct/incorrect answers
- Professional HTML formatting with tables

### 2. To Participant (Confirmation)
- Thank you message with score summary
- Clean, branded email design
- Encouragement based on performance

## Customization 🎨

### Adding More Questions
Edit `quiz.js` and add questions to the `quizQuestions` array:
```javascript
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 1 // Index of correct answer (0-3)
}
```

### Styling Changes
Modify `quiz.css` to customize:
- Colors and gradients
- Fonts and typography
- Layout and spacing
- Animations and transitions

### Email Templates
Edit `server.js` to customize email content:
- HTML templates
- Styling
- Content structure
- Subject lines

## Project Structure 📁

```
quiz-website/
├── quiz.html          # Main quiz interface
├── quiz.css           # Stylesheet
├── quiz.js            # Quiz logic and questions
├── server.js          # Backend server
├── package.json       # Dependencies
├── .env.example       # Environment template
├── .env               # Your email config (create this)
└── README.md          # This file
```

## Troubleshooting 🔧

### Email Not Sending
1. Check your `.env` file configuration
2. Ensure you're using an app password (not regular password) for Gmail
3. Verify 2-factor authentication is enabled
4. Check server console for error messages

### Quiz Not Loading
1. Ensure all files are in the same directory
2. Check browser console for JavaScript errors
3. Verify server is running on http://localhost:3000

### Styling Issues
1. Clear browser cache
2. Check that `quiz.css` is in the same directory as `quiz.html`
3. Verify CSS file is being served correctly

## Technical Details 🔧

### Frontend
- **HTML5**: Semantic structure with accessible form elements
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript**: ES6+ features for quiz logic and API communication

### Backend
- **Node.js**: Server runtime
- **Express**: Web framework
- **Nodemailer**: Email functionality
- **Body-parser**: JSON parsing middleware

### Dependencies
- `express`: Web server framework
- `nodemailer`: Email sending functionality
- `body-parser`: Request body parsing
- `dotenv`: Environment variable management

## Security Notes 🔒

- Never commit your `.env` file to version control
- Use app passwords instead of regular passwords
- Store sensitive information in environment variables
- The server validates form inputs before processing

## Support 💬

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify your email configuration
3. Check server logs for detailed error messages
4. Ensure all dependencies are properly installed

## License 📄

This project is open source and available under the MIT License.

---

**Happy Quizzing! 🎉**