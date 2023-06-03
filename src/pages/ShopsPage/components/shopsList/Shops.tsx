import React, { useEffect, useState } from "react";
import { IItems } from "../../ShopsPage";
import { useAppSelector } from "@hooks/reduxHook";
import { Loader } from "@general/loader/Loader";
import * as styles from "./Shops.styled";

interface IShops {
  items: IItems[];
  changeActiveStore: (e: React.MouseEvent) => void;
  activeShop: string;
  state: string;
}

export default function Shops({
  items,
  changeActiveStore,
  activeShop,
  state,
}: IShops) {
  const [nameOnlyShopUse, setNameOnlyShopUse] = useState("");
  const basketItems = useAppSelector((state) => state.basket);

  useEffect(() => {
    if (items.length > 0 && basketItems.shop_name !== "") {
      setNameOnlyShopUse(basketItems.shop_name);
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
                  basketItems.shop_name !== "" &&
                  el.shop_name !== nameOnlyShopUse
                }
                active={
                  basketItems.shop_name === "" && el.shop_name !== activeShop
                }
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
}
