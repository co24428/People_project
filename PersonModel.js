const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: String,
    familyName: String,
    city: String,
    country: String,
    salary: Number
}, { collection: 'People' });

module.exports = mongoose.model('Person', personSchema);
