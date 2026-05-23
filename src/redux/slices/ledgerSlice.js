import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : []
}

export const ledgerSlice = createSlice({
    name : "ledger",
    initialState,
    reducers : {
        ledgerFetchedSuccessfully : (state, action) => {
            state.value = action.payload
        },
        addNewLedgerEntry : (state, action) => {
            state.value.push(action.payload)
        },
        emptyLedger : (state) => {
            state.value = [];
        }
    }
});

export const { ledgerFetchedSuccessfully, addNewLedgerEntry, emptyLedger } = ledgerSlice.actions;
export default ledgerSlice.reducer;