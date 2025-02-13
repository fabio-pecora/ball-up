// Component for showing court details and availability
import React, { useState } from 'react';

const CourtDetails = ({ court }) => {
  const [isGoing, setIsGoing] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const [timeSpent, setTimeSpent] = useState('');

  const handleCheckIn = () => {
    setIsGoing(!isGoing);
  };
  

  return (
    <div>
      <h2>{court.name}</h2>
      <p>Status: {court.available ? "Available" : "Occupied"}</p>
      <button onClick={handleCheckIn}>{isGoing ? "I'm leaving" : "I'm going"}</button>
      {isGoing && (
        <div>
          <input type="number" value={peopleCount} onChange={(e) => setPeopleCount(e.target.value)} placeholder="How many people?" />
          <input type="time" value={timeSpent} onChange={(e) => setTimeSpent(e.target.value)} placeholder="How long?" />
        </div>
      )}
    </div>
  );
};

export default CourtDetails;
