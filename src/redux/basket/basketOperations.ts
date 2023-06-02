import { createAction } from '@reduxjs/toolkit';

const saveGoods = createAction("basket/increment", (payload) => {
    return {payload};
})
const decrementGoods = createAction("basket/decrement", (payload ) => {
    return {payload};
})

export { saveGoods, decrementGoods };