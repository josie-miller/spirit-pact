const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'KatieMiller124!',
  resave: false,
  saveUninitialized: true
}));

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/login', (req, res) => {
  res.render('login');
});

// Add POST routes for signup and login
app.post('/signup', (req, res) => {
  // Handle user signup logic here
  res.redirect('/login');
});

app.post('/login', (req, res) => {
  // Handle user login logic here
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
