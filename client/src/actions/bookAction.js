import axios from 'axios';
import { ADD_BOOK } from './types'

export const addBook = newBook => {
    const request = axios.post('/api/books', newBook)
        .then(response => {
            return response.data
        })

    return {
        type: ADD_BOOK,
        payload: request
    }
}