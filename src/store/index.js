import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/favoritesSlice";
import bookigSlice from "./booking/bookigSlice";

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    booking: bookigSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store