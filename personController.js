const Person = require("./PersonModel");

class PersonController {
    static async getAllPeople(req, res) {
        try {
            const people =  await Person.getAllPeople();
            console.log(people)
            PersonController.generateLog(res, 200, "success", null, people);
        } catch (err) {
            PersonController.generateLog(res, 500, "error", "Failed to fetch toys");
        }
    }

    static generateLog(res, code, status, message = null, data = null){
        const  response = { status };
        if (message) response.message = message;
        if (data) response.data = data;
        return res.status(code).json(response);
    }
};

module.exports = PersonController;