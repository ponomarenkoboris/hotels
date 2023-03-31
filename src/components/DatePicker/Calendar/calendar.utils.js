const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
]

const weekDays = [
    'ПН',
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
    "ВС"
]

const getOptions = () => {
    const monthIdx = parseInt(new Date().getMonth())
    const year = parseInt(new Date().getFullYear())

    const filteredMonths = []
    const yearMonths = []

    for (let i = 0; i < months.length; i++) {
        if (i >= monthIdx) yearMonths.push(`${months[i]} ${year}`)
        else filteredMonths.push(`${months[i]} ${year + 1}`)
    }

    return yearMonths.concat(filteredMonths)
}

const getFormatDate = (day, month, year) => {
    const formatedDay = day >= 10 ? `${day}` : `0${day}`
    const formatedMonth = month >= 10 ? `${month}` : `0${month}`

    return `${formatedDay}.${formatedMonth}.${year}`
}

// day = { isWeekEnd: boolean, date: number, isCurrentMonth: boolean }
const getDaysInMonth = (date) => {
    const [day, month, year] = date.split('.').map(item => parseInt(item))
    const daysInMonth = new Date(year, month, 0).getDate()
    const monthIdx = month - 1 < 0 ? 11 : month - 1

    const weeks = [[]]
    let weekIdx = 0
    
    for (let i = 1; i <= daysInMonth; i++) {
        const dayOfWeek = new Date(year, monthIdx, i).getDay()

        const day = { isWeekEnd: dayOfWeek === 0 || dayOfWeek === 6 ? true : false, date: i, isCurrentMonth: true }
        weeks[weekIdx].push(day)

        if (dayOfWeek === 0) {
            weeks.push([])    
            weekIdx++
        }
    }

    // не хватает дней на первой неделе
    if (weeks[0].length !== 7) {
        const missingDaysCount = 7 - weeks[0].length;
        const prevYear = monthIdx === 0 ? year - 1 : year;
        const daysInPrevMonth = new Date(prevYear, monthIdx, 0).getDate()

        for (let i = daysInPrevMonth; i > daysInPrevMonth - missingDaysCount; i--) {
            const dayOfWeek = new Date(prevYear, monthIdx, i).getDay()
            const day = { isWeekEnd: dayOfWeek === 0 || dayOfWeek === 6 ? true : false, date: i, isCurrentMonth: false }
            weeks[0].unshift(day)
        }

    }

    // не хватает дней на последней неделе
    if (weeks[weeks.length - 1].length !== 7) {
        const missingDaysCount = 7 - weeks[weeks.length - 1].length
        const nextYear = monthIdx + 1 > 11 ? year + 1 : year
        const nextMonth = monthIdx + 1 > 11 ? 0  :monthIdx + 1

        for (let i = 1; i <= missingDaysCount; i++) {
            const dayOfWeek = new Date(nextYear, nextMonth, i).getDay()
            const day = { isWeekEnd: dayOfWeek === 0 || dayOfWeek === 6 ? true : false, date: i, isCurrentMonth: false }
            weeks[weeks.length - 1].push(day)
        }
    }

    return weeks.flat()
}

export {
    months,
    weekDays,
    getFormatDate,
    getOptions,
    getDaysInMonth
}