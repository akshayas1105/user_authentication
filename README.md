# User Authentication System
![Session Auth](https://img.shields.io/badge/Auth-Session--Based-blue?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black?style=for-the-badge&logo=express)
![HTML5](https://img.shields.io/badge/HTML5-Markup-E34F26?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3)


A simple and scalable user authentication system built with Node.js and Express, demonstrating session-based authentication, protected routes, and clean project structure.

---

# Overview

This project implements a basic authentication workflow including user registration, login, session handling, and protected dashboard access.It is designed to help understand how authentication systems are structured in real-world backend applications.

---

## 🌟 Features

- **User Registration** 
- **User Login**
- **Session-Based Authentication**
- **Protected Dashboard Route**
- **Middleware-Based Route Protection**
- **Clean and Maintainable Folder Structure**
- **Improved Frontend UI**
  
---

📁 Project Structure
user-auth-system/<br>
├── app.js               # Main application entry point<br>
├── package.json         # Project dependencies and scripts<br>
├── README.md            # Project documentation<br>
├── public/<br>
│   └── style.css        # Frontend styling<br>
└── templates/<br>
    ├── templates.html   # Home page<br>
    ├── register.html    # User registration page<br>
    └── login.html       # User login page<br>

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** (v9.x or higher) or **yarn**
- **MongoDB** (v6.x or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

---

## 🔧 Installation & Setup

### 1. Clone the Repository and install dependencies
```bash
git clone https://github.com/your-username/user-auth-system.git
cd user-auth-system
npm install
```
---

## 🎯Running the Application
```bash
node app.js
```

The server will start on:
```bash
http://localhost:3000
MongoDB connected successfully
```
---

## 🛠 Development Timeline

### Day 1 – Project Setup

- **Initialized Node.js project**
- **Installed required npm packages**
- **Created basic Express server**
- **Set up initial folder structure**

### Day 2 – Frontend & Routing

- **Built home page structure**
- **Added routes for Register and Login**
- **Created register.html and linked backend routes**

### Day 3 – Authentication Logic

- **Implemented login functionality**
- **Added session-based authentication**
- **Secured user sessions**

### Day 4 – Dashboard & Middleware

- **Displayed logged-in username on dashboard**
- **Implemented authentication middleware**
- **Protected routes from unauthorized access**
- **Refactored routing for better maintainability**

### Day 5 – UI Improvements

- **Improved frontend design**
- **Applied formal and clean styling**
- **Enhanced user experience**

---

## 🔮 Future Enhancements

- **Database Integration (MongoDB / MySQL)**
- **Password Hashing (bcrypt)**
- **Input Validation**
- **Logout Functionality**
- **Role-Based Access Control**

---
