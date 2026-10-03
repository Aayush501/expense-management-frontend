import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchBudgetForSpecificMonthForUser } from "../../apis/BudgetApi";

export const fetchBudget = createAsyncThunk(
    '/user/fetch/budget',
    async ({month, year}, thunkApi) => {
        const budgetData = await fetchBudgetForSpecificMonthForUser(month, year);
        return budgetData;
    }
)

/**
 * @typedef {Object} Credit
 * @property {string} id
 * @property {string} name
 * @property {number} amount
 */

/**
 * @typedef {Object} Debit
 * @property {string} id
 * @property {string} name
 * @property {number} expectedAmount
 * @property {number} actualAmount
 */

/**
 * @typedef {Object} Shared
 * @property {string} month
 * @property {string} year
 */

const initialState = {
    /** @type {Credit[]} */
    credit : [],

    /** @type {Debit[]} */
    debit : [],

    /** @type {Shared} */
    shared : [] 
}

export const budgetSlice = createSlice({
    name : "budget",
    initialState,
    reducers : {
        emptyBudget : (state) => {
            state.credit = [];
            state.debit = [];
            state.shared = [];
        }
    }, 
    extraReducers : (builder) => {
        builder.addCase(
            fetchBudget.fulfilled,
            (state, action) => {
                state.credit = action.payload.length===0? [] : action.payload.credit;
                state.debit = action.payload.length===0? [] : action.payload.debit;
                state.shared = {
                    month : action.payload.length===0? [] : action.payload.month,
                    year : action.payload.length===0? [] : action.payload.year,
                    totalSavings : action.payload.length===0? [] : action.payload.totalSavings
                }
            }
        )
    }
});

export const {budgetFetchedSuccessfully, emptyBudget} = budgetSlice.actions;
export default budgetSlice.reducer;