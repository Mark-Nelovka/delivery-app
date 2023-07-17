import { Container } from "@styles/Container.styled";
import { CouponsCard } from "./components";
import * as styles from "./CouponsPage.styled";

export default function CouponsPage() {
  return (
    <section>
      <Container>
        <styles.ContentContainerCoupons>
          <CouponsCard />
        </styles.ContentContainerCoupons>
      </Container>
    </section>
  );
}
