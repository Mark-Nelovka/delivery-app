import { Shops } from "../components/shopsList/Shops";
import * as styles from "./ShopsPage.styled";
import { Container } from "../styles/Container.styled";
import { Goods } from "../components/goodsList/GoodsList";
import { useEffect, useState } from "react";
import axios from "axios";

export interface IItems {
  shop_id: number;
  shop_name: string;
  goods: {
    id: number;
    image: string;
    price: number;
    label: string;
    maxCount: number;
  }[];
}

export default function ShopsPage() {
  const [data, setData] = useState<IItems[]>([]);
  const [state, setState] = useState("idle");
  const [activeShop, setActiveShop] = useState("");

  useEffect(() => {
    setState("loading");
    async function getShops() {
      try {
        const result = await axios.get(
          "https://plum-proud-camel.cyclic.app/shops"
        );
        const parseResult = JSON.parse(result.data.data);
        setActiveShop(parseResult[0].shop_name);
        setState("success");
        setData(parseResult);
      } catch (error) {
        setState("error");
      }
    }
    getShops();
  }, []);

  const changeActiveStore = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLLIElement;
    setActiveShop(id);
  };

  return (
    <section>
      <Container>
        <styles.ContentContainerShops>
          <Shops
            items={data}
            state={state}
            activeShop={activeShop}
            changeActiveStore={changeActiveStore}
          />
          <Goods items={data} state={state} activeShop={activeShop} />
        </styles.ContentContainerShops>
      </Container>
    </section>
  );
}
