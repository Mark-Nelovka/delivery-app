import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveGoods, decrementGoods } from "./basketOperations";

// interface

interface IStateBasket {
    goods: {
        id: number,
        image: string,
        label: string,
        amount: number
        count: number
    }[];
}

interface IItems {
        id: number,
        image: string,
        label: string,
    amount: number,
    count: number
        }

export const initialState: IStateBasket = {
    goods: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
    extraReducers: {
        [saveGoods.type]: (state,  {payload} : PayloadAction<IItems>) => {
           const checkProduct = state.goods.find((it) => it.id === payload.id);
            if (checkProduct) {
            state.goods = state.goods.map((el) => {
                if (el.id === payload.id) {
                 return {...el, count: checkProduct.count + 1}
                }
                return el;
            })
            } else {
                state.goods.push({...payload, count: 1})
            }
        },
        [decrementGoods.type]: (state, { payload }: PayloadAction<IItems>) => {
            const checkCount = payload.count - 1
            if (checkCount) {
                state.goods = state.goods.map((el) => el.id === payload.id ? { ...el, count: payload.count - 1 } : el);
            } else {
               state.goods = state.goods.filter((el) => el.id !== payload.id);
            }
        }
  }
  
});

export default basketSlice.reducer;