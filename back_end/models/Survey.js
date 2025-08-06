const mongoose = require('mongoose');

// defines eacb survey question
const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  type: { type: String, default: 'multiple-choice' },
  options: [String]
});

// stores individual user answers
const responseSchema = new mongoose.Schema({
  answers: [{ value: String }],
  createdAt: { type: Date, default: Date.now }
});

// main survey structure
const surveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [questionSchema],
  responses: [responseSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Survey', surveySchema);