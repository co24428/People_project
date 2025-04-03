const express = require("express");
const PeopleController = require("./personController");

const router = express.Router();

// add to base url in app.js -> "/api/v1/toys"
// http://localhost:3000/api/v1/people
router.get("/", PeopleController.getAllPeople);
// router.get("/:id", ToyController.getToysbyID);
// router.post("/", ToyController.addNewToy);
// router.patch("/:id", ToyController.updateToy);
// router.delete("/:id", ToyController.deleteToy);

module.exports = router;
