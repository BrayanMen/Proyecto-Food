import { GET_DIETS, GET_RECIPES, ORDER_NAME, ORDER_SCORE, RECIPE_DETAIL, RECIPE_POST, DIETS_FILTER, NAME_SEARCH } from "../Actions/Action";

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
                details: action.payload
            };

        case RECIPE_POST:
            return {
                ...state,
                recipes: action.payload
            };

        //Busqueda por Nombre

        case NAME_SEARCH:
            /* const nameRecipes = state.copyRecipes
             const filterName = nameRecipes.filter((recipe) => {
                 let name = recipe.name.toString().toLowerCase();
                 if (name.includes(action.payload)) return recipe;
             })*/
            return {
                ...state,
                recipes: action.payload,
            };

        //Filter


        case DIETS_FILTER:
            const allRecipes = state.copyRecipes
            if (action.payload === 'Dietas') return { ...state, recipes: state.copyRecipes }
            const filterDiet = allRecipes.filter((recipe) => {
                let diet = recipe.diets.toString().toLowerCase();
                if (diet.includes(action.payload)) return recipe;
            })
            console.log(filterDiet)
            return {
                ...state,
                recipes: filterDiet,
            };


        //Order

        case ORDER_SCORE:
            const copy = state.recipes;
            if (action.payload === 'Puntaje') return { ...state, recipes: state.recipes }
            if (action.payload === 'Max') {
                copy.sort((a, b) => {
                    if (a.health_score < b.health_score) return 1;
                    if (b.health_score < a.health_score) return -1;
                    return 0;
                })
            } else {
                copy.sort((a, b) => {
                    if (a.health_score < b.health_score) return -1;
                    if (b.health_score < a.health_score) return 1;
                    return 0;
                })
            }
            return {
                ...state,
                recipes: copy,
            };

        case ORDER_NAME:
            const copy2 = state.recipes;
            if (action.payload === 'Alpha') return { ...state, recipes: state.recipes }
            if (action.payload === 'Asc') {
                copy2.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    if (b.name.toLowerCase() > a.name.toLowerCase()) return -1;
                    return 0;
                })
            } else {
                copy2.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
                    return 0;
                })
            }
            return {
                ...state,
                recipes: copy2,
            };

        default:
            return state;
    }

}

export default rootReducer