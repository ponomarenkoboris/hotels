import { call, put, takeEvery } from 'redux-saga/effects';
import { bookingActionCreators } from './bookigSlice'
const { getHotelsFulfilled, getHotelsRejected } = bookingActionCreators()

const fetchHotels = (place, checkIn, checkOut) => 
    fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${place}&checkIn=${checkIn}&checkOut=${checkOut}&limit=8&currency=`)

const requestFormatDate = (date) => date.split('.').reverse().join('-')

function* workGetHotelsFetch(action) {
    try {
        const { location, checkIn, duration } = action.payload
        const [day, month, year] = checkIn.split('.')
        const checkOutDate = new Date(+year, +month - 1, +day)
        checkOutDate.setDate(checkOutDate.getDate() + +duration)
        const formatedCheckIn = requestFormatDate(checkIn)
        const formatedCheckOut = requestFormatDate(checkOutDate.toLocaleDateString())

        const response = yield call(() => fetchHotels(location, formatedCheckIn, formatedCheckOut))
        const hotels = yield response.json()
        yield put(getHotelsFulfilled({ hotels, location, checkIn: formatedCheckIn, duration, checkOut: formatedCheckOut }))
    } catch {
        yield put(getHotelsRejected())        
    }
}

function* bookingWatcher() {
    yield takeEvery('booking/getHotels', workGetHotelsFetch)
}

export default bookingWatcher