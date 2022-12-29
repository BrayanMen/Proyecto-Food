const { Recipe, Diet } = require('../db');
const { Router } = require('express');
const router = Router();

router.post('/', async (req, res) => {
    try {
        const {
            name,
            summary,
            health_score,
            image,
            step_by_step,
            createdInDb,
            diets,
        } = req.body;

        const recipeCreate = await Recipe.create({
            name,
            summary,
            health_score,
            image,
            step_by_step,
            createdInDb,
        });

        let diet = await Diet.findAll({
            where: { name: diets }
        });

        recipeCreate.addDiet(diet);
        res.status(200).send(recipeCreate);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;