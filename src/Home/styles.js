import styled from "styled-components";

import Background from "../assets/background.png";

import fontColor from "../utils/constants/fontColor";

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
`;

export const Wrapper = styled.main`
  width: 1100px;
`;

export const LeftContainer = styled.div`
  height: 75vh;
  width: fit-content;

  display: flex;
  flex-direction: column;
  position: fixed;
`;

export const Name = styled.h1`
  color: ${fontColor};
  font-weight: 700;
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
`;

export const RightContainer = styled.div`
  gap: 60px;
  width: 55%;
  display: flex;
  margin-left: 100px;
  flex-direction: column;
  margin-left: auto;
  transform: translateY(10px);
`;

export const Section = styled.section``;

export const SectionTitle = styled.h3`
  color: ${fontColor};
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 20px;
  opacity: 0.9;
`;

export const AboutText = styled.p`
  color: ${fontColor};
  font-size: 16px;
  opacity: 0.6;
  text-wrap: balance;
`;

// Navbar

export const Navbar = styled.nav`
  margin: 100px 0 0 70px;
  display: flex;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 15px;
  }
`;

export const NavSection = styled.h4`
  color: ${fontColor};
  opacity: 0.6;
  font-size: 15px;
  font-weight: 400;
`;

export const SlideBar = styled.div`
  height: 25%;
  width: 3px;
  background: ${fontColor};
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
