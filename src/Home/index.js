import React, { useState, useEffect, useRef } from "react";

import * as S from "./styles";

import { size } from "../styles/breakpoints";

import Contact from "../Components/Contact";
import Experience from "../Components/Experience";
import Project from "../Components/Project";
import Navbar from "../Components/Navbar";

import about from "../utils/constants/about";
import contacts from "../utils/constants/contacts";
import sections from "../utils/constants/sections";
import experiences from "../utils/constants/experiences";
import projects from "../utils/constants/projects";

import scrollOnLeftContainer from "../utils/functions/scrollOnLeftContainer";
import removeAccentuation from "../utils/functions/removeAccentuation";
import getCoordinates from "../utils/functions/getCoordinates";

export default function Home() {
  const [activeSection, setActiveSection] = useState("sobre");

  const navSectionRefs = useRef([]);
  const leftContainerRef = useRef(null);
  const backgroundWrapperRef = useRef(null);

  const [slideBarVisible, setSlideBarVisible] = useState(false);

  let windowWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
  });

  useEffect(() => {
    if (windowWidth > size.md) {
      setSlideBarVisible(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    navSectionRefs.current.forEach((ref) => {
      if (removeAccentuation(ref.current.innerText) === activeSection) {
        const newCoordinates = getCoordinates(ref);
        if (newCoordinates.top !== coordinates?.top) {
          setCoordinates(newCoordinates);
        }
      }
    });
  }, [activeSection, coordinates]);

  return (
    <S.BackgroundWrapper ref={backgroundWrapperRef}>
      <S.Wrapper>
        <S.LeftContainer
          ref={leftContainerRef}
          onWheel={(e) => scrollOnLeftContainer(e, backgroundWrapperRef)}
        >
          <S.Name href="/">Luigi Eterovik</S.Name>
          <S.Title>Desenvolvedor FullStack</S.Title>
          <S.Description>
            Construo aplicações web, ajudando empresas a venderem seus produtos.
          </S.Description>

          <Navbar
            coordinates={coordinates}
            slideBarVisible={slideBarVisible}
            sections={sections}
            navSectionRefs={navSectionRefs}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

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
            <S.AboutText>
              <p>
                {about.split("\n").map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph.split(" ").map((word, index) => (
                      <React.Fragment key={index}>
                        <span>{word} </span>
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </S.AboutText>
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
