import {
  GET_PATIENT,
  ADD_MEDICINE_PATIENT,
  ADD_DIAGNOSTIC_PATIENT,
  REMOVE_DIAGNOSTIC_PATIENT,
  REMOVE_MEDICINE_PATIENT,
  GET_ALL_PATIENTS,
  DELETE_PATIENT,
} from "./types";
import axios from "axios";
import { tokenConfig } from "./auth";

export const getPatient = (id) => (dispatch, getState) => {
  axios
    .get(`/api/patients/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PATIENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

export const addMedicinePatient = (medicine, patient, quantity) => (
  dispatch,
  getState
) => {
  const body = JSON.stringify({ medicine, patient, quantity });

  axios
    .post(`${process.env.REACT_APP_API_URL}/api/medicines`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_MEDICINE_PATIENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

export const addDiagnosticPatient = (diagnostic, patient) => (
  dispatch,
  getState
) => {
  const body = JSON.stringify({ diagnostic, patient });
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/diagnostics`,
      body,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: ADD_DIAGNOSTIC_PATIENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

export const removeMedicinePatient = (id) => (dispatch, getState) => {
  axios
    .delete(
      `${process.env.REACT_APP_API_URL}/api/medicines/${id}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: REMOVE_MEDICINE_PATIENT,
        payload: id,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

export const removeDiagnosticPatient = (id) => (dispatch, getState) => {
  axios
    .delete(
      `${process.env.REACT_APP_API_URL}/api/diagnostics/${id}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: REMOVE_DIAGNOSTIC_PATIENT,
        payload: id,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

export const updatePatient = (b) => (dispatch, getState) => {
  const body = JSON.stringify(b);
  axios
    .put(
      `${process.env.REACT_APP_API_URL}/api/patients/${b.id}`,
      body,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_PATIENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

export const getAllPatients = () => (dispatch, getState) => {
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/api/patients`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_ALL_PATIENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};

export const deletePatient = (id) => (dispatch, getState) => {
  axios
    .delete(
      `${process.env.REACT_APP_API_URL}/api/patients/${id}`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: DELETE_PATIENT,
        payload: id,
      });
    })
    .catch((err) => {
      const error = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: error,
      });
    });
};
