import appReducer from "./store";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([])
    },
    reducer: combineReducers({
        appReducer: appReducer
    })
})

export default store;