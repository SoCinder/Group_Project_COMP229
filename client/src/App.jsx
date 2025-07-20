import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Introduction from './pages/Introduction';
import SurveyPage from './pages/survey';
import ThankYouPage from './pages/thankyouPage';
import LoginForm from './pages/LoginForm';
import SignUpForm from './pages/SignUpForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/survey" element={<SurveyPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
