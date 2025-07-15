import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/TrueNorthTechLogo-1.png';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/introduction', label: 'Introduction' },
    { path: '/survey', label: 'Survey' }
  ];

  return (
    <nav style={{
      backgroundColor: '#343a40',
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem'
      }}>
        {/* Logo/Brand */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: '0.5rem'
        }}
        onClick={() => navigate('/')}
        >
          <img 
            src={logo} 
            alt="True North Tech Logo" 
            style={{
              height: '100px',
              width: 'auto'
            }}
          />
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#fff'
          }}>
            True North Tech
          </span>
        </div>

        {/* Navigation Links */}
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          gap: '2rem'
        }}>
          {navItems.map(item => (
            <li key={item.path}>
              <button
                onClick={() => navigate(item.path)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: location.pathname === item.path ? '#007bff' : '#fff',
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  textDecoration: location.pathname === item.path ? 'underline' : 'none',
                  fontWeight: location.pathname === item.path ? 'bold' : 'normal'
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.backgroundColor = '#495057';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;