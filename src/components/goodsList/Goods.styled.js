import styled from "styled-components";

export const GoodsContentContainer = styled.div`
  position: relative;
  width: calc(100% - 400px);
  padding: 20px;
  border: 2px solid black;
  border-radius: 20px;
  overflow: scroll;
`;

export const GoodsList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* min-height: 70vh; */
  padding: 20px;
  margin-right: -30px;
  margin-bottom: -20px;
`;

export const GoodsItem = styled.li`
  max-width: calc(100% / 3 - 30px);
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  margin-right: 30px;
  cursor: pointer;
`;

export const GoodsInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const GoodsItemDetail = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
`;

export const ButtonContainer = styled.div`
  width: 150px;
  margin: 0 auto;
`;

export const ButtonAddToCart = styled.button`
  font-size: 20px;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  border-radius: 20px;
  padding: 5px;
  border: none;
  width: 100%;
  transition: all 0.2s linear;
  &:hover {
    background-color: rgba(39, 125, 255, 0.6);
  }
`;

export const GoodsErrorMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1.1px;
  font-style: normal;
  text-align: center;
`;
