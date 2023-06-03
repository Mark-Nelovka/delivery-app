import axios from "axios";
import Notiflix from "notiflix";
import { useState } from "react";
import { useGlobalContext } from "../../../hooks/contextHook";
import * as styles from "./HistoryForm.styled";

export default function HistoryForm() {
  const { setHistory, setLoading } = useGlobalContext();
  const [info, setInfo] = useState({
    email: "",
    phone: "",
  });

  const handleChangeInfoForm = (e: React.ChangeEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    setInfo((prSt) => ({
      ...prSt,
      [id]: value,
    }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setHistory([]);
    setLoading(true);
    axios
      .get(
        `http://localhost:8080/history?email=${info.email}&phone=${info.phone}`
      )
      .then((res) => {
        if (!res.data.data) {
          setLoading(false);
          Notiflix.Notify.info(`${res.data.message}`);
          return;
        }
        setTimeout(() => {
          setLoading(false);
          setHistory(res.data.data);
        }, 1000);
      })
      .catch((er) => {
        console.log(er);
        setLoading(false);
      });
  };

  return (
    <styles.FormContainer>
      <styles.Form onSubmit={handleSubmitForm}>
        <styles.FormLabel htmlFor="email">Email:</styles.FormLabel>
        <styles.FormInput
          type="email"
          autoFocus
          value={info.email}
          placeholder="email@gmail.com"
          onChange={handleChangeInfoForm}
          id="email"
        ></styles.FormInput>
        <styles.FormLabel htmlFor="phone">Phone:</styles.FormLabel>
        <styles.FormInput
          type="number"
          value={info.phone}
          placeholder="xxx xxx xx xx"
          onChange={handleChangeInfoForm}
          id="phone"
        ></styles.FormInput>
        <styles.SubmitGoodsContainer>
          <styles.SubmitButton onSubmit={handleSubmitForm}>
            Show history
          </styles.SubmitButton>
        </styles.SubmitGoodsContainer>
      </styles.Form>
    </styles.FormContainer>
  );
}
