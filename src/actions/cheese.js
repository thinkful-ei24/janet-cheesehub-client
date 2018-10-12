//cheese Actions

export const fetchCheeses = ()=>(dispatch)=>{
fetch('http://localhost:8080/api/cheeses')
.then(res=>res.json())
.then(res=>dispatch(fetchCheeseSuccess(res)))
.catch(error=>console.log(error))
}

export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST'
export const fetchCheeseRequest = ()=>{
    return {
        type: FETCH_CHEESE_REQUEST
    }
}

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS'
export const fetchCheeseSuccess = (cheeses)=>{
    return {
        type: FETCH_CHEESE_SUCCESS,
        cheeses
    }
}

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR'
export const fetchCheeseError = (error)=>{
    return {
        type: FETCH_CHEESE_ERROR,
        error
    }
}
