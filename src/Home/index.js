import React from 'react'

import * as S from './styles'

export default function Home() {
  return (
    <S.Wrapper>
        <S.LeftContainer>
            <S.Name></S.Name>
            <S.Title></S.Title>
            <S.Description></S.Description>

            <ul>
                <li>SOBRE</li>
                <li>EXPERIÊNCIA</li>
                <li>PROJETOS</li>
            </ul>

            <S.ContactWrapper></S.ContactWrapper>
        </S.LeftContainer>

        <S.RightContainer></S.RightContainer>
    </S.Wrapper>
  )
}
