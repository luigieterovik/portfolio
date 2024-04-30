import React from "react";

import * as S from "./styles";

import Contact from "../Components/Contact";

import contacts from "../utils/constants/contacts";
import sections from "../utils/constants/sections";

export default function Home() {
  return (
    <S.Wrapper>
      <S.LeftContainer>
        <S.Name>Luigi Eterovik</S.Name>
        <S.Title>Desenvolvedor FullStack</S.Title>
        <S.Description>
          Construo aplicações web, ajudando empresas a venderem seus produtos.
        </S.Description>

        <S.Navbar>
          <ul>
            {sections.map((section, index) => (
              <S.NavSection key={index}>
                {section.toLocaleUpperCase()}
              </S.NavSection>
            ))}
          </ul>
        </S.Navbar>

        <S.ContactWrapper>
          {contacts.map((contact, index) => (
            <Contact
              key={index}
              image={contact.image}
              name={contact.name}
              link={contact.link}
            />
          ))}
        </S.ContactWrapper>
      </S.LeftContainer>

      <S.RightContainer></S.RightContainer>
    </S.Wrapper>
  );
}
