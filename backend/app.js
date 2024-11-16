const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./database');
const app = express();

app.use(express.json()); // middleware to parse incoming JSON requests

// registration route
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // checks if email already exists in the database
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    if (results.length > 0) {
      return res.status(400).send('Email already in use');
    }

    // hash password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).send('Error hashing password');
      }

      // insert new user into the database
      db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
        if (err) {
          return res.status(500).send('Error registering user');
        }
        res.status(201).send('User registered successfully');
      });
    });
  });
});

// login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // checks if email exists in the database
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    if (results.length === 0) {
      return res.status(400).send('User not found');
    }

    const user = results[0];

    // compare the password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, match) => {
      if (err) {
        return res.status(500).send('Error comparing passwords');
      }
      if (!match) {
        return res.status(400).send('Invalid password');
      }

      res.status(200).send('Login successful');
    });
  });
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
