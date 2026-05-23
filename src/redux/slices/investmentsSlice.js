import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : []
}

export const investmentsSlice = createSlice({
    name : "investments",
    initialState,
    reducers : {
        investmentsFetchedSuccessfully : (state, action) => {
            state.value = action.payload;
        },
        addInvestments : (state, action) => {
            state.value.push(action.payload);
        },
        emptyInvestments : (state) => {
            state.value = [];
        }
    }
});

export const {investmentsFetchedSuccessfully, addInvestments, emptyInvestments} = investmentsSlice.actions;
export default investmentsSlice.reducer;