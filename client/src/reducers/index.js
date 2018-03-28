import { combineReducers } from 'redux';
import user from './userReducer';
import drinks from './drinkReducer'

const rootReducers = combineReducers({
    user,
    drinks
})

export default rootReducers