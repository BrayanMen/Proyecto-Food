const { Diet } = require('../db');
const { Router } = require('express');
const router = Router();
require('dotenv').config();
const { diets } = require('../controller/Diets')


router.get('/', async (req, res) => {
    try {
        const allDiets = await Diet.findAll();
        if (allDiets.length) {
            res.status(200).send(allDiets);
        } else {
            res.status(400).send('No se encuentra')
        }
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = router;