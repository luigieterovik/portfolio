import React from "react";

import * as S from "./styles";

const i = (name) => {
  return require("../../assets/" + name);
};

export default function Contact({ ...props }) {
  return (
    <S.ContactDiv>
      <S.ContactImg src={i(props.img)} isResume={props.isResume} />
      <S.ContactText>{props.name}</S.ContactText>
    </S.ContactDiv>
  );
}
