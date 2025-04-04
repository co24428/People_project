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
        const filters = {};

        if (req.query.firstName) filters.firstName = req.query.firstName;
        if (req.query.familyName) filters.familyName = req.query.familyName;
        if (req.query.city) filters.city = req.query.city;
        if (req.query.country) filters.country = req.query.country;

        // Exact match for salary
        if (req.query.salary) filters.salary = Number(req.query.salary);

        // Advanced salary filtering
        // salary_gt, salary_gte, salary_lt, salary_lte
        const salaryFilter = {};
        if (req.query.salary_gt) salaryFilter.$gt = Number(req.query.salary_gt);
        if (req.query.salary_gte) salaryFilter.$gte = Number(req.query.salary_gte);
        if (req.query.salary_lt) salaryFilter.$lt = Number(req.query.salary_lt);
        if (req.query.salary_lte) salaryFilter.$lte = Number(req.query.salary_lte);

        // Merge if no exact salary query
        if (!req.query.salary && Object.keys(salaryFilter).length > 0) {
            filters.salary = salaryFilter;
        }

        const people = await Person.find(filters);
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