import { Hotel } from '../Hotel/Hotel'
import { useSelector } from 'react-redux'
import useFavoritesActions from '../../hooks/useFavoritesActions'
import enaubledFilter from '../../assets/hotels-page/filter/enable.svg'
import disabledFilter from '../../assets/hotels-page/filter/disable.svg'
import './Favorites.scss'

export const Favorites = () => {
    const { favorites: { sort, hotels } } = useSelector(store => store.booking)
    const { deleteFromFavorites, sortByPrice, sortByRating } = useFavoritesActions()

    const removeFromFavorites = (id) => deleteFromFavorites(id)

    const ratingSorting = () => sortByRating()
    
    const priceSorting = () => sortByPrice()

    return (
        <div className='favorites'>
            <p className='favorites__title'>Избранное</p>
            <div className="filter">
                <button className={sort.rating.isSorting ? 'filter__rating' : 'filter__rating disabled'} onClick={ratingSorting}>
                    Рейтинг
                    <img src={sort.rating.isSorting ? enaubledFilter : disabledFilter} className={!sort.rating.isAscending ? 'descending' : ''} alt="" />
                </button>
                <button className={sort.price.isSorting ? 'filter__price' : 'filter__price disabled'} onClick={priceSorting}>
                    Цена
                    <img src={sort.price.isSorting ? enaubledFilter : disabledFilter} className={!sort.price.isAscending ? 'descending' : ''} alt="" />
                </button>
            </div>
            <div className='favorites__hotels'>
                {hotels.map((hotel, idx) => (
                    <div key={hotel.hotelId}>
                        <Hotel 
                            name={hotel.hotelName} 
                            startDate={hotel.checkIn}
                            duration={hotel.duration} 
                            rating={hotel.stars} 
                            price={hotel.priceAvg}
                            isFavorite={true}
                            onFavoriteClick={() => removeFromFavorites(hotel.hotelId)}
                        />
                        {idx !== hotels.length - 1 && <hr className='block__bottom' />}
                    </div>
                ))}
            </div>
        </div>
    )
}
