import * as styles from "./Goods.styled";

export const Goods = () => {
  const arr = [
    { name: "Burger", price: 111 },
    { name: "Pasta", price: 222 },
    { name: "Salat", price: 333 },
    { name: "Tea", price: 444 },
    { name: "Coffe", price: 555 },
    { name: "Sugar", price: 666 },
    { name: "Meat", price: 777 },
    { name: "Soup", price: 888 },
  ];
  return (
    <styles.GoodsContentContainer>
      <styles.GoodsList>
        {arr.map((el, ind) => {
          return (
            <styles.GoodsItem key={ind}>
              <div>
                <img
                  src={`https://loremflickr.com/320/240?random=${ind}`}
                  alt={el.name}
                  width={320}
                />
              </div>
              <styles.GoodsInfoContainer>
                <styles.GoodsItemDetail>{el.name}</styles.GoodsItemDetail>
                <styles.GoodsItemDetail>
                  Price: {el.price}
                </styles.GoodsItemDetail>
              </styles.GoodsInfoContainer>
              <styles.ButtonContainer>
                <styles.ButtonAddToCart>Add to cart</styles.ButtonAddToCart>
              </styles.ButtonContainer>
            </styles.GoodsItem>
          );
        })}

        {/* <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem>
        <styles.GoodsItem></styles.GoodsItem> */}
      </styles.GoodsList>
    </styles.GoodsContentContainer>
  );
};
