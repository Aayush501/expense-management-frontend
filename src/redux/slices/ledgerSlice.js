import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchLedgerForUser, fetchLedgerForBank, fetchLedgerSummary } from "../../apis/LedgerApi";

export const fetchLedger = createAsyncThunk(
    '/user/fetch/ledger',
    async ({}, thunkApi) => {
        const ledgerData = await fetchLedgerForUser();
        return ledgerData;
    }
)

export const fetchLedgerForSpecificBank = createAsyncThunk(
    '/user/fetch/ledger/bank',
    async ({bankId}, thunkApi) => {
        const ledgerData = await fetchLedgerForBank(bankId);
        return ledgerData;
    }
)

export const fetchLedgerSummaryForSpecificMonth = createAsyncThunk(
    '/user/fetch/ledger/summary',
    async ({month, year}, thunkApi) => {
        const ledgerSummary = await fetchLedgerSummary(month, year);
        return ledgerSummary;
    }
)

/** 
 * @typedef {Object} Ledger
 * @property {string} id
 * @property {string} date
 * @property {string} description
 * @property {number} amount
 * @property {string} type
 * @property {string} bankId
 * @property {string} walletId
 * @property {number} balanceAfterThisTransaction
*/

const initialState = {
    /** @type {Ledger[]} */
    value : [],
    summary : {
        month : "",
        year : "",
        credit : {
            total : 0
        },
        debit : {
            total : 0
        },
        netCOrD : {
            total : {
                amount : 0
            }
        }
    }
}

export const ledgerSlice = createSlice({
    name : "ledger",
    initialState,
    reducers : {
        emptyLedger : (state) => {
            state.value = [];
            state.summary = {
                month : "",
                year : "",
                credit : {
                    total : 0
                },
                debit : {
                    total : 0
                },
                netCOrD : {
                    total : {
                        amount : 0
                    }
                }
            }
        }
    },
    extraReducers : (builder) => {
        builder.addCase(
            fetchLedger.fulfilled,
            (state, action) => {
                state.value = action.payload;
            }
        )
        builder.addCase(
            fetchLedgerForSpecificBank.fulfilled,
            (state, action) => {
                state.value = action.payload;
            }
        )
        builder.addCase(
            fetchLedgerSummaryForSpecificMonth.fulfilled,
            (state, action) => {
                state.summary = action.payload
            }
        )
    }
});

export const { emptyLedger } = ledgerSlice.actions;
export default ledgerSlice.reducer;