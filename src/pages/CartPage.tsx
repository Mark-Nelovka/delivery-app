import { Basket } from "../components/basket/Basket";
import { Form } from "../components/form/Form";
import { useAppSelector } from "../redux/hook";
import { Container } from "../styles/Container.styled";
import * as styles from "./CartPage.styled";

export default function CartPage() {
  const goodsState = useAppSelector((state) => state.basket.goods);
  return (
    <section>
      <Container>
        <styles.ContentContainerCart>
          <Form />
          <Basket />
        </styles.ContentContainerCart>
        <styles.SubmitGoodsContainer>
          <styles.TotalPrice>
            Total price:
            {goodsState
              .reduce((acc, el) => {
                return (acc += el.amount * el.count);
              }, 0)
              .toFixed(2)}
          </styles.TotalPrice>
          <styles.SubmitButton>Submit order</styles.SubmitButton>
        </styles.SubmitGoodsContainer>
      </Container>
    </section>
  );
}
