import goldStar from '../../assets/hotels-page/rating/gold-star.svg';
import greyStar from '../../assets/hotels-page/rating/grey-star.svg';
import './Hotel.scss';

export const Hotel = ({ name, startDate, duration, price, rating, isFavorite, onFavoriteClick }) => {
    const ratingStars = Array.from(Array(5), (_, idx) => idx + 1 <= rating)

    const endDefenition = (daysCount) => {
        const string = daysCount.toString()
        const lastChar = +string[string.length - 1]
    
        if (lastChar === 1) return `${daysCount} день`
        else if (lastChar >= 2 && lastChar <= 4) return `${daysCount} дня`
        else return `${daysCount} дней`
    }

    return (
        <div className='hotel'>
            <div className="booking">
                <div className="booking__info">
                    <p className='info__name'>{name}</p>
                    <div className='booking__dates'>
                        <p className='dates__start'>{startDate}</p>
                        <hr className='dates__line' />
                        <p className='dates__duration'>{endDefenition(duration)}</p>
                    </div>
                </div>
                <button className={isFavorite ? 'favorite__btn favorite' : 'favorite__btn'} onClick={onFavoriteClick}></button>
            </div>
            <div className="rating-price">
                <div className='rating'>
                    {ratingStars.map((item, idx) => <img src={item ? goldStar : greyStar} key={idx + 1} />)}
                </div>
                <div className='price__wrapper'>
                    <p className='price__text'>Price:</p>
                    <p className='price'>{price} ₽</p>
                </div>
            </div>
        </div>
    )
}
