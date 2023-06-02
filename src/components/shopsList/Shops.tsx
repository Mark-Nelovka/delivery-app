import React, { useEffect, useState } from "react";
import { IItems } from "../../pages/ShopsPage";
import * as styles from "./Shops.styled";

interface IShops {
  items: IItems[];
  changeActiveStore: (e: React.MouseEvent) => void;
  activeShop: string;
}

export const Shops = ({ items, changeActiveStore, activeShop }: IShops) => {
  // useEffect(() => {
  //   if (items.length) {
  //     changeActiveStore(items[0].shop_name);
  //   }
  // }, [items]);

  return (
    <styles.ShopsContainer>
      <styles.ShopsTitle>Shops: </styles.ShopsTitle>
      <styles.ShopList onClick={changeActiveStore}>
        {items.length &&
          items.map((el) => {
            return (
              <styles.ShopListItem
                id={el.shop_name}
                active={el.shop_name !== activeShop}
                key={el.shop_id}
              >
                {el.shop_name}
              </styles.ShopListItem>
            );
          })}
      </styles.ShopList>
    </styles.ShopsContainer>
  );
};
