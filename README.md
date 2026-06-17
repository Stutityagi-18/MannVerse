# MannVerse

MannVerse is an AI-powered mental wellness journaling platform that helps users reflect on their thoughts, track emotions, and gain meaningful insights from their daily journal entries.

## Features

### Authentication

* User Registration & Login
* JWT-based Authentication
* Protected Routes

###  Daily Journal

* Create and manage journal entries
* Add titles and mood scores
* Store entries securely in MongoDB

###  Mood Tracking

* Track daily mood on a scale of 1–10
* Monitor emotional patterns over time

###  Gratitude Journal

* Maintain daily gratitude entries
* Encourage positive reflection habits

###  AI Reflection System

* Generates AI-powered reflections from journal entries
* Provides:

  * Summary
  * Reflection
  * Personalized Suggestions
  * Dominant Emotion
  * Emotional Tags

###  Smart AI Optimization

* Daily report caching using MongoDB
* Prevents unnecessary AI calls
* Limits report generation requests to improve efficiency

##  Tech Stack

### Frontend

* React.js
* Vite
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI Integration

* Hugging Face Inference API
* Qwen 2.5 Instruct Model

### Authentication

* JWT (JSON Web Tokens)
* bcryptjs

##  Project Structure

```bash
MannVerse/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── services/
│
└── README.md
```

##  Installation

### Clone Repository

```bash
git clone https://github.com/Stutityagi-18/MannVerse.git
cd MannVerse
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
HF_TOKEN=your_huggingface_token
```

Run backend:

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```
