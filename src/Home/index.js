import React from "react";

import * as S from "./styles";

import Contact from "../Components/Contact";
import Experience from "../Components/Experience";

import about from "../utils/constants/about";
import contacts from "../utils/constants/contacts";
import sections from "../utils/constants/sections";
import experiences from "../utils/constants/experiences";
import projects from "../utils/constants/projects";
import Project from "../Components/Project";

export default function Home() {
  return (
    <S.BackgroundWrapper>
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
            <S.AboutText>{about}</S.AboutText>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{sections[1].toLocaleUpperCase()}</S.SectionTitle>
            <S.ExperiencesWrapper>
              {experiences.map((experience, index) => (
                <Experience experience={experience} key={index} />
              ))}
            </S.ExperiencesWrapper>
          </S.Section>

          <S.Section>
            <S.SectionTitle>{sections[2].toLocaleUpperCase()}</S.SectionTitle>
            <S.ProjectsWrapper>
              {projects.map((project, index) => (
                <Project project={project} key={index} />
              ))}
            </S.ProjectsWrapper>
          </S.Section>
        </S.RightContainer>
      </S.Wrapper>
    </S.BackgroundWrapper>
  );
}
