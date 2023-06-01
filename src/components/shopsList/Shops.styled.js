import styled from "styled-components";

export const ShopsContantContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShopsContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  max-height: 80vh;
  overflow: scroll;
  padding: 20px 20px 20px 20px;
`;

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
`;
