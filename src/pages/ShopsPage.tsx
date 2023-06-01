import { Shops } from "../components/shopsList/Shops";
import * as styles from "./ShopsPage.styled";
import { Container } from "../styles/Container.styled";
import { Goods } from "../components/goodsList/GoodsList";

export default function ShopsPage() {
  return (
    <section>
      <Container>
        <styles.ContentContainerShops>
          <Shops />
          <Goods />
        </styles.ContentContainerShops>
      </Container>
    </section>
  );
}
