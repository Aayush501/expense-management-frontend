import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginApiCall } from "../../apis/AuthApis"

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({username, password}, thunkApi) => {
        const userData = await loginApiCall(username, password);
        return userData;
    }
)


/**
 * @typedef {Object} User
 * @property {string} username
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} phone
 */

const initialState = {
    /** @type {User} */
    value : {
        username : "",
        firstName : "",
        lastName : "",
        email : "",
        phone : ""
    }
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        emptyUser : (state) => {
            state.value = {
                username : "",
                firstName : "",
                lastName : "",
                email : "",
                phone : ""
            }
        }
    },
    extraReducers : (builder) => {
        builder.addCase(
            loginUser.fulfilled, 
            (state, action) => {
                state.value.username = action.payload.username;
                state.value.firstName = action.payload.firstName;
                state.value.lastName = action.payload.lastName;
                state.value.email = action.payload.email;
                state.value.phone = action.payload.phone;
            }
        )
    }
})

export const { emptyUser } = userSlice.actions;

export default userSlice.reducer