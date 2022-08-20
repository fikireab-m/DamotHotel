import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: {
        id: '',
        username: '',
        password: ''
    }
}

const authSlice=createSlice({
    name:'authToken',
    initialState,
    reducers:{}
})

export const {} = authSlice.actions
export default authSlice.reducer