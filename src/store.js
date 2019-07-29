import {createStore} from 'redux'

const firstState = {
    name: '',
    category: ''
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"

function reducer(state = firstState, action) {
    switch(action.type){
        case UPDATE_NAME:
            return {...state, name: action.payload}
        case UPDATE_CATEGORY:
            return {...state, category: action.payload}
        default:
            return state
    }
}

export default createStore(reducer)