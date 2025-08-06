const Survey = require('../models/Survey');

// POST /api/surveys
// allows frontend to submit new survey to backend API
exports.createSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save(); // if valid - store to mongodb
    res.status(201).json(survey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  } // if invalid return response error
};

// GET /api/surveys
// allows frontend to retrive all surveys stored in database
exports.getSurveys = async (req, res) => {
  const surveys = await Survey.find();
  res.json(surveys);
};

// GET /api/surveys/:id
// retrieves specific survey by ID
exports.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.json(survey);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/surveys/:id
// lets client edit a survey using ID
exports.updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(survey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/surveys/:id
// lets admin delete survey by ID
exports.deleteSurvey = async (req, res) => {
  try {
    await Survey.findByIdAndDelete(req.params.id);
    res.json({ message: 'Survey deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//lets user submit answer to a specific survey
exports.submitSurveyResponse = async (req, res) => {
  const surveyId = req.params.id;
  const { answers } = req.body;

  try {
    const survey = await Survey.findById(surveyId);
    if (!survey) {
      return res.status(404).json({ error: 'Survey not found' });
    }

    survey.responses.push({ answers });
    await survey.save();

    res.status(200).json({ message: 'Response submitted successfully' });
  } catch (err) {
    console.error('Error submitting survey response:', err);
    res.status(500).json({ error: 'Failed to submit response' });
  }
};