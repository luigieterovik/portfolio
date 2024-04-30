import React from "react";

import * as S from "./styles";

const i = (name) => {
  return require("../../assets/" + name);
};

export default function Contact({ image, name, link }) {
  return (
    <S.ContactDiv onClick={() => (window.open(link, "_blank"))}>
      <S.ContactImg src={i(image)} />
      <S.ContactText>{name}</S.ContactText>
    </S.ContactDiv>
  );
}
