require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const db = require('./models');
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);
app.use('/events', eventRoutes);

app.get('/', (req, res) => res.render('index'));
app.get('/dashboard', (req, res) => res.render('dashboard', { user: req.user }));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
