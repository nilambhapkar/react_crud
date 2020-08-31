import _ from 'lodash';
import {
    FETCH_USERS,
    FETCH_USER,
    CREATE_USER,
   
} from '../actions/types';


export default (state={}, action)=>{
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, ..._.mapKeys(action.payload,'id') };
       
        case FETCH_USER:
        case CREATE_USER:
            return {...state, [action.payload.id]:action.payload};
   
        default:
            return state;
    }
};