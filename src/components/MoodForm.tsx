import React, { useState } from 'react';

interface MoodFormProps {
  onMoodAdded: () => void;
}

const MoodForm: React.FC<MoodFormProps> = ({ onMoodAdded }) => {
  const [mood, setMood] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:5000/moods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mood, description }),
    });

    // Reset form fields
    setMood('');
    setDescription('');
    onMoodAdded(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Enter your mood"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your mood (optional)"
      />
      <button type="submit">Add Mood</button>
    </form>
  );
};

export default MoodForm;
