const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');

// Route for submitting contact form
router.post('/', submitContact);

// Route for getting all contacts (could be protected in future)
router.get('/', getContacts);

module.exports = router;
