import { Hotel } from '../Hotel/Hotel';
import { Slider } from '../Slider/Slider';
import { useSelector } from 'react-redux';
import useFavoritesActions from '../../hooks/useFavoritesActions';
import houseImg from '../../assets/hotels-page/hotel/house.svg';
import arrow from '../../assets/hotels-page/results/arrow.svg';
import './Results.scss'

export const Results = () => {
    const { hotels, location, checkIn, countInfavorites } = useSelector(store => store.booking)
    const { appendToFavorites, deleteFromFavorites } = useFavoritesActions()

    const onFavorite = (hotel) => () => {
        hotel.isFavorite ? deleteFromFavorites(hotel.hotelId) : appendToFavorites(hotel)
    }

    const endDefenition = (favoritesCount) => {
        const string = favoritesCount.toString()
        const lastChar = +string[string.length - 1]

        if (lastChar === 1) return ` отель`
        else return ` отеля`
    }

    return (
        <div className='results'>
            <div className='results__header'>
                <div className='header__location'>
                    <p className='location__text'>Отели</p>
                    <img src={arrow} alt="" />
                    <p className='location__text'>{location}</p>
                </div>
                <p className='header__date'>{checkIn}</p>
            </div>
            <Slider />
            <div className='search-results__wrapper'>
                <p className='results__favorites' style={{ visibility: countInfavorites ? 'visible' : 'hidden' }}>
                    Добавлено в Избранное: 
                        <span className='favorites__count'>{" "}{countInfavorites}</span> 
                    {endDefenition(countInfavorites)}
                </p>
                <div className='search-results'>
                    {hotels.map((hotel, idx) => (
                        <div key={hotel.hotelId}>
                            <div className='result'>
                                <div className="result__house">
                                    <img src={houseImg} alt={'Moscow Marriott Grand Hotel'} />
                                </div>
                                <Hotel 
                                    name={hotel.hotelName} 
                                    startDate={hotel.checkIn}
                                    duration={hotel.duration} 
                                    rating={hotel.stars} 
                                    price={hotel.priceAvg}
                                    isFavorite={hotel.isFavorite}
                                    onFavoriteClick={onFavorite(hotel)}
                                />
                            </div>
                            {idx !== hotels.length - 1 && <hr className='block__bottom' />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
