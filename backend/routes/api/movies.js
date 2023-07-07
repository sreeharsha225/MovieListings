const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Movie = require('../../models/Movie');

//route Post api/movies
// create a movie listing

router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('year', 'Year is required').not().isEmpty(),
        check('description', 'Description is required').not().isEmpty(),
    ],

    async (req, res) => {
        const errors = validationResult(req);
        // if there are errors, return 400 status and the errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, year, description } = req.body;

        const movieFields = {};
        movieFields.name = name;
        movieFields.year = year;
        movieFields.description = description;
        movieFields.date = Date.now();

        try {
            // create
            movie = new Movie(movieFields);
            await movie.save();
            res.json(movie);
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }

);

//route Get api/movies
// get all movies

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find().sort({ date: -1 });
        res.json(movies);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);

module.exports = router;
