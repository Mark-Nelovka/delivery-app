import React, { useState } from "react";
import { v4 } from "uuid";
import * as styled from "./couponCard.styled";

function Copy(text: string) {
  navigator.clipboard
    .writeText(text)
    .then((res) => {
      // alert("Текст скопирован в буфер обмена: " + text);
    })
    .catch((er) => console.log(er));
}

export default function CouponsCard() {
  const [isCopy, setIsCopy] = useState<number | null>(null);
  const copyCode = (e: React.MouseEvent) => {
    const { dataset } = e.target as HTMLButtonElement;
    if (dataset.id) {
      setIsCopy(+dataset.id + 1);
      Copy(e.currentTarget.children[+dataset.id].children[1].textContent!);
    }
  };

  return (
    <styled.CardList onClick={copyCode}>
      <styled.CardItem>
        <styled.CardName>Coupon</styled.CardName>
        <styled.CardCode>{v4()}</styled.CardCode>
        <styled.CardButton data-id={0}>
          {isCopy && isCopy === 1 ? "Done" : "Copy"}
        </styled.CardButton>
      </styled.CardItem>
      <styled.CardItem>
        <styled.CardName>Coupon</styled.CardName>
        <styled.CardCode>{v4()}</styled.CardCode>
        <styled.CardButton data-id={1}>
          {isCopy && isCopy === 2 ? "Done" : "Copy"}
        </styled.CardButton>
      </styled.CardItem>
      <styled.CardItem>
        <styled.CardName>Coupon</styled.CardName>
        <styled.CardCode>{v4()}</styled.CardCode>
        <styled.CardButton data-id={2}>
          {isCopy && isCopy === 3 ? "Done" : "Copy"}
        </styled.CardButton>
      </styled.CardItem>
      <styled.CardItem>
        <styled.CardName>Coupon</styled.CardName>
        <styled.CardCode>{v4()}</styled.CardCode>
        <styled.CardButton data-id={3}>
          {isCopy && isCopy === 4 ? "Done" : "Copy"}
        </styled.CardButton>
      </styled.CardItem>
      <styled.CardItem>
        <styled.CardName>Coupon</styled.CardName>
        <styled.CardCode>{v4()}</styled.CardCode>
        <styled.CardButton data-id={4}>
          {isCopy && isCopy === 5 ? "Done" : "Copy"}
        </styled.CardButton>
      </styled.CardItem>
    </styled.CardList>
  );
}
