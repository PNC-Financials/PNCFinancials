import {rootReducer} from "./reducer";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

// Import your combined reducers here


const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), thunkMiddleware],
})

const {dispatch} = store;

export{store, dispatch};