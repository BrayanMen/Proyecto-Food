require('dotenv').config();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { API_KEY, API_KEY1, API_KEY2,API_KEY3, API_KEY4, API_KEY6, API_KEY5 } = process.env;

// let diets = [
//     "gluten free",
//     "dairy free",
//     "ketogenic",
//     "vegetarian",
//     "lacto vegetarian",
//     "lacto ovo vegetarian",
//     "ovo vegetarian",
//     "vegan",
//     "pescatarian",
//     "paleolithic",
//     "primal",
//     "fodmap friendly",
//     "whole 30",
// ];

const diets = async () => {
    try {
        const dietList = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&number=60&addRecipeInformation=true`
        );
        const diets = await dietList.data?.results.map((d) => d.diets).flat(1);
        return [...new Set(diets)];
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    diets
};