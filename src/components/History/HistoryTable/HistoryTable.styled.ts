import styled from "styled-components";

export const BascketContainer = styled.div`
  border: 2px solid grey;
  border-radius: 20px;
  padding: 20px;
  width: 49%;
`;

export const BascketList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: scroll;
`;

export const dateText = styled.p`
font-size: 22px;
font-style: normal;
font-weight: 500;
margin-left: 20px;
margin-bottom: 10px;
`

export const BascketItem = styled.li`
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const BascketItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 45%;
  height: 240px;
  & > p {
    font-size: 22px;
    font-weight: 600;
    font-style: normal;
    text-align: center;
  }
  & > p:nth-child(2) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const BascketCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  & > p {
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
  }
`;

export const BascketIncrementButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 35px;
  background-color: green;
`;

export const BascketCounter = styled.p``;

export const BascketDecrementButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 35px;
  background-color: red;
`;

export const BascketEmptyBasket = styled.p`
  font-size: 28px;
  font-weight: 700;
  font-style: normal;
  text-align: center;
`;
