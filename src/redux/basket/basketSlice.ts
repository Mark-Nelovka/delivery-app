import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { saveGoods, decrementGoods } from "./basketOperations";

export interface IItemsForBasket {
  shop_id: number;
  shop_name: string;
  goods: {
    id: number;
    image: string;
    price: number;
    label: string;
      maxCount: number;
      count: number;
  }[];
}

export const initialState: IItemsForBasket = {
  shop_id: 0,
  shop_name: "",
  goods: []
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
    extraReducers: {
        [saveGoods.type]: (state, { payload }: PayloadAction<IItemsForBasket>) => {
           const checkProduct = state.goods.find((it) => it.id === payload.goods[0].id);
            if (checkProduct) {
            state.goods = state.goods.map((el) => {
              if (el.id === payload.goods[0].id && payload.goods[0].count !== payload.goods[0].maxCount) {
                  Notiflix.Notify.success(`${payload.goods[0].label} added to basket!`)
                 return {...el, count: checkProduct.count + 1}
                }
              Notiflix.Notify.info("Goods closed")
                return el;
            })
            } else {
                state.shop_id = payload.shop_id
                state.shop_name = payload.shop_name
                state.goods.push({...payload.goods[0], count: 1})
            }
        },
        [decrementGoods.type]: (state, { payload }: PayloadAction<IItemsForBasket>) => {
            const checkCount = payload.goods[0].count - 1
            if (checkCount) {
                state.goods = state.goods.map((el) => el.id === payload.goods[0].id ? { ...el, count: payload.goods[0].count - 1 } : el);
            } else {
                 Notiflix.Notify.info(`${payload.goods[0].label} deleted!`)
              state.goods = state.goods.filter((el) => el.id !== payload.goods[0].id);
              if (state.goods.length === 0) {
                 state.shop_id = 0
                state.shop_name = ""
              }
               
            }
        }
  }
  
});

export default basketSlice.reducer;