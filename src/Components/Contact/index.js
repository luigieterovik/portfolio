import React from 'react'

import * as S from './styles'

export default function Contact({ ...props }) {
  return (
    <S.ContactDiv>
        <S.ContactImg src={props.img}/>
        <S.ContactText>{props.label}</S.ContactText>
    </S.ContactDiv>
  )
}
