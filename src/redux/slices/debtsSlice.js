import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPaidDebtsForUser, fetchRemainingDebtsForUser } from "../../apis/DebtAPI";

export const fetchRemainingDebts = createAsyncThunk(
    '/user/fetch/debts/remaining',
    async ({}, thunkApi) => {
        const debts = await fetchRemainingDebtsForUser();
        return debts;
    }
)

export const fetchPaidDebt = createAsyncThunk(
    '/user/fetch/debts/paid',
    async ({}, thunkApi) => {
        const debts = await fetchPaidDebtsForUser();
        return debts;
    }
)

/**
 * @typedef {Object} Debt
 * @property {string} debtId
 * @property {number} amount
 * @property {string} takenFrom
 * @property {string} date
 * @property {string} description
 * @property {string} status
 */

const initialState = {
    /** @type {Debt[]} */
    value : []
}

export const debtsSlice = createSlice({
    name : "debts",
    initialState,
    reducers : {
        emptyDebts : (state) => {
            state.value = [];
        }
    },
    extraReducers : (builder) => {
        builder.addCase(
            fetchRemainingDebts.fulfilled,
            (state, action) => {
                state.value = action.payload;
            }
        )
        builder.addCase(
            fetchPaidDebt.fulfilled,
            (state, action) => {
                state.value = action.payload;
            }
        )
    }
});

export const { emptyDebts } = debtsSlice.actions;
export default debtsSlice.reducer;