import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function Introduction() {
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBar />
      <div
        className="introduction-page"
        style={{
          maxWidth: '800px',
          margin: '2rem auto',
          padding: '1rem',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>True North Tech</h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          We are conducting a study on Canadians' spending habits now vs. 2 years ago.
          Your participation will help us understand how spending patterns have changed over time.
        </p>

        <h2 style={{ marginBottom: '1rem' }}>Team Members</h2>
        <ul
          style={{
            lineHeight: '1.6',
            listStyleType: 'disc',
            paddingLeft: '1.5rem',
            fontSize: '1rem',
            marginBottom: '2rem',
          }}
        >
          <li>Paolo Caparas (301116473)</li>
          <li>Kefah Abbound (301258693)</li>
          <li>Tien Minh Dang (301411970)</li>
          <li>William Collinson (301305060)</li>
        </ul>

        <h2 style={{ marginBottom: '0.5rem' }}>Why It Matters</h2>
        <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
          Your responses help paint a clearer picture of how economic shifts have affected everyday Canadians.
          The insights from this survey could inform future research, business decisions, and even policy discussions.
        </p>

        <h2 style={{ marginBottom: '0.5rem' }}>Quick Statistics</h2>
        <ul
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            paddingLeft: '1.2rem',
          }}
        >
          <li>📊 More than 1,500 people participated in the survey in the last 45 days</li>
          <li>💸 95% report higher spending on groceries</li>
          <li>🚗 80% reported higher transportation costs</li>
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
              color: 'white',
            }}
          >
            Start Survey
          </button>
        </div>

        <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
          Thank you for visiting our survey. Use the navigation above or click the button to get started.
        </p>
      </div>

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
