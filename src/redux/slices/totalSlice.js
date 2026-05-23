import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : []
}

export const totalSlice = createSlice({
    name : "total",
    initialState,
    reducers : {
        totalsFetchedSuccessfully : (state, action) => {
            state.value = action.payload;
        },
        emptyTotals : (state) => {
            state.value = [];
        }
    }
});

export const {totalsFetchedSuccessfully, emptyTotals} = totalSlice.actions;
export default totalSlice.reducer;