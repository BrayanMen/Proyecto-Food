import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const NAME_SEARCH = "NAME_SEARCH";
export const GET_DIETS = "GET_DIETS";
export const RECIPE_POST = "RECIPE_POST";
export const RECIPE_DETAIL = "RECIPE_DETAIL";
export const DIETS_FILTER = "DIETS_FILTER";
export const ORDER_NAME = "ORDER_BY_NAME";
export const ORDER_SCORE = "ORDER_BY_SCORE";
export const BEST_FIVE = "BEST_FIVE";


export function getRecipes() {
    return async function (dispatch) {
      let json = await axios.get("http://localhost:3001/recipes");
      return dispatch({ type: GET_RECIPES, payload: json.data });
    };
  }


export function nameSearch(name) {
    return async function (dispatch) {
        let recipes = await axios.get("http://localhost:3001/recipes?name=" + name);
        return dispatch({ type: NAME_SEARCH, payload: recipes.data });
    };
}

export function getDiets() {
    return async function (dispatch) {
        let diets = await axios.get("http://localhost:3001/diets");
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
    return async function () {
        return { type: DIETS_FILTER, payload }
    }
};