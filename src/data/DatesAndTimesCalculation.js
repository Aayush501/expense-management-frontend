const presentDate = new Date();

const CalculatedDates = {
    currentMonth : (presentDate.getMonth() + 1) >= 10? (presentDate.getMonth() + 1) + "" : "0" + (presentDate.getMonth() + 1),
    currentYear : presentDate.getFullYear().toString()
}

const CalculatedTimes = {}

export {
    CalculatedDates,
    CalculatedTimes
}