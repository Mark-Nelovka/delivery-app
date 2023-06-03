import { Basket, Form } from "./components";
import { Container } from "@styles/Container.styled";
import * as styles from "./CartPage.styled";

export default function CartPage() {
  return (
    <section>
      <Container>
        <styles.ContentContainerCart>
          <Form />
          <Basket />
        </styles.ContentContainerCart>
      </Container>
    </section>
  );
}
