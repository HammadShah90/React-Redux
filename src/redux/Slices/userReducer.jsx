import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: "",
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserPending: (state) => {
            state.loading = true
        },
        getUserSuccess: (state, {Payload}) => {
            state.loading = false
            state.user = Payload.user
            state.token = Payload.token
            state.error = ""
        },
        getUserFailed: (state, {Payload}) => {
            state.loading = false
            state.error = Payload
        },
    },
})

const { actions, reducer } = authSlice;

export const { getUserPending, getUserSuccess, getUserFailed } = actions;

export default reducer;