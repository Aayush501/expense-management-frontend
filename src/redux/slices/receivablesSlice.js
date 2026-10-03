import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchReceivedReceivablesForUser, fetchRemainingReceivablesForUser } from "../../apis/ReceivableApi";

export const fetchRemainingReceivables = createAsyncThunk(
    '/user/fetch/receivables/remaining',
    async ({}, thunkApi ) => {
        const receivables = await fetchRemainingReceivablesForUser();
        return receivables;
    }
)

export const fetchReceivedReceivables = createAsyncThunk(
    '/user/fetch/receivables/received',
    async ({}, thunkApi) => {
        const receivables = await fetchReceivedReceivablesForUser();
        return receivables;
    }
)

/**
 * @typedef {Object} Receivable
 * @property {string} id
 * @property {string} givenTo
 * @property {number} amount
 * @property {string} date
 * @property {string} description
 * @property {string} status
 */

const initialState = {
    /** @type {Receivable[]} */
    remaining : [],

    /** @type {Receivable[]} */
    received : []
}

export const receivablesSlice = createSlice({
    name : "receivables",
    initialState,
    reducers : {
        emptyReceivables : (state) => {
            state.remaining = [];
            state.received = [];
        }
    },
    extraReducers : (builder) => {
        builder.addCase(
            fetchRemainingReceivables.fulfilled,
            (state, action) => {
                state.remaining = action.payload;
            }
        )
        builder.addCase(
            fetchReceivedReceivables.fulfilled,
            (state, action) => {
                state.received = action.payload;
            }
        )
    }
});

export const { emptyReceivables } = receivablesSlice.actions;
export default receivablesSlice.reducer;