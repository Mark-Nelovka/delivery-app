import * as styles from "./Header.styled";
import { Container } from "../../styles/Container.styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <styles.Header>
      <Container>
        <nav>
          <styles.NavigationList>
            <styles.NavigationItem>
              <Link to="/">Shop</Link>
            </styles.NavigationItem>
            <styles.NavigationItem>
              <Link to="/cart">Shopping cart</Link>
            </styles.NavigationItem>
          </styles.NavigationList>
        </nav>
      </Container>
    </styles.Header>
  );
};
