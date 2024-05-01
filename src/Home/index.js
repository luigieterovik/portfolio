import React from "react";

import * as S from "./styles";

import Contact from "../Components/Contact";
import Tag from "../Components/Tag";

import contacts from "../utils/constants/contacts";
import sections from "../utils/constants/sections";
import experiences from '../utils/constants/experiences'

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
          <S.SlideBar />
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

      <S.RightContainer>
        <S.Section>
          <S.SectionTitle>{sections[0].toLocaleUpperCase()}</S.SectionTitle>
          <S.AboutText>
            Programador FullStack com experiência em desenvolvimento web,
            utilizando tecnologias como HTML, CSS, JavaScript, React.js,
            Node.js, API RESTful, PostgreSQL (banco de dados relacionais),
            Docker, Express, Sequelize e Git. Também possui conhecimentos em
            Java, desenvolvimento desktop, MySQL, MongoDB (banco de dados
            não-relacionais), Figma para design e outras.
          </S.AboutText>
        </S.Section>

        <S.Section>
          <S.SectionTitle>{sections[1].toLocaleUpperCase()}</S.SectionTitle>
          <S.ExperienceWrapper>
            <S.ExperienceDate></S.ExperienceDate>
            <S.ExperienceRightContainer>
              <S.ExperienceTitle></S.ExperienceTitle>
              <S.ExperienceDescription></S.ExperienceDescription>
              

            </S.ExperienceRightContainer>
          </S.ExperienceWrapper>
        </S.Section>
      </S.RightContainer>
    </S.Wrapper>
  );
}
