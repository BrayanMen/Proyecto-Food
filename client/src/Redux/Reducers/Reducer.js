import { GET_DIETS, GET_RECIPES, RECIPE_DETAIL, RECIPE_POST,  } from "../Actions/Action";

const initialState = {
    recipes: [],
    copyRecipes: [],
    diets: [],
    details: [],

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES: {
            return {
                ...state,
                recipes: action.payload,
                copyRecipes: action.payload,
                details: [],
            }
        }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case RECIPE_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case RECIPE_POST:
            return {
                ...state,
            };

        default:
            return state;
    }

}

export default rootReducer