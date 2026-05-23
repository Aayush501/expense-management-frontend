import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : []
}

export const banksSlice = createSlice({
    name : "banks",
    initialState,
    reducers : {
        banksFetchedSuccessfully : (state, action) => {
            state.value = action.payload
        },
        addNewBank : (state, action) => {
            state.value.push(action.payload)
        },
        emptyBanks : (state) => {
            state.value = [];
        }
    }
});

export const { banksFetchedSuccessfully, addNewBank, emptyBanks } = banksSlice.actions;
export default banksSlice.reducer;