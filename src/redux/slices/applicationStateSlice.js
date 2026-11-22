import { createSlice } from "@reduxjs/toolkit";
import { CalculatedDates } from "../../data/DatesAndTimesCalculation";

const initialState = {
    LedgerSummaryMonth : CalculatedDates.currentMonth,
    LedgerSummaryYear : CalculatedDates.currentYear
}

export const applicationStateSlice = createSlice({
    name : "applicationState",
    initialState,
    reducers : {
        setLedgerSummaryMonthAndYear : (state, action) => {
            state.LedgerSummaryMonth = action.payload.month;
            state.LedgerSummaryYear = action.payload.year;
        }
    }
})

export const { setLedgerSummaryMonthAndYear } = applicationStateSlice.actions;
export default applicationStateSlice.reducer;