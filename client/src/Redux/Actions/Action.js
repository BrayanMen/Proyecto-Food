import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const NAME_SEARCH = "NAME_SEARCH";
export const GET_DIETS = "GET_DIETS";
export const RECIPE_POST = "RECIPE_POST";
export const RECIPE_DETAIL = "RECIPE_DETAIL";
export const DIETS_FILTER = "DIETS_FILTER";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_SCORE = "ORDER_SCORE";
export const BEST_FIVE = "BEST_FIVE";


export function getRecipes() {
    return async function (dispatch) {
      let json = await axios.get("http://localhost:3001/recipes");
      console.log(json);
      return dispatch({ type: GET_RECIPES, payload: json.data });
    };
}



export function nameSearch(name) {
    return async function (dispatch) {
        let recipes = await axios.get("http://localhost:3001/recipes?name=" + name);
        console.log(recipes);
        return dispatch({ type: NAME_SEARCH, payload: recipes.data });
    };
}

export function getDiets() {
    return async function (dispatch) {
        let diets = await axios.get("http://localhost:3001/diets");
        console.log(diets);
        return dispatch({ type: GET_DIETS, payload: diets.data })
    };
}

export function recipePost(payload) {
    return async function () {
        let recipe = await axios.get("http://localhost:3001/recipe", payload);
        return recipe;
    };
}

export function recipeDetails(id) {
    return async function (dispatch) {
        let details = await axios.get("http://localhost:3001/recipes" + id);
        return dispatch({ type: RECIPE_DETAIL, payload: details.data });
    };
}

export function filterDiets(payload) {
    console.log(payload)
    return  {
        type: DIETS_FILTER, 
        payload 
    }
};

export function orderByName(payload){
    return {
        type: ORDER_NAME,
        payload,
    };
};

export function orderByScore(payload){
    return {
        type: ORDER_SCORE,
        payload,
    };
};

export function bestFive(payload) {
    return {
      type: BEST_FIVE,
      payload,
    };
  };