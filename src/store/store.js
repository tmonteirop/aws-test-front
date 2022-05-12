import { createStore, applyMiddleware } from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'

// FOR DISPATCH (ASYNC)
import thunk from "redux-thunk";

import combineReducer from './combineReducer';

const middleware = [thunk]

export const store = createStore(
    combineReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)