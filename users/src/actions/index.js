import users from '../apis/users';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_USER,
    FETCH_USERS,
    FETCH_USER,
    } from './types';

export const signIn = user =>{
    return {
        type: SIGN_IN,
        payload: user
    };
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    };
};


export const createUser = formValues => async (dispatch,getState) => {
    const {userId} = getState().auth;
    const response = await users.post('/users', {...formValues,userId});

    dispatch({type : CREATE_USER , payload: response.data});

    history.push('/');
};


export const fetchUsers = () => async dispatch => {
    const response = await users.get('/users');

    dispatch({type : FETCH_USERS, payload: response.data});
};

export const fetchUser = (id) => async dispatch => {    
    const response = await users.get(`/users/${id}`);

    dispatch({type: FETCH_USER , payload: response.data});
};

