const express = require('express');
const router = express.Router();
const db = require('../models');

// Fetch all events
router.get('/', async (req, res) => {
  const events = await db.Event.findAll();
  res.render('events', { events });
});

// Create a new event (for non-profits)
router.post('/create', async (req, res) => {
  try {
    const { title, description, tags, distance, slotCapacity } = req.body;
    await db.Event.create({ title, description, tags, distance, slotCapacity });
    res.redirect('/dashboard');
  } catch (err) {
    res.status(400).send('Error creating event');
  }
});

module.exports = router;
