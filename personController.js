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

// GET: Fetch a person by ID
exports.getPersonById = async (req, res) => {
    const { id } = req.params;

    try {
        const person = await Person.findById(id);
        if (!person) return generateLog(res, 404, "error", "Person not found");
        generateLog(res, 200, "success", null, person);
    } catch (err) {
        generateLog(res, 500, "error", "Failed to fetch person");
    }
};

//UPDATE: Update a person's salary by ID
exports.updateSalaryById = async (req, res) => {
    const { id } = req.params;
    const { salary } = req.body;

    try {
        const person = await Person.findByIdAndUpdate(
            id,
            { salary },
            { new: true } // return updated document
        );
        if (!person) return generateLog(res, 404, "error", "Person not found");
        generateLog(res, 200, "success", "Salary updated", person);
    } catch (err) {
        generateLog(res, 500, "error", "Failed to update salary");
    }
};

// DELETE: Delete a person by ID
exports.deletePersonById = async (req, res) => {
    const { id } = req.params;

    try {
        const person = await Person.findByIdAndDelete(id);
        if (!person) return generateLog(res, 404, "error", "Person not found");
        generateLog(res, 200, "success", "Person deleted successfully", person);
    } catch (err) {
        generateLog(res, 500, "error", "Failed to delete person");
    }
};