import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { AuthContext } from '../context/AuthContext';

export default function SignUpForm() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
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
      // Send signup data to backend (via proxy)
      const { data } = await axios.post(`${API}/api/auth/signup`, form);
      // On success, store token & user in context
      login({ token: data.token, user: data.user || null });
      // Redirect to a protected route
      navigate('/survey');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed, please try again.');
    }
  };

  return (
    <div>
      <NavigationBar />
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Sign Up</h2>

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

        {['username', 'email', 'password'].map((field) => (
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
            backgroundColor: '#16a34a',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Create Account
        </button>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            type="button"
            onClick={() => navigate('/login')}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Already have an account? Log In
          </button>
        </div>
      </form>

      <footer style={{ textAlign: 'center', padding: '1rem', color: '#888', marginTop: '2rem' }}>
        © True North Tech July 2025
      </footer>
    </div>
  );
}
