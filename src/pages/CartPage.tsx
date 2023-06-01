import { Basket } from "../components/basket/Basket";
import { Form } from "../components/form/Form";
import { Container } from "../styles/Container.styled";
import * as styles from "./ShopsPage.styled";

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
