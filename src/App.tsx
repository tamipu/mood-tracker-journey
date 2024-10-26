import React, { useState } from 'react';
import MoodEntryForm from './components/moodEntryForm/MoodEntryForm';
import MoodCalendar from './components/moodCalendar/MoodCalendar';
import MoodAnalytics from './components/moodAnalytics/MoodAnalytics';

interface MoodEntry {
    date: string;
    mood: 'happy' | 'sad' | 'neutral' | 'angry' | 'excited';
    note?: string;
}

const App: React.FC = () => {
    const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

    const handleSaveEntry = (entry: MoodEntry) => {
        setMoodEntries([...moodEntries, entry]);
    };

    return (
        <div className="container">
            <h1>My Mood Journal</h1>
            <MoodEntryForm onSave={handleSaveEntry} />
            <div className="echarts-container">
                <MoodAnalytics entries={moodEntries} />
            </div>
        </div>
    );
};

export default App;
