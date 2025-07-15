const express = require('express');
const {
  createSurvey,
  getSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey
} = require('../controllers/surveyController');

const router = express.Router();

router.route('/')
  .post(createSurvey)
  .get(getSurveys);

router.route('/:id')
  .get(getSurveyById)
  .put(updateSurvey)
  .delete(deleteSurvey);

module.exports = router;