const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();

// Middleware setup
app.use(express.static(path.join(__dirname, 'public'))); // Serve CSS
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// MongoDB connection (local Compass)
mongoose.connect('mongodb://127.0.0.1:27017/userAuthDB')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error: " + err));

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" }
});

const User = mongoose.model("User", userSchema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'templates.html')); // Serve your HTML
});

// Serve registration page (Phase 2)
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'register.html'));
});

// Handle registration
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.send("Registration successful!");
    } catch (err) {
        res.send("Error: " + err.message);
    }
});

// Handle login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.send("User not found");
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.send("Invalid password");
        }

        // Save user session
        req.session.userId = user._id;
        req.session.username = user.username;

        
        res.redirect('/dashboard');

    } catch (err) {
        res.send("Error: " + err.message);
    }
});

// Serve login page (Phase 3 placeholder)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'login.html'));
});
app.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/');
    }
    res.send("Welcome to Dashboard");
    res.sendFile(path.join(__dirname, 'templates', 'dashboard.html'));
});
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
