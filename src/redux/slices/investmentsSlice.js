import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchInvestmentLedger, fetchInvestmentsforUser } from "../../apis/InvestmentApi";

export const fetchInvestmentsForSpecificUser = createAsyncThunk(
    '/user/fetch/investments',
    async ({}, thunkApi) => {
        const investments = await fetchInvestmentsforUser();
        return investments;
    }
)

export const fetchInvestmentLedgerForSpecificUser = createAsyncThunk(
    '/user/fetch/investment/ledger',
    async ({}, thunkApi) => {
        const investmentLedger = await fetchInvestmentLedger();
        return investmentLedger;
    }
)

/**
 * @typedef {Object} Investment
 * @property {string} id
 * @property {string} name
 * @property {string} type
 * @property {number} installmentAmount
 * @property {number} cumulative
 * @property {number} payment
 * @property {number} currentValue
 */

const initialState = {
    /** @type {Investment[]} */
    value : [],
    ledger : []
}

export const investmentsSlice = createSlice({
    name : "investments",
    initialState,
    reducers : {
        emptyInvestments : (state) => {
            state.value = [];
        }
    },
    extraReducers : (builder) => {
        builder.addCase(
            fetchInvestmentsForSpecificUser.fulfilled,
            (state, action) => {
                state.value = action.payload;
            }
        )
        builder.addCase(
            fetchInvestmentLedgerForSpecificUser.fulfilled,
            (state, action) => {
                state.ledger = action.payload;
            }
        )
    }
});

export const {investmentsFetchedSuccessfully, addInvestments, emptyInvestments} = investmentsSlice.actions;
export default investmentsSlice.reducer;