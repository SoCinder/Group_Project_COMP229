//
import React, { useState } from 'react';

export default function SurveyPage() {
  const [salary, setSalary] = useState('');
  const [saveMore, setSaveMore] = useState('');
  const [groceries, setGroceries] = useState('');
  const [dining, setDining] = useState('');
  const [transport, setTransport] = useState('');
  const [savings, setSavings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const responses = { salary, saveMore, groceries, dining, transport, savings };
    console.log('Survey responses:', responses);
    alert('Thank you for completing the survey!');
  };

  return (
    <div className="survey-page">
      <h1>Canadians Spending Habits: Now vs. 2 Years Ago</h1>
      <form onSubmit={handleSubmit}>

        <div className="form-group" style={{ border: 'none' }}>
          <label htmlFor="salary">1. What is your yearly salary?</label>
          <input
            id="salary"
            type="number"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            placeholder="Enter your salary"
            required
          />
        </div>

        <fieldset className="form-group" style={{ border: 'none' }}>
          <legend>2. Are you able to save more money now than 2 years ago?</legend>
          <label>
            <input
              type="radio"
              name="saveMore"
              value="yes"
              checked={saveMore === 'yes'}
              onChange={e => setSaveMore(e.target.value)}
              required
            /> Yes
          </label>
          <label>
            <input
              type="radio"
              name="saveMore"
              value="no"
              checked={saveMore === 'no'}
              onChange={e => setSaveMore(e.target.value)}
            /> No
          </label>
        </fieldset>

        <fieldset className="form-group" style={{ border: 'none' }}>
          <legend>3. Compared to two years ago, how has your average monthly spending on groceries changed?</legend>
          {['increased a lot', 'increased a little', 'stayed about the same', 'decreased a little', 'decreased a lot'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="groceries"
                value={option}
                checked={groceries === option}
                onChange={e => setGroceries(e.target.value)}
                required
              /> {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </fieldset>

        <fieldset className="form-group" style={{ border: 'none' }}>
          <legend>4. Compared to two years ago, how often do you spend on dining out and takeout?</legend>
          {['much more often', 'somewhat more often', 'about the same', 'somewhat less often', 'much less often'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="dining"
                value={option}
                checked={dining === option}
                onChange={e => setDining(e.target.value)}
                required
              /> {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </fieldset>

        <fieldset className="form-group" style={{ border: 'none' }}>
          <legend>5. Compared to two years ago, what's happened to your spending on transportation (public transit, gas, rideshares)?</legend>
          {['it has gone up a lot', 'it has gone up a bit', 'it is about the same', 'it has gone down a bit', 'it has gone down a lot'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="transport"
                value={option}
                checked={transport === option}
                onChange={e => setTransport(e.target.value)}
                required
              /> {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </fieldset>

        <fieldset className="form-group" style={{ border: 'none' }}>
          <legend>6. Has the proportion of your income that you save or invest monthly changed over the past two years?</legend>
          {['i save/invest a larger share now', 'it is about the same', 'i save/invest a smaller share now'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="savings"
                value={option}
                checked={savings === option}
                onChange={e => setSavings(e.target.value)}
                required
              /> {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          ))}
        </fieldset>

        <button type="submit">Submit Survey</button>
      </form>
    </div>
  );
}
