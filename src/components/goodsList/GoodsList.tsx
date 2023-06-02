import { IItems } from "../../pages/ShopsPage";
import { useAppDispatch } from "../../redux/hook";
import { saveGoods } from "../../redux/basket/basketOperations";
import * as styles from "./Goods.styled";

interface IGoods {
  items: IItems[];
  activeShop: string;
}

export const Goods = ({ items, activeShop }: IGoods) => {
  const dispatch = useAppDispatch();

  return (
    <styles.GoodsContentContainer>
      <styles.GoodsList>
        {items.length &&
          items
            .filter((it) => it.shop_name === activeShop)[0]
            .goods.map((el, ind) => {
              return (
                <styles.GoodsItem
                  key={ind}
                  onClick={() => dispatch(saveGoods(el))}
                >
                  <div>
                    <img src={el.image} alt={el.label} width={320} />
                  </div>
                  <styles.GoodsInfoContainer>
                    <styles.GoodsItemDetail>{el.label}</styles.GoodsItemDetail>
                    <styles.GoodsItemDetail>
                      Price: {el.amount}
                    </styles.GoodsItemDetail>
                  </styles.GoodsInfoContainer>
                  <styles.ButtonContainer>
                    <styles.ButtonAddToCart>Add to cart</styles.ButtonAddToCart>
                  </styles.ButtonContainer>
                </styles.GoodsItem>
              );
            })}

        {/* <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem> */}
      </styles.GoodsList>
    </styles.GoodsContentContainer>
  );
};
