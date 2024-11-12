const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware to parse incoming requests and handle CORS
app.use(express.json());
app.use(cors());

// POST route for sending emails
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate email field before proceeding
    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    console.log(`Sending email with the following details: From: ${email}, Name: ${name}, Message: ${message}`);

    // Configure Nodemailer transport (Update this with real credentials)
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or any other email service
        auth: {
            user: 'jayareena0104@gmail.com', // Your email address
            pass: 'kdxmonjzwihxczzx'  // Your email password or app-specific password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'jayareena0104@gmail.com', // Your email where you'll receive the contact messages
        subject: `Contact Form Message from ${name}`,
        text: `You have received a new message from your website's contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email: ', error);
            res.status(500).json({ message: 'Failed to send the message' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Message sent successfully!' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
