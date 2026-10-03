import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBanksDataForUser } from "../../apis/BanksApi";

export const fetchBanks = createAsyncThunk(
    "user/banks/fetch",
    async ({}, thunkApi) => {
        const banksData = await getBanksDataForUser();
        return banksData;
    }
)

/**
 * @typedef {Object} Bank
 * @property {string} id
 * @property {string} name
 * @property {number} balance
 * @property {string} linkedPhoneNumber 
 * @property {string} linkedEmail 
 */

const initialState = {
    /** @type {Bank[]} */
    value : []
}

export const banksSlice = createSlice({
    name : "banks",
    initialState,
    reducers : {
        addNewBank : (state, action) => {
            state.value.push(action.payload)
        },
        emptyBanks : (state) => {
            state.value = [];
        }
    },
    extraReducers : (builder) => {
        builder.addCase(
            fetchBanks.fulfilled,
            (state, action) => {
                state.value = action.payload;
            }
        )
    }
});

export const { addNewBank, emptyBanks } = banksSlice.actions;
export default banksSlice.reducer;