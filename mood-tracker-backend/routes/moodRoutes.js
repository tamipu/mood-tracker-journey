const express = require('express');
const { addMoodEntry, getMoodEntries } = require('../controllers/moodController');
const router = express.Router();

router.post('/mood', addMoodEntry);

router.get('/mood', getMoodEntries);

module.exports = router;
