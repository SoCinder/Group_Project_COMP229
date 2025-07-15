import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from "./NavigationBar"

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBar />
      <div className="home-page" style={{ textAlign: 'center', padding: '4rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ marginBottom: '2rem' }}>Welcome to True North Tech Survey</h1>
        <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
          Explore how Canadians' spending habits have changed. Start by visiting the introduction or jump right into the survey.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <button
            onClick={() => navigate('/introduction')}
            style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white'
            }}
          >
            Go to Introduction
          </button>
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
      </div>
    </div>
  );
}
