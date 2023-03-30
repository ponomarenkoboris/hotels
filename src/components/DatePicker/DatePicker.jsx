import { useReducer, useEffect } from 'react';
import { actionTypes, datePickerState, reducer, validator } from './datePicker.utils'
import { Calendar } from './Calendar/Calendar';
import calendarIcon from '../../assets/hotels-page/date-picker/calendar.svg'
import './DatePicker.scss';

const isValid = validator()

export const DatePicker = ({ onChange }) => {
    const [{ pickedDate, isCalendar, inputValue }, dispatch] = useReducer(reducer, datePickerState)
    
    const toogleCalendar = () => dispatch({ type: actionTypes.TOOGLE_CALENDAR, payload: !isCalendar })

    const pickHandler = (date) => dispatch({ type: actionTypes.SET_DATE, payload: date })

    const onInputChange = (event) => {
        dispatch({ type: actionTypes.SET_INPUT_VALUE, payload: event.target.value })
        if (isValid(event.target.value)) {
            pickHandler(event.target.value)
        }
    }

    useEffect(() => {
        onChange(pickedDate)
    }, [pickedDate])

    return (
        <div className='date-picker__wrapper'>
            <div className="date-picker">
                <input className="date-picker__input" type="text" value={inputValue} onChange={onInputChange} />
                <button className='date-picker__open-calendar' onClick={toogleCalendar}>
                    <img src={calendarIcon} alt="Open calendar" />
                </button>
            </div>
            {isCalendar && <Calendar initialDate={pickedDate} onPick={pickHandler} />}
        </div>
    )
}
