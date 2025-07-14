const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Serve the quiz page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'quiz.html'));
});

// Email configuration
const createTransporter = () => {
    // You can use different email services here
    // This example uses Gmail, but you can modify it for other services
    return nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER || 'your-email@gmail.com',
            pass: process.env.EMAIL_PASS || 'your-app-password'
        }
    });
};

// Handle quiz results submission
app.post('/submit-results', async (req, res) => {
    try {
        const { name, email, comments, score, totalQuestions, percentage, detailedResults } = req.body;

        // Create transporter
        const transporter = createTransporter();

        // Generate detailed results HTML
        let detailedResultsHTML = `
            <div style="margin: 20px 0;">
                <h3>Detailed Results:</h3>
                <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                    <thead>
                        <tr style="background-color: #f0f0f0;">
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Question #</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Question</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">User Answer</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Correct Answer</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Result</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        detailedResults.forEach(result => {
            const resultIcon = result.isCorrect ? '✅' : '❌';
            const rowColor = result.isCorrect ? '#e8f5e8' : '#ffe8e8';
            
            detailedResultsHTML += `
                <tr style="background-color: ${rowColor};">
                    <td style="border: 1px solid #ddd; padding: 8px;">${result.questionNumber}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${result.question}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${result.userAnswer}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${result.correctAnswer}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${resultIcon}</td>
                </tr>
            `;
        });

        detailedResultsHTML += `
                    </tbody>
                </table>
            </div>
        `;

        // Email content
        const emailHTML = `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                        .content { padding: 20px; background: #f9f9f9; }
                        .score-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; border-left: 5px solid #4CAF50; }
                        .info-box { background: white; padding: 15px; border-radius: 8px; margin: 10px 0; }
                        .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>🎓 Quiz Results Submission</h1>
                        <p>New quiz results have been submitted!</p>
                    </div>
                    
                    <div class="content">
                        <div class="score-box">
                            <h2>📊 Final Score</h2>
                            <h1 style="color: #4CAF50; margin: 10px 0;">${score} / ${totalQuestions}</h1>
                            <p style="font-size: 1.2em; color: #666;">${percentage}% Correct</p>
                        </div>
                        
                        <div class="info-box">
                            <h3>👤 Participant Information</h3>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
                            ${comments ? `<p><strong>Comments:</strong> ${comments}</p>` : ''}
                        </div>
                        
                        ${detailedResultsHTML}
                    </div>
                    
                    <div class="footer">
                        <p>This email was automatically generated by the Quiz Website System</p>
                    </div>
                </body>
            </html>
        `;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER || 'quiz-website@gmail.com',
            to: process.env.RECIPIENT_EMAIL || 'your-email@gmail.com', // Your email where you want to receive results
            subject: `Quiz Results: ${name} scored ${score}/${totalQuestions} (${percentage}%)`,
            html: emailHTML
        };

        // Send confirmation email to participant (optional)
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER || 'quiz-website@gmail.com',
            to: email,
            subject: 'Quiz Results Confirmation',
            html: `
                <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                            .content { padding: 20px; background: #f9f9f9; }
                            .score-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; border-left: 5px solid #4CAF50; }
                        </style>
                    </head>
                    <body>
                        <div class="header">
                            <h1>🎉 Thank You for Taking Our Quiz!</h1>
                        </div>
                        
                        <div class="content">
                            <p>Hi ${name},</p>
                            
                            <p>Thank you for completing our quiz! Here's a summary of your results:</p>
                            
                            <div class="score-box">
                                <h2>Your Score</h2>
                                <h1 style="color: #4CAF50; margin: 10px 0;">${score} / ${totalQuestions}</h1>
                                <p style="font-size: 1.2em; color: #666;">${percentage}% Correct</p>
                            </div>
                            
                            <p>Your results have been recorded. Thank you for your participation!</p>
                            
                            <p>Best regards,<br>The Quiz Team</p>
                        </div>
                    </body>
                </html>
            `
        };

        // Send emails
        try {
            // Send results to your email
            await transporter.sendMail(mailOptions);
            
            // Send confirmation to participant (optional)
            await transporter.sendMail(confirmationMailOptions);
            
            console.log(`Quiz results email sent successfully for ${name} (${email})`);
            res.status(200).json({ 
                success: true, 
                message: 'Results submitted successfully' 
            });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to send email notification' 
            });
        }

    } catch (error) {
        console.error('Error processing results:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Quiz website server running on http://localhost:${PORT}`);
    console.log(`📧 Email configured for: ${process.env.EMAIL_USER || 'your-email@gmail.com'}`);
    console.log(`📨 Results will be sent to: ${process.env.RECIPIENT_EMAIL || 'your-email@gmail.com'}`);
    console.log('\n⚠️  Remember to configure your email settings in the .env file!');
});