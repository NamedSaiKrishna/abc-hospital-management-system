import { GET_SEARCH } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';


export const getSearch = (search) => (dispatch, getState) => {
    axios.get(`/api/patients/search/${search}`, tokenConfig(getState))
    .then()
    .catch()
}