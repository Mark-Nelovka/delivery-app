import { Link } from "react-router-dom";
import { Container } from "@styles/Container.styled";
import * as styles from "./Header.styled";

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
            <styles.NavigationItem>
              <Link to="/history">History</Link>
            </styles.NavigationItem>
            <styles.NavigationItem>
              <Link to="/coupons">Coupons</Link>
            </styles.NavigationItem>
          </styles.NavigationList>
        </nav>
      </Container>
    </styles.Header>
  );
};
