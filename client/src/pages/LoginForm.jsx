import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    navigate('/');
  };

  return (
    <div>
      <NavigationBar />
      <h2 style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '2rem' }}>Login</h2>

      <form
        onSubmit={submit}
        style={{
          maxWidth: '400px',
          margin: '1rem auto 2rem',
          padding: '1rem 2rem',
          boxSizing: 'border-box',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        {['email', 'password'].map((f) => (
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
            width: '100%',
            marginBottom: '1rem',
          }}
        >
          Sign In
        </button>

        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <button
            type="button"
            onClick={() => navigate('/signUp')}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Sign Up here in case you do not have an account
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

      <footer
        style={{
          textAlign: 'center',
          padding: '1rem',
          fontSize: '0.9rem',
          color: '#888',
          marginTop: '2rem',
        }}
      >
        © True North Tech July 2025
      </footer>
    </div>
  );
}
