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
  .post(createSurvey)
  .get(getSurveys);

router.route('/:id')
  .get(getSurveyById)
  .put(updateSurvey)
  .delete(deleteSurvey);

router.post('/:id/response', submitSurveyResponse);

module.exports = router;