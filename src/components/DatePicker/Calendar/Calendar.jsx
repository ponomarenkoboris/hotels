import { useState, useEffect } from 'react'
import { weekDays, getOptions, getDaysInMonth, getFormatDate, months } from './calendar.utils';
import arrow from '../../../assets/hotels-page/date-picker/back.svg';
import './Calendar.scss';

export const Calendar = ({ initialDate, onPick }) => {
    const state = initialDate.split('.').reduce((total, curr, idx) => {
        if (idx === 0) total.day = +curr
        if (idx === 1) total.month = +curr
        if (idx === 2) total.year = +curr
        return total
    }, {})
    const options = getOptions()
    const [{ day, month, year, optionValue }, setDate] = useState({ ...state, optionValue: options[0]})
    const days = getDaysInMonth(getFormatDate(day, month, year))

    const pickDate = (event) => {
        event.preventDefault()
        const targetDay = event.target.dataset.day || null
        if (targetDay && !event.target.classList.contains('choosen__day') && !event.target.classList.contains('disabled__day')) {
            event.target.classList.add('choosen__day')
            setDate(date => ({ ...date, day: parseInt(targetDay) }))
            onPick(getFormatDate(targetDay, month, year))
        }
    }

    const prevMonthHandler = () => {
        if (optionValue === options[0]) return
        const prevMonth = month - 1 < 0 ? 11 : month - 1
        const option = options.find(option => option.includes(months[prevMonth - 1]))
        setDate(date => ({ ...date, month: prevMonth, optionValue: option }))
    }

    const nextMonthHandler = () => {
        if (optionValue === options[options.length - 1]) return
        const nextMonth = month + 1 > 11 ? 0 : month + 1
        const option = options.find(option => option.includes(months[nextMonth - 1]))
        setDate(date => ({ ...date, month: nextMonth, optionValue: option }))
    }

    const changeMonthHandler = (event) => {
        const [month, year] = event.target.value.split(' ')
        const monthNumber = months.indexOf(month) + 1
        const optionValue = options.find(option => option.includes(months[monthNumber - 1]))
        setDate(date => ({ ...date, month: monthNumber, year, optionValue }))
    }

    const todayClickHandler = () => {
        const [day, month, year] = new Date().toLocaleDateString().split('.').map(item => parseInt(item))
        const optionValue = options.find(option => option.includes(months[month - 1]))
        setDate({ day, month, year, optionValue  })
        onPick(getFormatDate(day, month, year))
    }

    const configurateDayClassName = (date, isWeekEnd, isCurrentMonth) => {
        const currentDate = new Date()
        if (!isCurrentMonth 
            || date < currentDate.getDate() && month === currentDate.getMonth() + 1) return 'disabled__day'
        
        if (initialDate === getFormatDate(day, month, year) && date === day) return 'choosen__day'
        
        if (isWeekEnd) return 'day__weekend'

        return 'day'
    }

    useEffect(() => {
        const optionValue = options.find(option => option.includes(months[parseInt(state.month) - 1]))
        setDate({ 
            day: state.day, 
            month: state.month, 
            year: state.year, 
            optionValue
        })
    }, [state.day, state.month, state.year])

    return (
        <div className='calendar'>
            <div className="calendar__month">
                <select className='month__select' value={optionValue} onChange={changeMonthHandler}>
                    {options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
                <div className='month__controllers'>
                    <button 
                        className={`prev-month controller ${optionValue === options[0] ? 'disabled__controller': null}`} 
                        onClick={prevMonthHandler}
                    >
                        <img src={arrow} alt="Предидущий месяц" />
                    </button>
                    <button 
                        className={`next-month controller ${optionValue === options[options.length - 1] ? 'disabled__controller': null}`} 
                        onClick={nextMonthHandler}
                    >
                        <img src={arrow} alt="Следующий месяц" />
                    </button>
                </div>
            </div>
            <div className="calendar__days" onClick={pickDate}>
                {weekDays.map(item => <button key={item} className='day day__name'>{item}</button>)}
                {days.map(({ date, isWeekEnd, isCurrentMonth }) => (
                    <button
                        data-day={isCurrentMonth ? date : null}
                        key={date + Math.random() * 1000} 
                        className={configurateDayClassName(date, isWeekEnd, isCurrentMonth)}
                    >{date}</button>
                ))}
            </div>
            <button className="calendar__today" onClick={todayClickHandler}>Сегодня</button>
        </div>
    )
}
