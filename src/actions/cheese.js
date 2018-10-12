//cheese Actions

export const fetchCheeses = ()=>(dispatch)=>{
fetch('http://localhost:8080/api/cheeses')
.then(res=>res.json)
.then(res=>console.log(res))
.catch(error=>console.log(error))
}

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const fetchCheeseSuccess = ()=>{
    return {
        type: FETCH_USER_SUCCESS
    }
}