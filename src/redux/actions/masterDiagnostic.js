import { ADD_DIAGNOSTIC_MASTER, REMOVE_DIAGNOSTIC_MASTER, GET_DIAGNOSTIC_MASTER, GET_ERRORS } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';


export const getDiagnosticMaster = () => (dispatch, getState) => {
    
    axios.get(`${process.env.REACT_APP_API_URL}/api/master-diagnostics/`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_DIAGNOSTIC_MASTER,
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


export const addDiagnosticMaster = (name, rate) => (dispatch, getState) => {

    const body = JSON.stringify({ name, rate });

    axios.post(`${process.env.REACT_APP_API_URL}/api/master-diagnostics/`, body, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: ADD_DIAGNOSTIC_MASTER,
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

export const removeDiagnosticMaster = (id) => (dispatch, getState) => {

    axios.delete(`${process.env.REACT_APP_API_URL}/api/master-diagnostics/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: REMOVE_DIAGNOSTIC_MASTER,
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