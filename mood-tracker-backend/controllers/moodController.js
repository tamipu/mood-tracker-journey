const MoodEntry = require('../models/MoodEntry');

exports.addMoodEntry = async (req, res) => {
    try {
        const moodEntry = new MoodEntry(req.body);
        await moodEntry.save();
        res.status(201).json(moodEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getMoodEntries = async (req, res) => {
    try {
        const moodEntries = await MoodEntry.find();
        res.json(moodEntries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
