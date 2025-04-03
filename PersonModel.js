const configs = require('./config.js');

const db = configs.mongoClient.db("Webapp");
const collection = db.collection("People");

class Person {
    constructor(firstName, familyName, city, country, salary) {
        this.firstName = firstName;
        this.familyName = familyName;
        this.city = city;
        this.country = country;
        this.salary = salary;
    }

    static getAllPeople() {
        const allPeople  = collection.find({}).toArray();
        return allPeople;
    }
}

module.exports = Person;