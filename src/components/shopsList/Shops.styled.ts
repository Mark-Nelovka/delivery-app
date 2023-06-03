import styled from "styled-components";

export const ShopsContantContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShopsContainer = styled.div`
position: relative;
  border: 2px solid grey;
  border-radius: 20px;
  padding: 20px 20px 20px 20px;
  width: 350px;
`;

export const ShopsTitle = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-style: normal;
  text-align: center;
`;

export const ShopList = styled.ul`
position: relative;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  height: 500px;
  overflow: scroll;
  padding: 20px 20px 20px 20px;
`;

interface IListItem {
  active: boolean;
  disabled: boolean;
}

export const ShopListItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  padding: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  &:hover {
    transform: scale(1.1);
    background-color: rgba(39, 243, 97, 0.8);
    border-color: white;
  }
  pointer-events: ${(props: IListItem) => props.disabled ? "none" : "all"};
  background-color: ${(props: IListItem) => props.disabled ? "#ccc" : "#fff"};
  border-color: ${(props: IListItem) => props.active ? "#000" : "rgba(39, 243, 97, 0.8)"};
`;

export const ShopErrorMessage = styled.p`
font-size: 28px;
font-weight: 700;
letter-spacing: 1.1px;
font-style: normal;
text-align: center;
`;
