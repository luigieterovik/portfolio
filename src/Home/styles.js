import styled, { css } from "styled-components";

import Background from "../assets/background.png";

import fontColor from "../utils/constants/fontColor";

import { breakpoints } from "../styles/breakpoints";

export const BackgroundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("${Background}");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 100px 200px;
  display: flex;
  justify-content: center;
  overflow-y: auto;

  @media ${breakpoints.bg} {
    padding: 100px;
  }

  @media ${breakpoints.md} {
    padding: 50px;
  }

  @media ${breakpoints.sm2} {
    padding: 30px;
  }
`;

export const Wrapper = styled.main`
  width: 1100px;
  display: flex;

  @media ${breakpoints.md} {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  height: 75vh;
  width: fit-content;

  display: flex;
  flex-direction: column;
  position: fixed;

  @media ${breakpoints.md} {
    position: initial;
  }
`;

export const Name = styled.a`
  color: ${fontColor};
  font-weight: 700;
  text-decoration: none;
  font-size: 50px;
  width: fit-content;
  white-space: nowrap;
`;

export const Title = styled.h2`
  color: ${fontColor};
  font-weight: 600;
  font-size: 20px;
  margin: 5px 0 16px;
`;

export const Description = styled.h3`
  color: ${fontColor};
  font-weight: 400;
  font-size: 16px;
  opacity: 0.8;
  width: 330px;
  text-wrap: balance;
`;

export const ContactWrapper = styled.div`
  gap: 30px;
  display: flex;
  margin-top: auto;

  @media ${breakpoints.md} {
    margin-top: 0;
  }
`;

export const RightContainer = styled.div`
  gap: 70px;
  width: 55%;
  display: flex;
  margin-left: 100px;
  flex-direction: column;
  margin-left: auto;
  padding-bottom: 80px;
  transform: translateY(10px);

  @media ${breakpoints.md} {
    margin: 60px 0 0;
    width: 100%;
  }
`;

export const Section = styled.section`
  scroll-margin-top: ${(props) =>
    props.activeSection === "sobre" ? "110px" : "50px"};
`;

export const SectionTitle = styled.h3`
  color: ${fontColor};
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 20px;
  opacity: 0.9;
`;

export const AboutText = styled.div`
  color: ${fontColor};
  font-size: 16px;
  opacity: 0.6;

  p {
    text-wrap: balance;
  }
`;

export const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:has(div:hover) div:not(:hover) > div {
    opacity: 0.4;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:has(div:hover) div:not(:hover) > div {
    opacity: 0.4;
  }
`;
