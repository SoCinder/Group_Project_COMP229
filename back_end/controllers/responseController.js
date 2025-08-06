const Response = require('../models/Response');
const Survey = require('../models/Survey');

exports.submitResponse = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' }); // checks if survey exists with provided ID

    const { answers } = req.body;  // extracts answer from request body
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: 'Answers must be an array' }); // validates if answer exists and is an array
    }

    const response = new Response({
      surveyId: req.params.id,
      answers
    }); // creates new response document, stores surveyID and user answers

    await response.save();
    res.status(201).json({ message: 'Response submitted successfully', response });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; // saves response