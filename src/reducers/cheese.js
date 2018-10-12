import {FETCH_USER_SUCCESS} from '../actions/cheese'

const initialState={
        cheeses: [],
        loading: false,
        error: null
    
};

export const cheeseReducer = (state=initialState, action)=>{
    if (action.type ===FETCH_USER_SUCCESS ){

    }
    return state;
}