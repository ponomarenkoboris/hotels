import { createSlice } from "@reduxjs/toolkit";
import { appendToFavorites, deleteFromFavorites, sortByPrice, sortByRating } from './reducers'

const initialState = {
    sort: {
        rating: {
            isSorting: true,
            isAscending: true
        },
        price: {
            isSorting: false,
            isAscending: false
        }
    },
    hotels: [
        {
            id: 0,
            name:'Moscow Marriott Grand Hotel',
            startDate: '28 June, 2020',
            duration: '1 день' ,
            rating: 1,
            price: '10 924',
            isFavorite: true,
        },
        {
            id: 1,
            name:'Moscow Marriott Grand Hotel',
            startDate: '28 June, 2020',
            duration: '2 день' ,
            rating: 3,
            price: '22 924',
            isFavorite: true,
        },
        {
            id: 2,
            name:'Moscow Marriott Grand Hotel',
            startDate: '28 June, 2020',
            duration: '3 день' ,
            rating: 2,
            price: '23 924',
            isFavorite: true,
        }
    ]
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        appendToFavorites, 
        deleteFromFavorites, 
        sortByPrice, 
        sortByRating
    }
})

export default favoritesSlice.reducer
export const getFavoritesActionCreators = () => favoritesSlice.actions