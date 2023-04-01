import { Hotel } from '../Hotel/Hotel'
import { useSelector } from 'react-redux'
import useFavoritesActions from '../../hooks/useFavoritesActions'
import enaubledFilter from '../../assets/hotels-page/filter/enable.svg'
import disabledFilter from '../../assets/hotels-page/filter/disable.svg'
import './Favorites.scss'

export const Favorites = () => {
    const { hotels, sort: { rating, price } } = useSelector(store => store.favorites)
    const { deleteFromFavorites, sortByPrice, sortByRating } = useFavoritesActions()

    const removeFromFavorites = (id) => deleteFromFavorites(id)

    const ratingSorting = () => sortByRating()
    
    const priceSorting = () => sortByPrice()

    return (
        <div className='favorites'>
            <p className='favorites__title'>Избранное</p>
            <div className="filter">
                <button className={rating.isSorting ? 'filter__rating' : 'filter__rating disabled'} onClick={ratingSorting}>
                    Рейтинг
                    <img src={rating.isSorting ? enaubledFilter : disabledFilter} className={!rating.isAscending ? 'descending' : ''} alt="" />
                </button>
                <button className={price.isSorting ? 'filter__price' : 'filter__price disabled'} onClick={priceSorting}>
                    Цена
                    <img src={price.isSorting ? enaubledFilter : disabledFilter} className={!price.isAscending ? 'descending' : ''} alt="" />
                </button>
            </div>
            <div className='favorites__hotels'>
                {hotels.map(item => (
                    <div key={item.id}>
                        <Hotel 
                            name={item.name} 
                            startDate={item.startDate}
                            duration={item.duration} 
                            rating={item.rating} 
                            price={item.price}
                            isFavorite={item.isFavorite}
                            onFavoriteClick={() => removeFromFavorites(item.id)}
                        />
                        {item !== 3 && <hr className='block__bottom' />}
                    </div>
                ))}
            </div>
        </div>
    )
}
