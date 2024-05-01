import React from "react";

import * as S from './styles'

export default function Tag({ text }) {
  return (
    <S.Tag>
      <label>{text}</label>
    </S.Tag>
  );
}
