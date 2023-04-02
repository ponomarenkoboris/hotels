import { bindActionCreators } from "@reduxjs/toolkit";
import { bookingActionCreators } from "../store/booking/bookigSlice";
import { useDispatch } from "react-redux";

const useBookingActions = () => {
    const dispatch = useDispatch()
    const { getHotels } = bookingActionCreators()
    return bindActionCreators({ getHotels }, dispatch)
}

export default useBookingActions;