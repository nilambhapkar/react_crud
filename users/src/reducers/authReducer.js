import {SIGN_IN,SIGN_OUT} from '../actions/types';

const INTIAL_STATE ={
    isSignedIn : null,
    userId : null,
    userRole:null
};

export default (state = INTIAL_STATE,action)=>{
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn : true, userId:action.payload.id, userRole:action.payload.user_role  };
            break;
        case SIGN_OUT:
            return{...state , isSignedIn : false, userId:null, userRole:null };
            break;
        default:
            return state;
    }
};