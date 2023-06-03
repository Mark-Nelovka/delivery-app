import React, { useState } from "react";
import Notiflix from "notiflix";
import { clearGoods } from "@redux/basket/basketOperations";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHook";
import createOrderForUser from "@api/createOrder";
import * as styles from "./Form.styled";

function Form() {
  const goodsState = useAppSelector((state) => state.basket.goods);
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChangeInfoForm = (e: React.ChangeEvent) => {
    const { id, value } = e.target as HTMLInputElement;
    setInfo((prSt) => ({
      ...prSt,
      [id]: value,
    }));
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goodsState.length) {
      Notiflix.Notify.info("Please, choose any products");
      return;
    }

    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const body = {
      user: info,
      products: goodsState,
      date: formattedDate,
    };
    const checkCreateOrder = await createOrderForUser(body);
    if (checkCreateOrder.code !== 200) {
      Notiflix.Notify.failure(`${checkCreateOrder.message}`);
      return;
    }
    Notiflix.Notify.success("Thank's for your order. We call you soon");
    setInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    dispatch(
      clearGoods({
        shop_id: 0,
        shop_name: "",
        goods: [],
      })
    );
  };

  return (
    <styles.FormContainer>
      <styles.Form onSubmit={handleSubmitForm}>
        <styles.FormLabel htmlFor="name">Name:</styles.FormLabel>
        <styles.FormInput
          type="text"
          required
          id="name"
          value={info.name}
          autoFocus
          onChange={handleChangeInfoForm}
          placeholder="Name"
        ></styles.FormInput>
        <styles.FormLabel htmlFor="email">Email:</styles.FormLabel>
        <styles.FormInput
          type="email"
          required
          value={info.email}
          placeholder="email@gmail.com"
          onChange={handleChangeInfoForm}
          id="email"
        ></styles.FormInput>
        <styles.FormLabel htmlFor="phone">Phone:</styles.FormLabel>
        <styles.FormInput
          type="number"
          required
          value={info.phone}
          placeholder="xxx xxx xx xx"
          onChange={handleChangeInfoForm}
          id="phone"
        ></styles.FormInput>
        <styles.FormLabel htmlFor="address">Address:</styles.FormLabel>
        <styles.FormInput
          type="text"
          required
          value={info.address}
          placeholder="Address"
          onChange={handleChangeInfoForm}
          id="address"
        ></styles.FormInput>
        <styles.SubmitGoodsContainer>
          <styles.TotalPrice>
            Total price:
            {goodsState
              .reduce((acc, el) => {
                return (acc += el.price * el.count);
              }, 0)
              .toFixed(2)}
          </styles.TotalPrice>
          <styles.SubmitButton onSubmit={handleSubmitForm}>
            Submit order
          </styles.SubmitButton>
        </styles.SubmitGoodsContainer>
      </styles.Form>
    </styles.FormContainer>
  );
}

export default Form;
