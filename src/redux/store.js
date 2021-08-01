import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./reducers";

const middleware = [
    ...getDefaultMiddleware(),
];

const store = configureStore({
    middleware,
    devTools: process.env.NODE_ENV === 'development',
    reducer: {counter: counterReducer}
});

export default store;