import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMidelware from 'redux-saga';
import bookigSlice from "./booking/bookigSlice";
import bookingWatcher from "./booking/saga";

const rootReducer = combineReducers({
    booking: bookigSlice
})

const saga = createSagaMidelware()

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(bookingWatcher)

export default store