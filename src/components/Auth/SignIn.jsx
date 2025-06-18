import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signIn.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>WELCOME</h2>
        <p>Sign in to your account to continue your journey</p>
        {error && <div className="auth-error">{error}</div>}
        <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
        <div className="auth-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="#">Forgot password?</Link>
        </div>
        <button type="submit">Sign In</button>
        <p className="auth-switch">
          Don't have an account? <Link to="/sign_up">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
