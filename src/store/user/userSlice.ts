import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userLogin} from "../../service";
import {message} from "antd";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: sessionStorage.getItem('userProfile') ? JSON.parse(sessionStorage.getItem('userProfile') as string) : null,
        loading: false
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchLogin.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                if (action.payload) {
                    state.userInfo = action.payload;
                }
                state.loading = false;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export const fetchLogin = createAsyncThunk('user/login', async (data: any) => {
    const response = await userLogin(data);
    if (!response.data) {
        message.error(response.msg);
    }
    sessionStorage.setItem('userProfile', JSON.stringify(data));
    return response.data;
})
export default userSlice.reducer;
