import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : []
}

export const receivablesSlice = createSlice({
    name : "receivables",
    initialState,
    reducers : {
        receivablesFetchedSuccessfully : (state, action) => {
            state.value = action.payload
        },
        addNewReceivable : (state, action) => {
            state.value.push(action.payload)
        },
        emptyReceivables : (state) => {
            state.value = [];
        }
    }
});

export const { receivablesFetchedSuccessfully, addNewReceivable, emptyReceivables } = receivablesSlice.actions;
export default receivablesSlice.reducer;