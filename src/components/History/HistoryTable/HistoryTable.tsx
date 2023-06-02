import * as styles from "./HistoryTable.styled";

interface ICartItems {
  id: number;
  image: string;
  amount: number;
  label: string;
  count: number;
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
                <styles.dateText>{el.date}</styles.dateText>
                {el.orders.map((it) => {
                  return (
                    <styles.BascketItem>
                      <div>
                        <img src={it.image} alt="Alt" />
                      </div>
                      <styles.BascketItemInfo>
                        <p>{it.label}</p>
                        <p>Price: {it.amount * it.count}</p>
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
