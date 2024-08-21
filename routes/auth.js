const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../models');

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
}));

router.post('/signup', async (req, res) => {
  try {
    const { username, password, role } = req.body;
    await db.User.create({ username, password, role });
    res.redirect('/login');
  } catch (err) {
    res.status(400).send('Error signing up');
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
