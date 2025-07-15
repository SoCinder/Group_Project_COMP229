import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar'; 

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBar />

      <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Thank You!</h1>
        <p>Your survey response has been submitted successfully.</p>

        <button
          onClick={() => navigate('/')}
          style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#28a745',
            color: 'white',
            marginTop: '1rem'
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}
