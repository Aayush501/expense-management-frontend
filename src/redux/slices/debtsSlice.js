import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : []
}

export const debtsSlice = createSlice({
    name : "debts",
    initialState,
    reducers : {
        debtsFetchedSuccessfully : (state, action) => {
            state.value = action.payload
        },
        addNewDebt : (state, action) => {
            state.value.push(action.payload)
        },
        emptyDebts : (state) => {
            state.value = [];
        }
    }
});

export const { debtsFetchedSuccessfully, addNewDebt, emptyDebts } = debtsSlice.actions;
export default debtsSlice.reducer;