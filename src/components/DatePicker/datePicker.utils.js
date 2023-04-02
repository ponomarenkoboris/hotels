const dateRegExp = new RegExp(/(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/)

const validator = () => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth()
    let currentYear = currentDate.getFullYear()
    
    const yearRange = []

    for (let i = 0, j = currentMonth; i < 12; i++, j++) {

        if (j === 12) {
            j = 0
            currentYear++
        }
        yearRange.push(`${j + 1 < 10 ? `0${j + 1}` : j + 1}.${currentYear}`)
    }

    return (date) => {
        const [_, month, year] = date.split('.')
        return yearRange.some(item => item === `${month}.${year}`) && dateRegExp.test(date)
    }
    
}

const datePickerState = {
    pickedDate: new Date().toLocaleDateString(),
    isCalendar: false,
    inputValue: new Date().toLocaleDateString()
}

const actionTypes = {
    SET_DATE: 'SET_DATE',
    TOOGLE_CALENDAR: 'TOOGLE_CALENDAR',
    SET_INPUT_VALUE: 'SET_INPUT_VALUE'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_DATE:
            return { isCalendar: false, pickedDate: action.payload, inputValue: action.payload }
        case actionTypes.TOOGLE_CALENDAR:
            return { ...state, isCalendar: action.payload }
        case actionTypes.SET_INPUT_VALUE:
            return { ...state, inputValue: action.payload }
        default:
            return state
    }
}

const calendarBlurListenerCreator = (closeCallback) => {
    return (event) => {
        event.stopPropagation();
        if (!event.target.closest('.calendar') && !event.target.closest('.date-picker__input')) {
            closeCallback()
        }
    }
}

export {
    validator,
    calendarBlurListenerCreator,
    dateRegExp,
    datePickerState,
    actionTypes,
    reducer
}