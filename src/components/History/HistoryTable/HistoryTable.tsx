import * as styles from "./HistoryTable.styled";

interface ICartItems {
  id: number;
  image: string;
  price: number;
  label: string;
  count: number;
  maxCount: number;
}

interface IHis {
  orders: ICartItems[];
  date: string;
}

interface IHistoryTable {
  history: IHis[];
}

export const HistoryTable = ({ history }: IHistoryTable) => {
  return (
    <styles.BascketContainer>
      <styles.BascketList>
        {history &&
          history.length > 0 &&
          history.map((el, inx) => {
            return (
              <>
                <styles.dateText key={inx}>{el.date}</styles.dateText>
                {el.orders.map((it) => {
                  return (
                    <styles.BascketItem key={it.id}>
                      <div>
                        <img src={it.image} alt="Alt" />
                      </div>
                      <styles.BascketItemInfo>
                        <p>{it.label}</p>
                        <p>Price: {it.price * it.count}</p>
                      </styles.BascketItemInfo>
                    </styles.BascketItem>
                  );
                })}
              </>
            );
          })}
      </styles.BascketList>
    </styles.BascketContainer>
  );
};
