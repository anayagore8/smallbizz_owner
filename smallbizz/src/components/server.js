// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ayushgurav6:ayushgurav6@smallbizz.rwgr6tg.mongodb.net/?retryWrites=true&w=majority&appName=SmallBizz', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  address: String,
  mobile: String,
  category: String
});

const User = mongoose.model('User', userSchema);

// Express route to handle sign-up requests
app.post('/api/signup', async (req, res) => {
  const userData = req.body;

  try {
    // Save user data to MongoDB
    const user = new User(userData);
    await user.save();
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
