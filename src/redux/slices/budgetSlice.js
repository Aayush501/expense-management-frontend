import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    credit : [],
    debit : [] 
}

export const budgetSlice = createSlice({
    name : "budget",
    initialState,
    reducers : {
        budgetFetchedSuccessfully : (state, action) => {
            state.credit = action.payload.credit;
            state.debit = action.payload.debit;
        },
        emptyBudget : (state) => {
            state.credit = [];
            state.debit = [];
        }
    }
});

export const {budgetFetchedSuccessfully, emptyBudget} = budgetSlice.actions;
export default budgetSlice.reducer;