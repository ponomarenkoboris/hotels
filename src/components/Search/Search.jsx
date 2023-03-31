import { DatePicker } from '../DatePicker/DatePicker'

import './Search.scss'

export const Search = () => {
    const submitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={submitHandler} className='search'>
            <label className='location'>
                <p className='search__label-text'>Локация</p>
                <input type="text" defaultValue={'Москва'} className='location__input' name='location' />
            </label>
            <label className='check-in'>
                <p className='search__label-text'>Дата заселения</p>
                <DatePicker onChange={(date) => { console.log(date) }} />
            </label>
            <label className='days-count'>
                <p className='search__label-text'>Количесвто дней</p>
                <input type="number" defaultValue={1} className='days-count__input' name='daysCount' />
            </label>
            <button className='button'>Найти</button>
        </form>
    )
}
