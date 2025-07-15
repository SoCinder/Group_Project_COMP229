import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Introduction from './pages/Introduction';
import SurveyPage from './pages/survey';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/survey" element={<SurveyPage />} />
    </Routes>
  );
}

export default App;
