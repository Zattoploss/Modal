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

// Handle personality assessment results submission
app.post('/submit-results', async (req, res) => {
    try {
        const { 
            name, 
            email, 
            comments, 
            totalPoints, 
            maxPossiblePoints, 
            totalQuestions, 
            percentage, 
            detailedResults,
            assessmentType 
        } = req.body;

        // Create transporter
        const transporter = createTransporter();

        // Generate detailed results HTML
        let detailedResultsHTML = `
            <div style="margin: 20px 0;">
                <h3>Detailed Assessment Results:</h3>
                <table style="border-collapse: collapse; width: 100%; margin: 10px 0;">
                    <thead>
                        <tr style="background-color: #f0f0f0;">
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Question #</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Statement</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Response</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: center;">Points Earned</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        detailedResults.forEach(result => {
            // Color coding based on points earned
            let rowColor = '#ffffff';
            if (result.pointsEarned >= 4) {
                rowColor = '#e8f5e8'; // Light green for high agreement
            } else if (result.pointsEarned >= 3) {
                rowColor = '#f0f8ff'; // Light blue for neutral
            } else {
                rowColor = '#ffe8e8'; // Light red for disagreement
            }
            
            detailedResultsHTML += `
                <tr style="background-color: ${rowColor};">
                    <td style="border: 1px solid #ddd; padding: 8px;">${result.questionNumber}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${result.question}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>${result.selectedAnswer}</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${result.pointsEarned}/${result.maxPoints}</td>
                </tr>
            `;
        });

        detailedResultsHTML += `
                    </tbody>
                </table>
                <div style="margin-top: 15px; padding: 10px; background-color: #f9f9f9; border-radius: 5px;">
                    <h4>Scoring Legend:</h4>
                    <p><span style="color: #4CAF50;">●</span> <strong>5 points:</strong> I completely agree</p>
                    <p><span style="color: #8BC34A;">●</span> <strong>4 points:</strong> I agree</p>
                    <p><span style="color: #2196F3;">●</span> <strong>3 points:</strong> I partially agree</p>
                    <p><span style="color: #FF9800;">●</span> <strong>2 points:</strong> I disagree</p>
                    <p><span style="color: #F44336;">●</span> <strong>1 point:</strong> I completely disagree</p>
                </div>
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
                        .score-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; border-left: 5px solid #667eea; }
                        .info-box { background: white; padding: 15px; border-radius: 8px; margin: 10px 0; }
                        .footer { background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>🧠 Personality Assessment Results</h1>
                        <p>New personality assessment has been completed!</p>
                    </div>
                    
                    <div class="content">
                        <div class="score-box">
                            <h2>📊 Assessment Score</h2>
                            <h1 style="color: #667eea; margin: 10px 0;">${totalPoints} / ${maxPossiblePoints} points</h1>
                            <p style="font-size: 1.2em; color: #666;">${percentage}% Score</p>
                        </div>
                        
                        <div class="info-box">
                            <h3>👤 Participant Information</h3>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Assessment Date:</strong> ${new Date().toLocaleString()}</p>
                            <p><strong>Assessment Type:</strong> Personality Self-Assessment</p>
                            ${comments ? `<p><strong>Comments:</strong> ${comments}</p>` : ''}
                        </div>
                        
                        ${detailedResultsHTML}
                        
                        <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
                            <h3>📈 Score Interpretation:</h3>
                            <p><strong>Total Points:</strong> ${totalPoints} out of ${maxPossiblePoints} possible points</p>
                            <p><strong>Average Response:</strong> ${(totalPoints / totalQuestions).toFixed(1)} points per question</p>
                            <p><em>Note: This assessment measures self-reported personality traits and preferences. Higher scores indicate stronger agreement with the statements.</em></p>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>This email was automatically generated by the Personality Assessment System</p>
                    </div>
                </body>
            </html>
        `;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER || 'personality-assessment@gmail.com',
            to: process.env.RECIPIENT_EMAIL || 'your-email@gmail.com', // Your email where you want to receive results
            subject: `Personality Assessment: ${name} scored ${totalPoints}/${maxPossiblePoints} points (${percentage}%)`,
            html: emailHTML
        };

        // Send confirmation email to participant (optional)
        const confirmationMailOptions = {
            from: process.env.EMAIL_USER || 'personality-assessment@gmail.com',
            to: email,
            subject: 'Personality Assessment Results Confirmation',
            html: `
                <html>
                    <head>
                        <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                            .content { padding: 20px; background: #f9f9f9; }
                            .score-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; border-left: 5px solid #667eea; }
                        </style>
                    </head>
                    <body>
                        <div class="header">
                            <h1>🎉 Thank You for Taking Our Personality Assessment!</h1>
                        </div>
                        
                        <div class="content">
                            <p>Hi ${name},</p>
                            
                            <p>Thank you for completing our personality assessment! Here's a summary of your results:</p>
                            
                            <div class="score-box">
                                <h2>Your Assessment Score</h2>
                                <h1 style="color: #667eea; margin: 10px 0;">${totalPoints} / ${maxPossiblePoints} points</h1>
                                <p style="font-size: 1.2em; color: #666;">${percentage}% Score</p>
                            </div>
                            
                            <p>Your responses have been recorded and provide insights into your personality traits and preferences. This assessment is based on your self-reflection and personal insights.</p>
                            
                            <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
                                <h3>🔍 What This Means:</h3>
                                <p>Your score of ${totalPoints} points reflects how you perceive yourself across various personality dimensions. This self-assessment can provide valuable insights for personal development and self-understanding.</p>
                            </div>
                            
                            <p>Thank you for taking the time to reflect on your personality traits!</p>
                            
                            <p>Best regards,<br>The Personality Assessment Team</p>
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
            
            console.log(`Personality assessment results email sent successfully for ${name} (${email}) - Score: ${totalPoints}/${maxPossiblePoints}`);
            res.status(200).json({ 
                success: true, 
                message: 'Assessment results submitted successfully' 
            });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            res.status(500).json({ 
                success: false, 
                message: 'Failed to send email notification' 
            });
        }

    } catch (error) {
        console.error('Error processing assessment results:', error);
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
    console.log(`🚀 Personality Assessment website running on http://localhost:${PORT}`);
    console.log(`📧 Email configured for: ${process.env.EMAIL_USER || 'your-email@gmail.com'}`);
    console.log(`📨 Results will be sent to: ${process.env.RECIPIENT_EMAIL || 'your-email@gmail.com'}`);
    console.log('\n⚠️  Remember to configure your email settings in the .env file!');
});