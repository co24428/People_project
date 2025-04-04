const express = require('express');
const personController = require("./personController");

const router = express.Router();

// add to base url in app.js -> "/api/v1/people"
// http://localhost:3000/api/v1/people
router.get('/', personController.getAllPeople);
router.post('/addPerson', personController.addPerson);
router.get('/find/:id', personController.getPersonById);
router.patch('/updateSalary/:id', personController.updateSalaryById);
router.delete('/delete/:id', personController.deletePersonById);
router.get('/statistic', personController.getStatistics);

// for Rendering the view
// router.get('/view', personController.renderPeopleList);
router.get('/view', (req, res) => {
    res.render('template');
});

module.exports = router;