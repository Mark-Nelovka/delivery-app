import { decrementGoods, saveGoods } from "../../redux/basket/basketOperations";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import * as styles from "./Basket.styled";

export const Basket = () => {
  const goodsState = useAppSelector((state) => state.basket.goods);
  const dispatch = useAppDispatch();

  return (
    <styles.BascketContainer>
      <styles.BascketList>
        {goodsState.length > 0 &&
          goodsState.map((el) => {
            return (
              <styles.BascketItem>
                <div>
                  <img src={el.image} alt="Alt" />
                </div>
                <styles.BascketItemInfo>
                  <p>{el.label}</p>
                  <p>Price: {el.amount * el.count}</p>
                  <styles.BascketCounterContainer>
                    <styles.BascketDecrementButton
                      onClick={() => dispatch(decrementGoods(el))}
                    >
                      -
                    </styles.BascketDecrementButton>
                    <p>{el.count}</p>
                    <styles.BascketIncrementButton
                      onClick={() => dispatch(saveGoods(el))}
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
};
