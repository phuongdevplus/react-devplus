import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR,
} from "../../reducers/constants/ActionTypes";


export const loadPosts = (urls) => async dispatch =>{
    try{
        dispatch({type: FETCH_POSTS_REQUEST})
        const url = urls;
        const response = await fetch(url);
        const responseBody = await response.json();
        dispatch({type: FETCH_POSTS_SUCCESS, data: responseBody})
    } catch (error){
        console.log(error)
        dispatch({type: FETCH_POSTS_ERROR, message: error})
    }
}

