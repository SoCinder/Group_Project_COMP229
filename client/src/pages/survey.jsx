import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function SurveyPage() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [salary, setSalary] = useState('');
  const [saveMore, setSaveMore] = useState('');
  const [groceries, setGroceries] = useState('');
  const [dining, setDining] = useState('');
  const [transport, setTransport] = useState('');
  const [savings, setSavings] = useState('');
  const [housing, setHousing] = useState('');
  const [mentalHealth, setMentalHealth] = useState('');
  const [majorPurchases, setMajorPurchases] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Build payload matching server's /api/responses route
    const payload = {
      survey: '68759ebb708e5b75333c5b5d',
      answers: [
        { value: salary },
        { value: saveMore },
        { value: groceries },
        { value: dining },
        { value: transport },
        { value: savings },
        { value: housing },
        { value: mentalHealth },
        { value: majorPurchases }
      ]
    };

    try {
      const { data } = await axios.post(
        `/api/responses/${payload.survey}/response`,
        { answers: payload.answers }
      );
      console.log('Response submitted:', data);
      navigate('/thank-you');
    } catch (err) {
      console.error('Error submitting response:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to submit survey');
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="survey-page" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Canadians Spending Habits: Now vs. 2 Years Ago
        </h1>

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Question 1 */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
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
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' }}
            />
          </div>

          {/* Question 2 */}
          <fieldset className="form-group" style={{ border: 'none', marginBottom: '1.5rem' }}>
            <legend style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              2. Are you able to save more money now than 2 years ago?
            </legend>
            {['yes', 'no'].map(opt => (
              <label key={opt} style={{ display: 'block', marginBottom: '0.5rem' }}>
                <input
                  type="radio"
                  name="saveMore"
                  value={opt}
                  checked={saveMore === opt}
                  onChange={e => setSaveMore(e.target.value)}
                  required
                  style={{ marginRight: '0.5rem' }}
                />
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </label>
            ))}
          </fieldset>

          {/* Question 3 */}
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
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </fieldset>

          {/* ...remaining questions... */}

          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{ padding: '1rem 2rem', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', border: 'none', backgroundColor: '#007bff', color: 'white' }}
            >
              Submit Survey
            </button>
          </div>
        </form>
      </div>
      <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.9rem', color: '#888', marginTop: '2rem' }}>
        © True North Tech July 2025
      </footer>
    </div>
  );
}
