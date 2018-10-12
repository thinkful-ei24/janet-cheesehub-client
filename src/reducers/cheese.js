import {FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_ERROR} from '../actions/cheese'
import { isNull } from 'util';

const initialState={
        cheeses: [],
        loading: false,
        error: null
    
};

export const cheeseReducer = (state=initialState, action)=>{
    if (action.type ===FETCH_USER_REQUEST ){
        return Object.assign({}, state, {loading:true})
    } else if (action.type ===FETCH_USER_SUCCESS ){
        return Object.assign({}, state, {loading:false, error:null, cheeses: action.cheeses})
    }else if (action.type ===FETCH_USER_ERROR ){
        return Object.assign({}, state, {loading:false, error:action.error})
    }
    return state;
}