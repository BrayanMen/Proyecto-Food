const { Recipe, Diet } = require('../db');
const { getAllRecipes, getIdApi, getIdDb } = require('../Controller/infoApiDb');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const { name } = req.query; 

        if (!name) {
            const allRecipes = await getAllRecipes();
            return res.status(200).send(allRecipes);
        } else {
            const recipes = await getAllRecipes();
            const recipeName = recipes.filter((r) => r.name.toLowerCase().includes(name.toString().toLowerCase()));
            if (recipeName.length) {
                return res.status(200).send(recipeName)
            } else {
                return res.status(400).send('La receta no se encuentra')
            }
        }
    } catch (error) {
        console.log(error)
        return res.status(401).send('Input Invalido');
    }
});

router.get('/:id', async (req, res) => { 
    const {id} = req.params
    try {
        if (id.length > 12) {
            const idDb = await getIdDb(id);            
            return res.status(200).send(idDb)
        } else { 
            const idApi = await getIdApi(id)
            if (idApi.data.id) {
                let recipeDetails =  {                    
                    id: idApi.data.id,
                    name: idApi.data.title,
                    summary: idApi.data.summary,
                    diets: idApi.data.diets,
                    health_score: idApi.data.healthScore,
                    image: idApi.data.image,
                    step_by_step: idApi.data.analyzedInstructions[0]?.steps.map((paso) => {
                        return `<b>${paso.number}</b> <br>${paso.step}<br>`;
                    }),
                }
                return res.status(200).send(recipeDetails); 
            }
        }     
   } catch (error) {
    console.log(error)
    res.status(400).send('ID Invalido')
   }
});


module.exports = router;