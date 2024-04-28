import React from 'react'

import * as S from './styles'

export default function Home() {
  return (
    <S.Wrapper>
        <S.LeftContainer>
            <S.Name>Luigi Eterovik</S.Name>
            <S.Title>Desenvolvedor FullStack</S.Title>
            <S.Description>Construo aplicações web, ajudando empresas a venderem seus produtos.</S.Description>

            <S.ContactWrapper>
            </S.ContactWrapper>
        </S.LeftContainer>

        <S.RightContainer></S.RightContainer>
    </S.Wrapper>
  )
}
