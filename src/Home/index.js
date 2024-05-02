import React, { useState, useEffect, useRef } from "react";

import * as S from "./styles";

import Contact from "../Components/Contact";
import Experience from "../Components/Experience";

import about from "../utils/constants/about";
import contacts from "../utils/constants/contacts";
import sections from "../utils/constants/sections";
import experiences from "../utils/constants/experiences";
import projects from "../utils/constants/projects";
import Project from "../Components/Project";
import removeAccentuation from "../utils/functions/removeAccentuation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("sobre");
  const leftContainerRef = useRef(null);
  const backgroundWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollOnLeftContainer = (e) => {
    const deltaY = e.deltaY;
    if (backgroundWrapperRef.current) {
      backgroundWrapperRef.current.scrollTo({
        top: backgroundWrapperRef.current.scrollTop + deltaY,
        behavior: "smooth",
      });
    }
  };

  return (
    <S.BackgroundWrapper ref={backgroundWrapperRef}>
      <S.Wrapper>
        <S.LeftContainer ref={leftContainerRef} onWheel={scrollOnLeftContainer}>
          <S.Name>Luigi Eterovik</S.Name>
          <S.Title>Desenvolvedor FullStack</S.Title>
          <S.Description>
            Construo aplicações web, ajudando empresas a venderem seus produtos.
          </S.Description>

          <S.Navbar>
            <S.SlideBar />
            <div>
              {sections.map((section, index) => (
                <S.NavSection
                  key={index}
                  href={`#${removeAccentuation(sections[index])}`}
                  activeSection={activeSection}
                  title={removeAccentuation(sections[index])}
                  onClick={() =>
                    setActiveSection(removeAccentuation(sections[index]))
                  }
                >
                  {section.toLocaleUpperCase()}
                </S.NavSection>
              ))}
            </div>
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
          <S.Section
            id={removeAccentuation(sections[0])}
            activeSection={activeSection}
          >
            <S.SectionTitle>{sections[0].toLocaleUpperCase()}</S.SectionTitle>
            <S.AboutText>{about}</S.AboutText>
          </S.Section>

          <S.Section id={removeAccentuation(sections[1])}>
            <S.SectionTitle>{sections[1].toLocaleUpperCase()}</S.SectionTitle>
            <S.ExperiencesWrapper>
              {experiences.map((experience, index) => (
                <Experience experience={experience} key={index} />
              ))}
            </S.ExperiencesWrapper>
          </S.Section>

          <S.Section id={removeAccentuation(sections[2])}>
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
