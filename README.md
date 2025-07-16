# Personality Assessment Website 🧠

A modern, interactive personality assessment website with 32 self-reflection questions using a 5-point Likert scale scoring system. The assessment collects user information and emails detailed results. Built with HTML, CSS, JavaScript, and Node.js with Express backend.

## Features ✨

- **32 Personality Questions**: Self-reflection statements covering various personality traits and behaviors
- **Likert Scale Scoring**: 5-point scale from "I completely agree" (5 points) to "I completely disagree" (1 point)
- **Interactive UI**: Modern, responsive design with smooth animations
- **Progress Tracking**: Visual progress bar showing assessment completion
- **Point-Based Scoring**: Real-time point calculation with personality insights
- **Email Integration**: Automatically sends detailed results via email
- **User-Friendly**: Clean interface that works on all devices
- **Detailed Analysis**: Comprehensive breakdown of all responses with points earned

## Screenshot Preview

The personality assessment features:
- Gradient background with modern card-based design
- Interactive Likert scale options with hover effects
- Progress bar showing completion status
- Point-based score display with circular progress indicator
- Professional email templates for personality results

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

### Step 5: Access the Assessment
Open your browser and go to:
```
http://localhost:3000
```

## Usage 📝

1. **Take the Personality Assessment**:
   - Answer all 32 self-reflection statements using the 5-point scale
   - Choose from "I completely agree" (5 pts) to "I completely disagree" (1 pt)
   - Use the "Next Question" button to proceed
   - Track your progress with the visual progress bar

2. **Submit Results**:
   - After completing all statements, view your total points
   - Fill in your name and email address
   - Add optional comments about the assessment
   - Submit to send results via email

3. **Email Results**:
   - You'll receive a confirmation email with your personality score
   - The site owner receives detailed results including all responses with points
   - Results include statement-by-statement breakdown with scoring legend

## Email Templates 📧

The system sends two types of emails:

### 1. To Site Owner (Your Email)
- Complete personality assessment results with detailed breakdown
- Participant information (name, email, comments)
- Statement-by-statement analysis showing responses and points earned
- Professional HTML formatting with color-coded tables
- Scoring legend explaining the 5-point scale

### 2. To Participant (Confirmation)
- Thank you message with personality score summary
- Clean, branded email design
- Insights about their assessment score and self-reflection

## Customization 🎨

### Adding More Questions
Edit `quiz.js` and add statements to the `quizQuestions` array:
```javascript
{
    question: "I enjoy working in team environments.",
    options: ["I completely agree", "I agree", "I partially agree", "I disagree", "I completely disagree"],
    points: [5, 4, 3, 2, 1]
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
personality-assessment/
├── quiz.html          # Main assessment interface
├── quiz.css           # Stylesheet
├── quiz.js            # Assessment logic and personality questions
├── server.js          # Backend server with email functionality
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

### Assessment Not Loading
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

**Happy Self-Reflecting! 🎉**