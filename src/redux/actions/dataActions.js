import { SET_PROFILES, LOADING_DATA } from "../types.js";
import axios from "axios";

//GET ALL Patients
export const getProfiles = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/patients/`)
    .then((res) => {
      dispatch({
        type: SET_PROFILES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_PROFILES,
        payload: [],
      });
    });
};
