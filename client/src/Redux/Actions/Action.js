import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const NAME_SEARCH = "NAME_SEARCH";
export const GET_DIETS = "GET_DIETS";
export const RECIPE_POST = "RECIPE_POST";
export const RECIPE_DETAIL = "RECIPE_DETAIL";
export const DIETS_FILTER = "DIETS_FILTER";

export const ORDER_NAME = "ORDER_NAME";
export const ORDER_SCORE = "ORDER_SCORE";



export function getRecipes() {
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/recipes");
        return dispatch({ type: GET_RECIPES, payload: json.data });
    };
}



export function nameSearch(name) {
    return async function (dispatch) {
        let recipe = await axios.get("http://localhost:3001/recipes?name=" + name);
        // console.log(recipe);
        return dispatch({ type: NAME_SEARCH, payload: recipe.data });
    };
}


export function getDiets() {
    return async function (dispatch) {
        let diets = await axios.get("http://localhost:3001/diets");
        // console.log(diets);
        return dispatch({ type: GET_DIETS, payload: diets.data })
    };
}

export function recipePost(payload) {
    return async function () {
        let json = await axios.post("http://localhost:3001/recipe", payload);
        return {
            type: 'RECIPE_POST',
            json
        }
    }
}

export function recipeDetails(id) {
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/recipes/" + id);
        return dispatch({ type: RECIPE_DETAIL, payload: json.data });
    }

}

export function filterDiets(payload) {
    console.log(payload)
    return {
        type: DIETS_FILTER,
        payload
    }
};

export function orderByName(payload) {
    return {
        type: ORDER_NAME,
        payload,
    };
};

export function orderByScore(payload) {
    return {
        type: ORDER_SCORE,
        payload,
    };
};

