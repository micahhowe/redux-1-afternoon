import {createStore} from 'redux'

const firstState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const ADD_INGREDIENT = "ADD_INGREDIENT"

function reducer(state = firstState, action) {
    switch(action.type){
        case UPDATE_NAME:
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
        default:
            return state
    }
}

export default createStore(reducer)