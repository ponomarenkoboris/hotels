const sortByRating = (state) => {
    if (!state.favorites.sort.rating.isSorting) {
        state.favorites.sort = { price: { ...state.favorites.sort.price, isSorting: false }, rating: { ...state.favorites.sort.rating, isSorting: true } }
    } else {
        state.favorites.sort = { ...state.favorites.sort, rating: { ...state.favorites.sort.rating, isAscending: !state.favorites.sort.rating.isAscending } }
    }

    state.favorites.hotels.sort((prev, next) => 
        state.favorites.sort.rating.isAscending ? prev.stars - next.stars : next.stars - prev.stars 
    )
}

const sortByPrice = (state) => {
    if (!state.favorites.sort.price.isSorting) {
        state.favorites.sort = { price: { ...state.favorites.sort.price, isSorting: true }, rating: { ...state.favorites.sort.rating, isSorting: false } }
    } else {
        state.favorites.sort = { ...state.favorites.sort, price: { ...state.favorites.sort.price, isAscending: !state.favorites.sort.price.isAscending } }
    }

    state.favorites.hotels.sort((prev, next) => 
        state.favorites.sort.price.isAscending ? parseInt(prev.priceAvg) - parseInt(next.priceAvg) :  parseInt(next.priceAvg) - parseInt(prev.priceAvg) 
    )
}

const deleteFromFavorites = (state, { payload }) => {
    for (let i = 0; i < state.hotels.length; i++) {
        if (state.hotels[i].hotelId === payload) {
            state.hotels[i].isFavorite = false
            break;
        }
    }
    state.countInfavorites--
    state.favorites.hotels = state.favorites.hotels.filter(hotel => hotel.hotelId !== payload)
}

const appendToFavorites = (state, { payload }) => {
    for (let i = 0; i < state.hotels.length; i++) {
        if (state.hotels[i].hotelId === payload.hotelId) {
            state.hotels[i].isFavorite = true
            break;
        }
    }
    state.countInfavorites++
    state.favorites.hotels.push(payload)
}

export {
    sortByRating,
    sortByPrice,
    deleteFromFavorites,
    appendToFavorites
}