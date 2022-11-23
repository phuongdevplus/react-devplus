import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers/home/index'


const midleware = [thunk];
 if(process.env.NODE_ENV!=="production"){
    midleware.push(createLogger());
 }


export const store = createStore(reducers, applyMiddleware(...midleware))