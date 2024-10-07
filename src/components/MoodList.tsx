import React, { useEffect, useState } from 'react';

interface MoodListProps {
  refresh: boolean; 
}

const MoodList: React.FC<MoodListProps> = ({ refresh }) => {
  const [moods, setMoods] = useState<any[]>([]);

  const fetchMoods = async () => {
    const response = await fetch('http://localhost:5000/moods');
    const data = await response.json();
    setMoods(data);
  };

  useEffect(() => {
    fetchMoods(); 
  }, [refresh]); 

  return (
    <div>
      <h2>Mood List</h2>
      <ul>
        {moods.map((mood) => (
          <li key={mood.id}>
            <strong>{mood.mood}</strong>: {mood.description} (Date: {new Date(mood.date).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodList;
