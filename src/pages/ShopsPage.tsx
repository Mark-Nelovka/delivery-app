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
    amount: number;
    label: string;
  }[];
}

export default function ShopsPage() {
  const [first, setFirst] = useState<IItems[]>([]);
  const [activeShop, setActiveShop] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/shops")
      .then((res) => {
        setActiveShop(JSON.parse(res.data.data)[0].shop_name);
        setFirst(JSON.parse(res.data.data));
      })
      .catch((er) => console.log(er));
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
            items={first}
            activeShop={activeShop}
            changeActiveStore={changeActiveStore}
          />
          <Goods items={first} activeShop={activeShop} />
        </styles.ContentContainerShops>
      </Container>
    </section>
  );
}
