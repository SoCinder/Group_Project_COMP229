const Response = require('../models/Response');
const Survey = require('../models/Survey');

exports.submitResponse = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });

    const { answers } = req.body;
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: 'Answers must be an array' });
    }

    const response = new Response({
      surveyId: req.params.id,
      answers
    });

    await response.save();
    res.status(201).json({ message: 'Response submitted successfully', response });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};