import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    loading: false,
    error: "",
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsersPending (state) {
            state.loading = true
        },
        getUsersSuccess (state, {payload}) {
            state.loading = false
            state.users = payload
            state.error = ""
        },
        getUsersFailed (state, {payload}) {
            state.loading = false
            state.error = payload
        },
    },
})

const { actions, reducer } = userSlice;

export const { getUsersPending, getUsersSuccess, getUsersFailed } = actions;

export default reducer;