import axios from "axios";
// import Notiflix from "notiflix";
import { useState } from "react";
import { useGlobalContext } from "../../../pages/HistoryPage";
import * as styles from "./HistoryForm.styled";

export default function HistoryForm() {
  const { setHistory } = useGlobalContext();
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
    axios
      .get(
        `http://localhost:8080/history?email=${info.email}&phone=${info.phone}`
      )
      .then((res) => {
        // const qwe = res.data.data.map((el: any) => {
        //   return el.orders;
        // });
        // console.log(res.data.data);
        // console.log(qwe);
        setHistory(res.data.data);
        // setActiveShop(JSON.parse(res.data.data)[0].shop_name);
        // setFirst(JSON.parse(res.data.data));
      })
      .catch((er) => console.log(er));
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
