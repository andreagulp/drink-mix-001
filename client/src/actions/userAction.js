import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    const request = axios.get('/api/current_user')
        .then(response => {
            return response.data
        })

    return {
        type: FETCH_USER,
        payload: request
    }
}