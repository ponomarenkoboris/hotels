const sortByRating = (state) => {
    if (!state.sort.rating.isSorting) {
        state.sort = { price: { ...state.sort.price, isSorting: false }, rating: { ...state.sort.rating, isSorting: true } }
    } else {
        state.sort = { ...state.sort, rating: { ...state.sort.rating, isAscending: !state.sort.rating.isAscending } }
    }

    state.hotels = state.hotels.sort((a, b) => state.sort.rating.isAscending ? a.rating - b.rating : b.rating - a.rating )

    return state
}

const sortByPrice = (state) => {
    if (!state.sort.price.isSorting) {
        state.sort = { price: { ...state.sort.price, isSorting: true }, rating: { ...state.sort.rating, isSorting: false } }
    } else {
        state.sort = { ...state.sort, price: { ...state.sort.price, isAscending: !state.sort.price.isAscending } }
    }

    state.hotels = state.hotels.sort((a, b) => 
        state.sort.price.isAscending ? parseInt(a.price) - parseInt(b.price) :  parseInt(b.price) -  parseInt(a.price) 
    )

    return state
}

// TODO remove id
const deleteFromFavorites = (state, { payload }) => ({...state, hotels: state.hotels.filter(hotel => hotel.id !== payload)})

const appendToFavorites = (state, { payload }) => {
    // TODO romove id
    state.hotels.push({ ...payload, id: state.length + 1})
}

export {
    sortByRating,
    sortByPrice,
    deleteFromFavorites,
    appendToFavorites
}