import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './Slices/themeReducer'
import userReducer from './Slices/userReducer'
import usersReducer from './Slices/usersReducer'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        users: usersReducer
    }
});