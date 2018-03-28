import { ADD_DRINK, FETCH_DRINKS } from '../actions/types'

export default function (state = null, action) {
    switch (action.type) {
        case ADD_DRINK:
            console.log('reducer add Drink', state, action.type)
            return state
        case FETCH_DRINKS:
            console.log('reducer fetch Drink', state, action.type)
            return action.payload
        default:
            return state
    }
}