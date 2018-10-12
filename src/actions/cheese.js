//cheese Actions

export const fetchCheeses = ()=>(dispatch)=>{
fetch('http://localhost:8080/api/cheeses')
.then(res=>res.json)
.then(res=>console.log(res))
.catch(error=>console.log(error))
}

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export const fetchCheeseRequest = ()=>{
    return {
        type: FETCH_USER_REQUEST
    }
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const fetchCheeseSuccess = (cheeses)=>{
    return {
        type: FETCH_USER_SUCCESS,
        cheeses
    }
}

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR'
export const fetchCheeseError = (error)=>{
    return {
        type: FETCH_USER_ERROR,
        error
    }
}
