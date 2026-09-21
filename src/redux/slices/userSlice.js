import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username : "",
    name : "",
    password : ""
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        loginSuccessful : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        setName : (state, action) => {
            state.name = action.payload;
        },
        emptyUser : (state) => {
            state.username = "";
            state.name = "";
            state.password = "";
        }
    }
})

export const { loginSuccessful, setName, emptyUser } = userSlice.actions;

export default userSlice.reducer