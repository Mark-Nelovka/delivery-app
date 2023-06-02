import { HashLoader } from "react-spinners";
import { LoaderContainer } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderContainer>
      <HashLoader color={"#4a56e2"} size="100px" />;
    </LoaderContainer>
  );
};
