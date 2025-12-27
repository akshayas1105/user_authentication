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

// Phase 1: temporary registration placeholder
app.get('/register', (req, res) => {
    res.send("Registration page will be implemented soon");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
