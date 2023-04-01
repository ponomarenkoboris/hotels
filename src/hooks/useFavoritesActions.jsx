import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getFavoritesActionCreators } from '../store/favorites/favoritesSlice';

const useFavoritesActions = () => {
    const dispatch = useDispatch()
    const actionCreators = getFavoritesActionCreators()
    return bindActionCreators(actionCreators, dispatch)
}

export default useFavoritesActions