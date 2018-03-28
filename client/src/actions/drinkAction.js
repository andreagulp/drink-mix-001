import axios from 'axios';
import { ADD_DRINK, FETCH_DRINKS, FETCH_USER } from './types'

export const fetchDrinks = () => {
    console.log('action fetch drinks fired')
    const request = axios
        .get('/api/drinks')
        .then(res => {
            console.log('action fetch drinks response', res)
            return res.data;
        });

    return {
        type: FETCH_DRINKS,
        payload: request
    };
};


export const addDrink = newDrink => {
    console.log('action ADD drinks fired')
    return dispatch => {
        const request = axios.post('/api/newdrink', newDrink)
            .then(response => {
                console.log('action ADD drinks response', response)
                return response;
            });

        return dispatch({
            type: ADD_DRINK,
            payload: request
        }).then(() => dispatch(fetchDrinks()));
    };
};
