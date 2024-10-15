import React from 'react';
import ReactECharts from 'echarts-for-react';
import './MoodAnalytics.css';

interface MoodEntry {
    date: string;
    mood: 'happy' | 'sad' | 'neutral' | 'angry' | 'excited';
}

const MoodAnalytics: React.FC<{ entries: MoodEntry[] }> = ({ entries }) => {
    const moodData = entries.map(entry => ({
        date: entry.date,
        moodValue: moodToNumber(entry.mood),
    }));

    const moodToNumber = (mood: MoodEntry['mood']) => {
        switch (mood) {
            case 'happy': return 4;
            case 'excited': return 3;
            case 'neutral': return 2;
            case 'sad': return 1;
            case 'angry': return 0;
            default: return 2;
        }
    };

    const options = {
        title: {
            text: 'Mood Trend Over Time',
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: moodData.map(entry => entry.date),
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 4,
            interval: 1,
            axisLabel: {
                formatter: (value: number) => {
                    const moods = ['Angry', 'Sad', 'Neutral', 'Excited', 'Happy'];
                    return moods[value];
                },
            },
        },
        series: [
            {
                name: 'Mood Value',
                type: 'line',
                data: moodData.map(entry => entry.moodValue),
                smooth: true,
            },
        ],
    };

    return <ReactECharts option={options} style={{ height: '400px', width: '100%' }} />;
};

export default MoodAnalytics;
