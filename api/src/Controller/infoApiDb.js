require('dotenv').config();
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const {API_KEY, API_KEY1, API_KEY2, API_KEY3, API_KEY4,API_KEY5,API_KEY6} = process.env;

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&number=100&addRecipeInformation=true`);

    const apiInfo = apiUrl.data.results.map((r) => {
        return {
            id: r.id,
            name: r.title,
            summary: r.summary,
            diets: r.diets,
            health_score: r.healthScore,
            image: r.image,
            step_by_step: r.analyzedInstructions[0]?.steps.map((paso) => {
                return `<b>${paso.number}</b> <br>${paso.step}<br>`;
            }),
        };
    });
    return apiInfo;
   };

const getDbInfo = async () => {
    return await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attibutes: [],
            },
        },
    });
};

const getAllRecipes = async () => {
    const apiData = await getApiInfo();
    const dbData = await getDbInfo();
    const allInfo = apiData.concat(dbData);

    return allInfo;
};

const getIdApi = async (id) => {
    return await axios.get (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY2}`)
}


const getIdDb = async (id) => {
    return await Recipe.findByPk(id, {
        include: {
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllRecipes,
    getIdApi,
    getIdDb,   
}