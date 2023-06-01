import { Shops } from "../components/shopsList/Shops";
import * as styles from "./ShopsPage.styled";
import { Container } from "../styles/Container.styled";

export default function ShopsPage() {
  return (
    <section>
      <Container>
        <styles.ContentContainer>
          <Shops />
        </styles.ContentContainer>
      </Container>
    </section>
  );
}
