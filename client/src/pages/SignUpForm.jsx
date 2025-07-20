import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      // Optional: send data to your backend API
      // await axios.post('http://localhost:5000/api/users', form);

      console.log('Form submitted:', form);
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <form
      onSubmit={submit}
      style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      {['name', 'email', 'password'].map((f) => (
        <div key={f} style={{ marginBottom: '1rem' }}>
          <label
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '500',
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </label>
          <input
            type={f === 'password' ? 'password' : 'text'}
            name={f}
            value={form[f]}
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
          backgroundColor: '#16a34a',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Sign Up
      </button>
    </form>
  );
}
