const { Recipe, Diet } = require('../db');
const { Router } = require('express');
const router = Router();

router.post('/', async (req, res) => {
    try {
        const {
            name,
            summary,
            image,
            health_score,
            step_by_step,
            createdInDb,
            diets,
        } = req.body;

        const recipeCreate = await Recipe.create({
            name,
            summary,
            image,
            health_score,
            step_by_step,
            createdInDb
        });

        const diet = await Diet.findAll({
            where: { name: diets }
        });

        recipeCreate.addDiet(diet);
        res.status(200).send('Creada!');
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;