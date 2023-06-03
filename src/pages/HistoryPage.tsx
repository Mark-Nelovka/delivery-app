import { useState } from "react";
import HistoryForm from "../components/History/HistoryForm/HistoryForm";
import { HistoryTable } from "../components/History/HistoryTable/HistoryTable";
import { Container } from "../styles/Container.styled";
import * as styles from "./HIstoryPage.styled";
import { IHis, MyGlobalContext } from "../hooks/contextHook";

export default function HistoryPage() {
  const [history, setHistory] = useState<IHis[]>([]);
  const [loading, setLoading] = useState(false);
  return (
    <section>
      <Container>
        <styles.ContentContainerHistory>
          <MyGlobalContext.Provider
            value={{
              history,
              setHistory,
              loading,
              setLoading,
            }}
          >
            <HistoryForm />
            <HistoryTable loading={loading} history={history} />
          </MyGlobalContext.Provider>
        </styles.ContentContainerHistory>
      </Container>
    </section>
  );
}
