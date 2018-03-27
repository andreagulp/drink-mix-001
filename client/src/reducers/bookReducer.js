import { ADD_BOOK } from '../actions/types'

export default function (state = null, action) {
    switch (action.type) {
        case ADD_BOOK:
            return state
        default:
            return state;
    }
}