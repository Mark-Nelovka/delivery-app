import React from "react";
import { IItems } from "../../pages/ShopsPage";
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
  return (
    <styles.ShopsContainer>
      <styles.ShopsTitle>Shops: </styles.ShopsTitle>
      {items.length > 0 && (
        <styles.ShopList onClick={changeActiveStore}>
          {items.map((el) => {
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
