// SignUpPage.js

import React from 'react';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
