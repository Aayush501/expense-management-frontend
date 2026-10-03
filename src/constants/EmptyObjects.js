import { CalculatedDates } from "../data/DatesAndTimesCalculation";

export const emptyLedgerSummaryObject = {
    month : CalculatedDates.currentMonth,
    year : CalculatedDates.currentYear,
    credit : {
        total : 0
    },
    debit : {
        total : 0
    },
    netCOrD : {
        total : {
            amount : 0,
            COrD : "Undefined"
        }
    }
}