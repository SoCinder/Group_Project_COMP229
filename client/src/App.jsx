import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Introduction from './pages/Introduction';
import SurveyPage from './pages/survey';
import ThankYouPage from './pages/thankyouPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;
