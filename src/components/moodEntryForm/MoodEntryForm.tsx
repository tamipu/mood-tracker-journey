import React, { useState } from 'react';
import './MoodEntryForm.css';

interface MoodEntry {
    date: string;
    mood: 'happy' | 'sad' | 'neutral' | 'angry' | 'excited';
    note?: string;
}

const MoodEntryForm: React.FC<{ onSave: (entry: MoodEntry) => void }> = ({ onSave }) => {
    const [mood, setMood] = useState<MoodEntry['mood']>('neutral');
    const [note, setNote] = useState<string>('');
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ mood, note, date });
        setMood('neutral');
        setNote('');
    };

    return (
        <form className="mood-entry-form" onSubmit={handleSubmit}>
            <h2>My Mood</h2>
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <br/>
            <label htmlFor="mood">Select mood:</label>
            <select
                id="mood"
                value={mood}
                onChange={(e) => setMood(e.target.value as MoodEntry['mood'])}
            >
                <option value="happy">Happy</option>
                <option value="excited">Excited</option>
                <option value="neutral">Neutral</option>
                <option value="sad">Sad</option>
                <option value="angry">Angry</option>
            </select>
            <label htmlFor="note">Additional notes:</label>
            <textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Any additional thoughts..."
                rows={4}
            />
            <button type="submit">Save Mood Entry</button>
        </form>
    );
};

export default MoodEntryForm;
