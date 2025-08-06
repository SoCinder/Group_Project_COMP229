const express = require('express');
const {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
  submitSurveyResponse
} = require('../controllers/surveyController');

const router = express.Router();

router.route('/')
  .post(createSurvey) // /api/surveys	Create a new survey
  .get(getSurveys); // 	/api/surveys	Get all surveys

router.route('/:id')
  .get(getSurveyById) // /api/surveys/:id	Get one survey by ID
  .put(updateSurvey) // /api/surveys/:id	Update a survey
  .delete(deleteSurvey); // /api/surveys/:id	Delete a survey

router.post('/:id/response', submitSurveyResponse); // /api/surveys/:id/response	Submit answers to a survey
module.exports = router;