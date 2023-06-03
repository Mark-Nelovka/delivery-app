import { IItems } from "../../pages/ShopsPage";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { saveGoods } from "../../redux/basket/basketOperations";
import * as styles from "./Goods.styled";
import { Loader } from "../loader/Loader";

interface IGoods {
  items: IItems[];
  activeShop: string;
  state: string;
}

export const Goods = ({ items, activeShop, state }: IGoods) => {
  const dispatch = useAppDispatch();
  const goodsWithBasket = useAppSelector((state) => state.basket.goods);

  const itemWithBasket = useAppSelector((state) => state.basket);

  const addGoods = (id: number) => {
    for (let prod of items) {
      const findProd = prod.goods.find((el) => el.id === id);
      if (findProd) {
        const dispatchObj = { ...prod, goods: [findProd] };
        dispatch(saveGoods(dispatchObj));
      }
    }
  };

  return (
    <styles.GoodsContentContainer>
      {items.length > 0 && (
        <styles.GoodsList>
          {items
            .filter((it) =>
              itemWithBasket.shop_name === ""
                ? it.shop_name === activeShop
                : it.shop_name === itemWithBasket.shop_name
            )[0]
            .goods.map((el) => {
              const bask = goodsWithBasket.find((prd) => prd.id === el.id);
              if (bask && bask.id === el.id && bask.count === el.maxCount) {
                return (
                  <styles.GoodsItem key={el.id} disabled={false}>
                    <div>
                      <img src={el.image} alt={el.label} width={320} />
                    </div>
                    <styles.GoodsInfoContainer>
                      <styles.GoodsItemDetail>
                        {el.label}
                      </styles.GoodsItemDetail>
                      <styles.GoodsItemDetail>
                        Price: {el.price}
                      </styles.GoodsItemDetail>
                      <styles.GoodsItemDetail>
                        Out of stock
                      </styles.GoodsItemDetail>
                    </styles.GoodsInfoContainer>
                    <styles.ButtonContainer>
                      <styles.ButtonAddToCart>
                        Add to cart
                      </styles.ButtonAddToCart>
                    </styles.ButtonContainer>
                  </styles.GoodsItem>
                );
              }
              return (
                <styles.GoodsItem key={el.id} disabled={Boolean(el.maxCount)}>
                  <div>
                    <img src={el.image} alt={el.label} width={320} />
                  </div>
                  <styles.GoodsInfoContainer>
                    <styles.GoodsItemDetail>{el.label}</styles.GoodsItemDetail>
                    <styles.GoodsItemDetail>
                      Price: {el.price}
                    </styles.GoodsItemDetail>
                    <styles.GoodsItemDetail>
                      {el.maxCount === 0 && "Out of stock"}
                      {goodsWithBasket.length > 0 &&
                        `Max count: ${goodsWithBasket.reduce((acc, it) => {
                          if (el.id === it.id) {
                            return (acc = el.maxCount - it.count);
                          }
                          return acc;
                        }, el.maxCount)}`}
                      {goodsWithBasket.length === 0 &&
                        el.maxCount > 0 &&
                        `Max count: ${el.maxCount}`}
                    </styles.GoodsItemDetail>
                  </styles.GoodsInfoContainer>
                  <styles.ButtonContainer>
                    <styles.ButtonAddToCart onClick={() => addGoods(el.id)}>
                      Add to cart
                    </styles.ButtonAddToCart>
                  </styles.ButtonContainer>
                </styles.GoodsItem>
              );
            })}
        </styles.GoodsList>
      )}
      {state === "loading" && <Loader />}
      {state === "error" && (
        <styles.GoodsErrorMessage>
          Something went wrong. Please, try again leter
        </styles.GoodsErrorMessage>
      )}
    </styles.GoodsContentContainer>
  );
};
