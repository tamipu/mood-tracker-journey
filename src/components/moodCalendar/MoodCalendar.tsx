import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MoodCalendar.css';

interface MoodEntry {
    date: string;
    mood: 'happy' | 'sad' | 'neutral' | 'angry' | 'excited';
}

const MoodCalendar: React.FC<{ entries: MoodEntry[] }> = ({ entries }) => {
    const getTileClassName = (date: Date) => {
        const dateString = date.toISOString().split('T')[0];
        const entry = entries.find((e) => e.date === dateString);
        return entry ? `mood-${entry.mood}` : '';
    };

    return (
        <Calendar
            tileClassName={({ date }) => getTileClassName(date)}
        />
    );
};

export default MoodCalendar;
