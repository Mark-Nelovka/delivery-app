import React, { useEffect, useState } from "react";
import { IItems } from "../../pages/ShopsPage";
import { useAppSelector } from "../../redux/hook";
import { Loader } from "../loader/Loader";
import * as styles from "./Shops.styled";

interface IShops {
  items: IItems[];
  changeActiveStore: (e: React.MouseEvent) => void;
  activeShop: string;
  state: string;
}

export const Shops = ({
  items,
  changeActiveStore,
  activeShop,
  state,
}: IShops) => {
  const [nameOnlyShopUse, setNameOnlyShopUse] = useState("");
  const basketItems = useAppSelector((state) => state.basket.goods);

  useEffect(() => {
    if (items.length > 0 && basketItems.length > 0) {
      const chooseShop = items.find((el) =>
        el.goods.find((it) => it.id === basketItems[0].id)
      );
      if (chooseShop) setNameOnlyShopUse(chooseShop.shop_name);
    }
  }, [basketItems, items]);

  return (
    <styles.ShopsContainer>
      <styles.ShopsTitle>Shops: </styles.ShopsTitle>
      {items.length > 0 && (
        <styles.ShopList>
          {items.map((el) => {
            return (
              <styles.ShopListItem
                onClick={changeActiveStore}
                id={el.shop_name}
                disabled={
                  basketItems.length > 0 && el.shop_name !== nameOnlyShopUse
                }
                active={el.shop_name !== activeShop}
                key={el.shop_id}
              >
                {el.shop_name}
              </styles.ShopListItem>
            );
          })}
        </styles.ShopList>
      )}
      {state === "loading" && <Loader />}
      {state === "error" && (
        <styles.ShopErrorMessage>
          Something went wrong. Please, try again leter
        </styles.ShopErrorMessage>
      )}
    </styles.ShopsContainer>
  );
};
