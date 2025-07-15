import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar'; // Adjust path as needed

export default function Introduction() {
  const navigate = useNavigate();
  
  return (
    <div>
      <NavigationBar />
      <div className="introduction-page" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>True North Tech</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          We are conducting a study on Canadians' spending habits now vs. 2 years ago. Your participation will help us understand how spending patterns have changed over time.
        </p>

        <h2 style={{ marginBottom: '1rem' }}>Team Members</h2>
        <ul style={{ lineHeight: '1.6', listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1rem', marginBottom: '2rem' }}>
          <li>Paolo Caparas (301116473)</li>
          <li>Kefah Abbound (301258693)</li>
          <li>Tien Minh Dang (301411970)</li>
          <li>William Collinson (301305060)</li>
        </ul>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button
            onClick={() => navigate('/survey')}
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#28a745',
              color: 'white'
            }}
          >
            Start Survey
          </button>
        </div>

        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          Thank you for visiting our survey. Use the navigation above or click the button to get started.
        </p>
      </div>
    </div>
  );
}