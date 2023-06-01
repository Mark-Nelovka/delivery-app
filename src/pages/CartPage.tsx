import { Basket } from "../components/basket/Basket";
import { Form } from "../components/form/Form";
import { Container } from "../styles/Container.styled";
import * as styles from "./CartPage.styled";

export default function CartPage() {
  return (
    <section>
      <Container>
        <styles.ContentContainerCart>
          <Form />
          <Basket />
        </styles.ContentContainerCart>
        <styles.SubmitGoodsContainer>
          <styles.TotalPrice>Total price: 2000</styles.TotalPrice>
          <styles.SubmitButton>Submit order</styles.SubmitButton>
        </styles.SubmitGoodsContainer>
      </Container>
    </section>
  );
}
