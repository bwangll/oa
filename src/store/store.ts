import {configureStore} from "@reduxjs/toolkit";
import userReducer from './user/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});
export type UserDispatch = typeof store.dispatch
export default store;
