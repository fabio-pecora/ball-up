// LoginPage.js

import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
