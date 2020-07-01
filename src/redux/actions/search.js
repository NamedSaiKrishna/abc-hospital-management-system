import { GET_SEARCH } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';


export const getSearch = (search) => (dispatch, getState) => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/patients/search/${search}`, tokenConfig(getState))
    .then()
    .catch()
}