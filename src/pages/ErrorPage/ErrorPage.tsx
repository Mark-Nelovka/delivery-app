import ErrorImage from "@assets/images/Error.jpeg";
import { Container } from "@styles/Container.styled";
import * as styles from "./Error.styled";

export default function ErrorPage() {
  return (
    <styles.ErrorSection>
      <Container>
        <styles.ErrorPageContainer>
          <span>
            <img
              src={ErrorImage}
              alt="Error message: Ooops, something went wrong. Please try again later"
            />
          </span>
        </styles.ErrorPageContainer>
      </Container>
    </styles.ErrorSection>
  );
}
