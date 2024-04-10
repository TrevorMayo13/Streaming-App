const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

// CREATE: Create a new person
router.post('/', async (req, res) => {
    try {
        const person = new Person(req.body);
        await person.save();
        res.status(201).json(person);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ: Get all persons
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ: Get a specific person by ID
router.get('/:id', getPerson, (req, res) => {
    res.json(res.person);
});

// UPDATE: Update a specific person by ID
router.patch('/:id', getPerson, async (req, res) => {
    if (req.body.name != null) {
        res.person.name = req.body.name;
    }
    if (req.body.description != null) {
        res.person.description = req.body.description;
    }
    try {
        const updatedPerson = await res.person.save();
        res.json(updatedPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE: Delete a specific person by ID
router.delete('/:id', getPerson, async (req, res) => {
    try {
        await res.person.remove();
        res.json({ message: 'Deleted Person' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

async function getPerson(req, res, next) {
    let person;
    try {
        person = await Person.findById(req.params.id);
        if (person == null) {
            return res.status(404).json({ message: 'Cannot find person' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.person = person;
    next();
}

module.exports = router;
