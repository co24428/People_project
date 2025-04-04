const Person = require('./PersonModel');

function generateLog(res, code, status, message = null, data = null) {
    const response = { status };
    if (message) response.message = message;
    if (data) response.data = data;
    return res.status(code).json(response);
}

// GET: Fetch all people
exports.getAllPeople = async (req, res) => {
    try {
        const people = await Person.find();
        generateLog(res, 200, "success", null, people);
    } catch (err) {
        generateLog(res, 500, "error", "Failed to fetch people");
    }
};

// POST: Add a new person
exports.addPerson = async (req, res) => {
    const { firstName, familyName, city, country, salary } = req.body;

    try {
        const newPerson = new Person({ firstName, familyName, city, country, salary });
        await newPerson.save();
        generateLog(res, 201, "success", null, newPerson);
    } catch (err) {
        generateLog(res, 500, "error", "Failed to add new person");
    }
};