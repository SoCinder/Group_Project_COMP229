const express = require('express');
const { submitResponse } = require('../controllers/responseController');

const router = express.Router();

router.post('/:id/response', submitResponse);

module.exports = router;