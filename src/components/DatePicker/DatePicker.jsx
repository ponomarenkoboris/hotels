import { useReducer, useEffect, useRef } from 'react';
import { actionTypes, datePickerState, reducer, validator, calendarBlurListenerCreator } from './datePicker.utils'
import { Calendar } from './Calendar/Calendar';
import calendarIcon from '../../assets/hotels-page/date-picker/calendar.svg'
import './DatePicker.scss';

const isValid = validator()

export const DatePicker = ({ onChange }) => {
    const [{ pickedDate, isCalendar, inputValue }, dispatch] = useReducer(reducer, datePickerState)
    const blurListener = useRef(calendarBlurListenerCreator(() => dispatch({ type: actionTypes.TOOGLE_CALENDAR, payload: false })))
    
    const toogleCalendar = (event) => {
        event.stopPropagation()
        event.preventDefault()
        dispatch({ type: actionTypes.TOOGLE_CALENDAR, payload: !isCalendar })
    }


    const pickHandler = (date) => dispatch({ type: actionTypes.SET_DATE, payload: date })

    const onInputChange = (event) => {
        dispatch({ type: actionTypes.SET_INPUT_VALUE, payload: event.target.value })
        if (isValid(event.target.value)) {
            pickHandler(event.target.value)
        }
    }

    useEffect(() => {
        if (onChange) onChange(pickedDate)
    }, [pickedDate])

    useEffect(() => {
        if (isCalendar) document.addEventListener('click', blurListener.current)
        else if (!isCalendar) document.removeEventListener('click', blurListener.current)
    }, [isCalendar])

    return (
        <div className='date-picker__wrapper'>
            <div className="date-picker">
                <input className="date-picker__input" type="text" name='checkInDate' value={inputValue} onChange={onInputChange} />
                <button className='date-picker__open-calendar' onClick={toogleCalendar}>
                    <img src={calendarIcon} alt="Open calendar" />
                </button>
            </div>
            {isCalendar && <Calendar initialDate={pickedDate} onPick={pickHandler} />}
        </div>
    )
}
