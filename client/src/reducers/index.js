import { combineReducers } from 'redux';
import user from './userReducer';
import books from './bookReducer'

const rootReducers = combineReducers({
    user,
    books
})

export default rootReducers