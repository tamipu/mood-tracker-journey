const mongoose = require('mongoose');

const MoodEntrySchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    mood: { type: String, required: true },
    note: { type: String, maxLength: 500 },
});

module.exports = mongoose.model('MoodEntry', MoodEntrySchema);
