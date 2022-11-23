import { combineReducers } from "redux";

import postReducers from "../rootReducer";

const reducers = combineReducers({posts: postReducers})

export default (state, action) => reducers(state, action)