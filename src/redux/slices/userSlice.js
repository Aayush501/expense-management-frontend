import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username : "",
    name : "",
    password : "",
    startDay : null
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        loginSuccessful : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        setStartDay : (state, action) => {
            state.startDay = action.payload;
        },
        setName : (state, action) => {
            state.name = action.payload;
        },
        emptyUser : (state) => {
            state.username = "";
            state.name = "";
            state.password = "";
            state.startDay = "";
        }
    }
})

export const { loginSuccessful, setStartDay, setName, emptyUser } = userSlice.actions;

export default userSlice.reducer