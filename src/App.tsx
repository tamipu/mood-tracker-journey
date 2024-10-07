import React, { useState } from 'react';
import MoodForm from './components/MoodForm';
import MoodList from './components/MoodList';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const handleMoodAdded = () => {
    setRefresh((prev) => !prev); 
  };

  return (
    <div>
      <h1>Mood Tracker</h1>
      <MoodForm onMoodAdded={handleMoodAdded} />
      <MoodList refresh={refresh} />
    </div>
  );
};

export default App;

