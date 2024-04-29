import React from "react";

import * as S from "./styles";

import Contact from "../Components/Contact";
import contacts from "../utils/contacts";

export default function Home() {
  return (
    <S.Wrapper>
      <S.LeftContainer>
        <S.Name>Luigi Eterovik</S.Name>
        <S.Title>Desenvolvedor FullStack</S.Title>
        <S.Description>
          Construo aplicações web, ajudando empresas a venderem seus produtos.
        </S.Description>

        <S.ContactWrapper>
          {contacts.map((contact, index) => (
            <Contact img={contact.image} name={contact.name} key={index} isResume={index === 2} />
          ))}
        </S.ContactWrapper>
      </S.LeftContainer>

      <S.RightContainer></S.RightContainer>
    </S.Wrapper>
  );
}
