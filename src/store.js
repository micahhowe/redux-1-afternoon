import {createStore} from 'redux'

const firstState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const ADD_INSTRUCTION = "ADD_INSTRUCTION"
export const ADD_RECIPE = "ADD_RECIPE"

function reducer(state = firstState, action) {
    switch(action.type){
        case UPDATE_NAME:
            //these are basically placing the current key value pairs into redux
            return {...state, name: action.payload}
        case UPDATE_CATEGORY:
            return {...state, category: action.payload}
        case UPDATE_AUTHOR_FIRST:
            return{...state, authorFirst: action.payload}
        case UPDATE_AUTHOR_LAST:
            return{...state, authorLast: action.payload}
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, action.payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPE:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            }
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        default:
            return state
    }
}

export default createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())