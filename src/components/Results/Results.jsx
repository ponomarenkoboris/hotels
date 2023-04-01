import { Hotel } from '../Hotel/Hotel';
import { Slider } from '../Slider/Slider';
import useFavoritesActions from '../../hooks/useFavoritesActions';
import houseImg from '../../assets/hotels-page/hotel/house.svg';
import arrow from '../../assets/hotels-page/results/arrow.svg';
import './Results.scss'

// TODO remove
const mockHotel = {
    name:'Moscow Marriott Grand Hotel',
    startDate: '28 June, 2020',
    duration: '2 день' ,
    rating: 3,
    price: '23 924',
    isFavorite: true,
}
export const Results = () => {
    const { appendToFavorites } = useFavoritesActions()

    const onFavorite = (hotel) => appendToFavorites(hotel)

    return (
        <div className='results'>
            <div className='results__header'>
                <div className='header__location'>
                    <p className='location__text'>Отели</p>
                    <img src={arrow} alt="" />
                    <p className='location__text'>Москва</p>
                </div>
                <p className='header__date'>07 июля 2020</p>
            </div>
            <Slider />
            <div className='search-results__wrapper'>
                <p className='results__favorites'>Добавлено в Избранное: <span className='favorites__count'>3</span> отеля</p>
                <div className='search-results'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => (
                        <div key={item}>
                            <div className='result'>
                                <div className="result__house">
                                    <img src={houseImg} alt={'Moscow Marriott Grand Hotel'} />
                                </div>
                                <Hotel 
                                    name={'Moscow Marriott Grand Hotel'} 
                                    startDate={'28 June, 2020'}
                                    duration={'1 день'} 
                                    rating={3} 
                                    price={'23 924'}
                                    isFavorite={false}
                                    onFavoriteClick={() => onFavorite(mockHotel)}
                                />
                            </div>
                            {item !== 13 && <hr className='block__bottom' />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
