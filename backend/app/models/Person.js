const mongoose = require('mongoose');

// Define the schema for the Person model
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
});

// Create and export the Person model
module.exports = mongoose.model('Person', personSchema);
