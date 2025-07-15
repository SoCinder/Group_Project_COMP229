import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import axios from 'axios';

export default function SurveyPage() {
  const [salary, setSalary] = useState('');
  const [saveMore, setSaveMore] = useState('');
  const [groceries, setGroceries] = useState('');
  const [dining, setDining] = useState('');
  const [transport, setTransport] = useState('');
  const [savings, setSavings] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responses = {
      answers: [
        { value: salary },
        { value: saveMore },
        { value: groceries },
        { value: dining },
        { value: transport },
        { value: savings }
      ]
    };

    try {
    const res = await axios.post(
      'http://localhost:5000/api/surveys/68759ebb708e5b75333c5b5d/response',
      responses
    );

    console.log('Response submitted:', res.data);

    // Navigate to thank you page
    navigate('/thank-you');
  } catch (err) {
    console.error('Error submitting response:', err.response?.data || err.message);
  }
};

  return (
    <div>
      <NavigationBar />
      <div className="survey-page" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Canadians Spending Habits: Now vs. 2 Years Ago
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ border: 'none', marginBottom: '1.5rem' }}>
            <label htmlFor="salary" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              1. What is your yearly salary?
            </label>
            <input
              id="salary"
              type="number"
              value={salary}
              onChange={e => setSalary(e.target.value)}
              placeholder="Enter your salary"
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>

          <fieldset className="form-group" style={{ border: 'none', marginBottom: '1.5rem' }}>
            <legend style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              2. Are you able to save more money now than 2 years ago?
            </legend>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input
                type="radio"
                name="saveMore"
                value="yes"
                checked={saveMore === 'yes'}
                onChange={e => setSaveMore(e.target.value)}
                required
                style={{ marginRight: '0.5rem' }}
              /> Yes
            </label>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>
              <input
                type="radio"
                name="saveMore"
                value="no"
                checked={saveMore === 'no'}
                onChange={e => setSaveMore(e.target.value)}
                style={{ marginRight: '0.5rem' }}
              /> No
            </label>
          </fieldset>

          <fieldset className="form-group" style={{ border: 'none', marginBottom: '1.5rem' }}>
            <legend style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              3. Compared to two years ago, how has your average monthly spending on groceries changed?
            </legend>
            {['increased a lot', 'increased a little', 'stayed about the same', 'decreased a little', 'decreased a lot'].map(option => (
              <label key={option} style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input
                  type="radio"
                  name="groceries"
                  value={option}
                  checked={groceries === option}
                  onChange={e => setGroceries(e.target.value)}
                  required
                  style={{ marginRight: '0.5rem' }}
                /> {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </fieldset>

          <fieldset className="form-group" style={{ border: 'none', marginBottom: '1.5rem' }}>
            <legend style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              4. Compared to two years ago, how often do you spend on dining out and takeout?
            </legend>
            {['much more often', 'somewhat more often', 'about the same', 'somewhat less often', 'much less often'].map(option => (
              <label key={option} style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input
                  type="radio"
                  name="dining"
                  value={option}
                  checked={dining === option}
                  onChange={e => setDining(e.target.value)}
                  required
                  style={{ marginRight: '0.5rem' }}
                /> {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </fieldset>

          <fieldset className="form-group" style={{ border: 'none', marginBottom: '1.5rem' }}>
            <legend style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              5. Compared to two years ago, what's happened to your spending on transportation (public transit, gas, rideshares)?
            </legend>
            {['it has gone up a lot', 'it has gone up a bit', 'it is about the same', 'it has gone down a bit', 'it has gone down a lot'].map(option => (
              <label key={option} style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input
                  type="radio"
                  name="transport"
                  value={option}
                  checked={transport === option}
                  onChange={e => setTransport(e.target.value)}
                  required
                  style={{ marginRight: '0.5rem' }}
                /> {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </fieldset>

          <fieldset className="form-group" style={{ border: 'none', marginBottom: '2rem' }}>
            <legend style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              6. Has the proportion of your income that you save or invest monthly changed over the past two years?
            </legend>
            {['i save/invest a larger share now', 'it is about the same', 'i save/invest a smaller share now'].map(option => (
              <label key={option} style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input
                  type="radio"
                  name="savings"
                  value={option}
                  checked={savings === option}
                  onChange={e => setSavings(e.target.value)}
                  required
                  style={{ marginRight: '0.5rem' }}
                /> {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </fieldset>

          <div style={{ textAlign: 'center' }}>
            <button 
              type="submit"
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
              Submit Survey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

