import React, { useState } from 'react';
import '../Form.css';  // Ensure to use the updated CSS below

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [shareLocation, setShareLocation] = useState(false);
  const [level, setLevel] = useState('beginner');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
    alert(`Sign Up successful for ${fullName}!`);
  };

  return (
    <form onSubmit={handleSubmit} className="basketball-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={shareLocation}
            onChange={() => setShareLocation(!shareLocation)}
          />
          Allow sharing my location
        </label>
      </div>
      <div className="form-group">
        <label>Basketball Level</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)} required>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      {error && <p className="error">{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
