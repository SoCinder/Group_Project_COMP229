import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from "./NavigationBar";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <NavigationBar />

      <div
        className="home-page"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '4rem 1rem',
          fontFamily: 'sans-serif',
          backgroundColor: '#f8f9fa',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            maxWidth: '700px',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <h1 style={{ marginBottom: '1.5rem' }}>Welcome to True North Tech Survey</h1>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#333' }}>
            Explore how Canadians' spending habits have changed. Start by visiting the introduction or jump right into the survey.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <button
              onClick={() => navigate('/introduction')}
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                cursor: 'pointer',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#007bff',
                color: 'white',
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
                color: 'white',
              }}
            >
              Start Survey
            </button>
          </div>
        </div>
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
