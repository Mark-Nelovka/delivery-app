import { Dispatch, SetStateAction, useState } from "react";
import HistoryForm from "../components/History/HistoryForm/HistoryForm";
import { HistoryTable } from "../components/History/HistoryTable/HistoryTable";
import { Container } from "../styles/Container.styled";
import * as styles from "./HIstoryPage.styled";
import { createContext, useContext } from "react";

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

export type GlobalContent = {
  history: IHis[];
  setHistory: Dispatch<SetStateAction<IHis[]>>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  history: [],
  setHistory: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);

export default function HistoryPage() {
  const [history, setHistory] = useState<IHis[]>([]);
  return (
    <section>
      <Container>
        <styles.ContentContainerHistory>
          <MyGlobalContext.Provider
            value={{
              history,
              setHistory,
            }}
          >
            <HistoryForm />
            <HistoryTable history={history} />
          </MyGlobalContext.Provider>
        </styles.ContentContainerHistory>
      </Container>
    </section>
  );
}
