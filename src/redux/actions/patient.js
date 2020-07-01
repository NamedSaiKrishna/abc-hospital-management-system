import { GET_PATIENT, ADD_MEDICINE_PATIENT, ADD_DIAGNOSTIC_PATIENT, REMOVE_DIAGNOSTIC_PATIENT, REMOVE_MEDICINE_PATIENT } from './types';
import axios from 'axios';
import { tokenConfig } from './auth';

export const getPatient = (id) => (dispatch, getState) => {

    axios.get(`/api/patients/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_PATIENT,
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


export const addMedicinePatient = (medicine, patient, quantity) => (dispatch, getState) => {

    const body = JSON.stringify({ medicine, patient, quantity });

    axios.post('/api/medicines/', body, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: ADD_MEDICINE_PATIENT,
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

export const addDiagnosticPatient = (diagnostic, patient) => (dispatch, getState) =>{
    const body = JSON.stringify({ diagnostic, patient });
    axios.post('/api/diagnostics/', body, tokenConfig(getState))
    .then((res) => {
        dispatch({
            type: ADD_DIAGNOSTIC_PATIENT,
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


export const removeMedicinePatient = (id) => (dispatch, getState) => {
    axios.delete(`/api/medicines/${id}`, tokenConfig(getState))
    .then((res)=>{
        dispatch({
            type: REMOVE_MEDICINE_PATIENT,
            payload: id
        })
    })
    .catch((err)=>{
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

export const removeDiagnosticPatient = (id) => (dispatch, getState) => {
    axios.delete(`/api/diagnostics/${id}`, tokenConfig(getState))
    .then((res)=>{
        dispatch({
            type: REMOVE_DIAGNOSTIC_PATIENT,
            payload: id
        })
    })
    .catch((err)=>{
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