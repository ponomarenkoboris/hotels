import { useLayoutEffect } from 'react';
import useBookingActions from '../../hooks/useBookingActions';
import { useNavigate } from 'react-router-dom';
import { Search } from '../../components/Search/Search';
import { Favorites } from '../../components/Favorites/Favorites'
import { Results } from '../../components/Results/Results';
import logoutIcon from '../../assets/hotels-page/logout/logout.svg';
import './Booking.scss';

export const Booking = () => {
    const { getHotels } = useBookingActions()
    const navigate = useNavigate()
    const logoutHandler = () => {
        sessionStorage.removeItem('user')
        navigate('/')
    }

    useLayoutEffect(() => {
        const payload = { location: 'Москва', checkIn: new Date().toLocaleDateString(), duration: 1 }
        getHotels(payload)
    }, [])
    return (
        <div className='layout'>
            <header className='header__wrapper'>
                <div onClick={logoutHandler} className='header'>
                    <h1>Simple Hotel Check</h1>
                    <div className='logout'>
                        <p className='logout__text'>Выйти</p>
                        <img src={logoutIcon} alt="Logout" />
                    </div>
                </div>
            </header>
            <main className='hotels'>
                <div className="hotels__container">
                    <div className="sidebar">
                        <div className='search__wrapper'>
                            <Search />
                        </div>
                        <div className='favorites__wrapper'>
                            <Favorites />
                        </div>
                    </div>
                    <div className='results__wrapper'>
                        <Results />
                    </div>
                </div>
            </main>
        </div>
    )
}
