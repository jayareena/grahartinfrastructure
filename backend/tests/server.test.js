const request = require('supertest');
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Mock nodemailer
jest.mock('nodemailer');

// Middleware to parse incoming requests
app.use(express.json());
app.use(cors());

// Your server POST route
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    // Configure Nodemailer transport
    let transporter = nodemailer.createTransport({
        service: 'gmail', // or other service
        auth: {
            user: 'jayareena0104@gmail.com',
            pass: 'your-app-password',
        },
    });

    const mailOptions = {
        from: email,
        to: 'jayareena0104@gmail.com',
        subject: `Contact Form Message from ${name}`,
        text: `You have received a new message from your website's contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Failed to send the message' });
        }
        res.status(200).json({ message: 'Message sent successfully!' });
    });
});

describe('POST /send-email', () => {
    it('should return status 200 for valid email', async () => {
        // Mock successful sendMail response
        nodemailer.createTransport.mockReturnValue({
            sendMail: jest.fn().mockImplementation((mailOptions, callback) => {
                callback(null, { response: 'success' });
            }),
        });

        const response = await request(app)
            .post('/send-email')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                message: 'Hello!',
            });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Message sent successfully!');
    });

    it('should return status 400 for invalid email', async () => {
        const response = await request(app)
            .post('/send-email')
            .send({
                name: 'John Doe',
                email: 'invalid-email',
                message: 'Hello!',
            });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid email address');
    });

    it('should return status 500 if email fails to send', async () => {
        // Mock failure in sending email
        nodemailer.createTransport.mockReturnValue({
            sendMail: jest.fn().mockImplementation((mailOptions, callback) => {
                callback(new Error('Failed to send email'), null);
            }),
        });

        const response = await request(app)
            .post('/send-email')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                message: 'Hello!',
            });

        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Failed to send the message');
    });
});
