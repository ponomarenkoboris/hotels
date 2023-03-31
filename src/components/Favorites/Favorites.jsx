import { Hotel } from '../Hotel/Hotel'
import enaubledFilter from '../../assets/hotels-page/filter/enable.svg'
import disabledFilter from '../../assets/hotels-page/filter/disable.svg'
import './Favorites.scss'

export const Favorites = () => {
    return (
        <div className='favorites'>
            <p className='favorites__title'>Избранное</p>
            <div className="filter">
                <button className='filter__rating'>
                    Рейтинг
                    <img src={enaubledFilter} alt="" />
                </button>
                <button className='filter__price disabled'>
                    Цена
                    <img src={disabledFilter} alt="" />
                </button>
            </div>
            <div className='favorites__hotels'>
                {[1, 2, 3].map(item => (
                    <div key={item}>
                        <Hotel 
                            name={'Moscow Marriott Grand Hotel'} 
                            startDate={'28 June, 2020'}
                            duration={'1 день'} 
                            rating={3} 
                            price={'23 924'}
                        />
                        {item !== 3 && <hr className='block__bottom' />}
                    </div>
                ))}
            </div>
        </div>
    )
}
