import { createSlice } from "@reduxjs/toolkit";
import image1 from '../../assets/hotels-page/results/img_1.png'
import image2 from '../../assets/hotels-page/results/img_1.png'
import image3 from '../../assets/hotels-page/results/img_3.png'
import * as bookingReducers from './bookingReducers';
import * as favoritesReducers from './favoritesReducers'

const images = [
    {id: 1, src: image1}, 
    {id: 2, src: image2}, 
    {id: 3, src: image3},
    {id: 4, src: image2}, 
    {id: 5, src: image3}
]

const initialState = {
    isLoading: false,
    images,
    checkIn: '',
    diration: 0,
    location: '',
    countInfavorites: 0,
    hotels: [],
    favorites: {
        count: 0,
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
        hotels: []
    }
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        ...bookingReducers,
        ...favoritesReducers,
    }
})

export default bookingSlice.reducer

export const bookingActionCreators = () => {
    const actions = bookingSlice.actions
    return actions
}

export const favoritesActionCreators = () => {
    const actions = bookingSlice.actions
    return actions
}