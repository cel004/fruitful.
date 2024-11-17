import express from 'express';
import bcrypt from 'bcrypt';
import con from './db_connection.js';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json()); // middleware to parse incoming JSON requests

// registration route
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  // checks if email already exists in the database
  con.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Server error' });
    }
    if (results.length > 0) {
      return res.status(400).json({ status: 'error', message: 'Email already in use' });
    }

    // hash password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ status: 'error', message: 'Error hashing password' });
      }

      // insert new user into the database
      con.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, results) => {
        if (err) {
          return res.status(500).json({ status: 'error', message: 'Error registering user' });
        }
        // Return success response with user information (without password)
        res.status(201).json({
          status: 'success',
          message: 'User registered successfully',
          user: {
            id: results.insertId,
            email: email
          }
        });
      });
    });
  });
});

// login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // checks if email exists in the database
  con.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Server error' });
    }
    if (results.length === 0) {
      return res.status(400).json({ status: 'error', message: 'User not found' });
    }

    const user = results[0];

    // compare the password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, match) => {
      if (err) {
        return res.status(500).json({ status: 'error', message: 'Error comparing passwords' });
      }
      if (!match) {
        return res.status(400).json({ status: 'error', message: 'Invalid password' });
      }

      res.status(200).json({
        status: 'success',
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email
        }
      });
    });
  });
});

// http://localhost:3001/api/test 
app.post('/api/test', (req, res) => {
  res.status(200).send('POST request to /api/test received');
});

// start the server
// POST http://localhost:3001/api/login = success
// POST http://localhost:3001/api/register = success
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
