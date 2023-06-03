import { decrementGoods, saveGoods } from "@redux/basket/basketOperations";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHook";
import * as styles from "./Basket.styled";

function Basket() {
  const goodsState = useAppSelector((state) => state.basket.goods);
  const goodsStateTest = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const increment = (id: number) => {
    for (let prod of [goodsStateTest]) {
      const findProd = prod.goods.find((el) => el.id === id);
      if (findProd) {
        const dispatchObj = { ...prod, goods: [findProd] };
        dispatch(saveGoods(dispatchObj));
      }
    }
  };

  const decrement = (id: number) => {
    for (let prod of [goodsStateTest]) {
      const findProd = prod.goods.find((el) => el.id === id);
      if (findProd) {
        const dispatchObj = { ...prod, goods: [findProd] };
        dispatch(decrementGoods(dispatchObj));
      }
    }
  };

  return (
    <styles.BascketContainer>
      <styles.BascketList>
        {goodsState.length > 0 &&
          goodsState.map((el) => {
            return (
              <styles.BascketItem key={el.id}>
                <div>
                  <img src={el.image} alt="Alt" />
                </div>
                <styles.BascketItemInfo>
                  <p>{el.label}</p>
                  <p>Price: {el.price * el.count}</p>
                  <styles.BascketCounterContainer>
                    <styles.BascketDecrementButton
                      id={String(el.id)}
                      data-action="increment"
                      onClick={() => decrement(el.id)}
                    >
                      -
                    </styles.BascketDecrementButton>
                    <p>{el.count}</p>
                    <styles.BascketIncrementButton
                      onClick={() => increment(el.id)}
                    >
                      +
                    </styles.BascketIncrementButton>
                  </styles.BascketCounterContainer>
                </styles.BascketItemInfo>
              </styles.BascketItem>
            );
          })}
        {goodsState.length === 0 && (
          <styles.BascketEmptyBasket>
            You don't choose any products yet
          </styles.BascketEmptyBasket>
        )}
      </styles.BascketList>
    </styles.BascketContainer>
  );
}

export default Basket;
