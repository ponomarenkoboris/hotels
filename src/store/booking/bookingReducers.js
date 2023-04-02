const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]

const getHotels = (state) => {
    state.isLoading = true
}

const getHotelsFulfilled = (state, { payload: { hotels, location, checkIn, duration } }) => {
    state.isLoading = false

    const formatedCheckIn = checkIn.split('-').reverse()
    formatedCheckIn[1] = months[+formatedCheckIn[1] - 1]

    const hotelCheckIn = formatedCheckIn
    hotelCheckIn[0] = +hotelCheckIn[0]
    const formatedHotelCheckIn = hotelCheckIn.join(' ')

    const formatedHotels = hotels.length ? hotels.map(hotel => ({ ...hotel, checkIn: formatedHotelCheckIn, duration, isFavorite: false })) : []

    state.location = location
    state.hotels = formatedHotels
    state.checkIn = formatedCheckIn.join(' ')

    return state
}

const getHotelsRejected = (state) => {
    state.isLoading = false
}

export {
    getHotels,
    getHotelsFulfilled,
    getHotelsRejected
}