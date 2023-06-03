import { useState } from "react";
import { IHis, MyGlobalContext } from "@hooks/contextHook";
import { HistoryTable, HistoryForm } from "./components";
import { Container } from "@styles/Container.styled";
import * as styles from "./HIstoryPage.styled";

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
