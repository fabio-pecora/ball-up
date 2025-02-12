import React, { useState } from 'react';

const UserForm = () => {
  const [peopleCount, setPeopleCount] = useState(1);
  const [timeSpent, setTimeSpent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Going with ${peopleCount} people for ${timeSpent} hours`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>How many people? </label>
      <input type="number" value={peopleCount} onChange={(e) => setPeopleCount(e.target.value)} />
      <label>How long will you stay? </label>
      <input type="time" value={timeSpent} onChange={(e) => setTimeSpent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
