import axios from 'axios';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_USER, GET_ERRORS } from './types';

export const loadUser = () => (dispatch, getState) =>{
    dispatch({type: USER_LOADING});

    const token = getState().auth.token;

    const config = {
        header:{
            'Content-Type': 'application/json'
        }
    }

    if(token){
        config.header['api-token'] = `${token}`;
    }
    axios.get('/api/users/me/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(error => {
            dispatch({
                type: AUTH_ERROR
            });
        })
} 


export const login = (username, password) => (dispatch) =>{
    // Headers
    const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
      // Request Body
      const body = JSON.stringify({ username, password });

      
    
      axios
        .post('/auth/users/login/', body, config)
        .then((res) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: LOGIN_FAIL,
          });
          const error ={
            msg: err.response.data,
            status: err.response.status
          };
          dispatch({
            type: GET_ERRORS,
            payload: error
          });
        })
    
} 

export const logout = () => (dispatch, getState) =>{
      dispatch({
        type: LOGOUT_USER
      })
}

export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['api-token'] = `Token ${token}`;
  }

  return config;
};