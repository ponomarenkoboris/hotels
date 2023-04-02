import { bindActionCreators } from "@reduxjs/toolkit";
import { favoritesActionCreators } from '../store/booking/bookigSlice';
import { useDispatch } from "react-redux";

const useFavoritesActions = () => {
    const dispatch = useDispatch()
    const actions = favoritesActionCreators()
    return bindActionCreators(actions, dispatch)
}

export default useFavoritesActions