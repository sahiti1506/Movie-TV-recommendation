import React, { useState } from 'react';
import './Login.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter both email and password');
    } else {
      // Here you can perform your authentication logic
      // For demonstration purposes, we'll just reset the form
      setEmail('');
      setPassword('');
      setError('');
      alert('Logged in successfully!'); // You might replace this with redirection or other actions
      window.location.href = '/'; // Redirect to the root route '/'
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;