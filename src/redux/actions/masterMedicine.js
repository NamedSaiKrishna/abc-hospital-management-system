import { ADD_MEDICINE_MASTER, REMOVE_MEDICINE_MASTER, GET_MEDICINE_MASTER } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';


export const getMedicineMaster = () => (dispatch, getState) => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/api/master-medicines/`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_MEDICINE_MASTER,
                payload: res.data
            })
        })
        .catch((err) => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: error
            });
        })

}


export const addMedicineMaster = (name, quantity, rate) => (dispatch, getState) => {

    const body = JSON.stringify({ name, quantity, rate });

    axios.post(`${process.env.REACT_APP_API_URL}/api/master-medicines/`, body, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: ADD_MEDICINE_MASTER,
                payload: res.data
            })
        })
        .catch((err) => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: error
            });
        })
}

export const removeMedicineMaster = (id) => (dispatch, getState) => {

    axios.delete(`${process.env.REACT_APP_API_URL}/api/master-medicines/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: REMOVE_MEDICINE_MASTER,
                payload: id
            })
        })
        .catch((err) => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: error
            });
        })
}