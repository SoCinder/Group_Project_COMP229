import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { AuthContext } from '../context/AuthContext';

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const API = import.meta.env.VITE_API_URL;

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // proxy to http://localhost:5000/api/auth/login
      const { data } = await axios.post(`${API}/api/auth/login`, form);

      // persist the JWT & user
      login({ token: data.token, user: data.user || null });

      // **NEW**: confirm it landed in localStorage
      console.log('✅ authToken in localStorage:', localStorage.getItem('authToken'));

      // go to the survey page
      navigate('/survey');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed, please try again.');
    }
  };

  return (
    <div>
      <NavigationBar />
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Log In</h2>

      <form
        onSubmit={submit}
        style={{
          maxWidth: '400px',
          margin: '1rem auto',
          padding: '1rem 2rem',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {['email', 'password'].map((field) => (
          <div key={field} style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 500,
              }}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              value={form[field]}
              onChange={handle}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
        ))}

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '1rem',
          }}
        >
          Sign In
        </button>

        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => navigate('/signup')}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '0.5rem',
            }}
          >
            Don’t have an account? Sign Up
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Back to Homepage
          </button>
        </div>
      </form>

      <footer style={{ textAlign: 'center', padding: '1rem', color: '#888', marginTop: '2rem' }}>
        © True North Tech July 2025
      </footer>
    </div>
  );
}
