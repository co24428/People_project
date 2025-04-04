const express = require('express');
const personController = require("./personController");

const router = express.Router();

// add to base url in app.js -> "/api/v1/people"
// http://localhost:3000/api/v1/people
router.get('/', personController.getAllPeople);
router.post('/add-person', personController.addPerson);

module.exports = router;