const express = require('express');
const router = express.Router();
const careers = require('../data/careers.json');
const streams = require('../data/streams.json');

router.get('/', (req, res) => {
  res.json(careers);
});

router.get('/streams', (req, res) => {
  res.json(streams);
});

router.get('/:id', (req, res) => {
  const career = careers.find((c) => c.id === req.params.id);
  if (!career) return res.status(404).json({ message: 'Career not found' });
  res.json(career);
});

module.exports = router;