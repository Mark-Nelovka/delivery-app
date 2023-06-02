import axios from "axios";
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

const { REACT_APP_URL_API } = process.env;

axios.defaults.baseURL = `${REACT_APP_URL_API}`;

// const saveGoods = createAsyncThunk('news/getNews', async (page: number, thunkApi) => {
//    try {
//       const { data } = await axios.get(`/news/${page}`);
//       return data;
//    } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return thunkApi.rejectWithValue(error.response?.data);
//       }
//    }
// });

const saveGoods = createAction("basket/increment", (payload ) => {
    return {payload};
})
const decrementGoods = createAction("basket/decrement", (payload ) => {
    return {payload};
})

export { saveGoods, decrementGoods };