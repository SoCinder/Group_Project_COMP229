import React from 'react';

export default function Introduction() {
  return (
    <div className="introduction-page" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>True North Tech</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        We are conducting a study on Canadians’ spending habits now vs. 2 years ago. Your participation will help us understand how spending patterns have changed over time.
      </p>

      <h2 style={{ marginBottom: '1rem' }}>Team Members</h2>
      <ul style={{ lineHeight: '1.6', listStyleType: 'disc', paddingLeft: '1.5rem', fontSize: '1rem' }}>
        <li>Paolo Caparas (301116473)</li>
        <li>Kefah Abbound (301258693)</li>
        <li>Tien Minh Dang (301411970)</li>
        <li>William Collinson (301305060)</li>
      </ul>

      <p style={{ marginTop: '2rem', fontStyle: 'italic', textAlign: 'center' }}>
        Thank you for visiting our survey. Click on the <strong>Survey</strong> tab to get started.
      </p>
    </div>
  );
}
