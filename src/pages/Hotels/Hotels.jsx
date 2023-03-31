import { useNavigate } from 'react-router-dom';
import logoutIcon from '../../assets/hotels-page/logout/logout.svg';
import './Hotels.scss';

export const Hotels = () => {
    const navigate = useNavigate()
    const logoutHandler = () => {
        sessionStorage.removeItem('user')
        navigate('/')
    }
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
                        <div className='search__wrapper'></div>
                        <div className='favorites__wrapper'></div>
                    </div>
                    <div className='results'></div>
                </div>
            </main>
        </div>
    )
}
