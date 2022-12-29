const { Router } = require('express');
const router = Router();

const recipes1 = require('./Recipes');
const recipePost = require('./RecipePost')
const diets1 = require('./Diet')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use('/recipes', recipes1);
router.use('/recipe', recipePost);
router.use('/diets', diets1)

module.exports = router;
