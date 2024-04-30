import styled from "styled-components";

import Background from "../assets/background.png";

import fontColor from "../utils/constants/fontColor";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("${Background}");
  background-size: cover;
  background-position: center;
`;

export const LeftContainer = styled.div`
  height: 100vh;
  width: 50vw;

  display: flex;
  flex-direction: column;

  padding: 100px 0 0 200px;
`;

export const Name = styled.h1`
  color: ${fontColor};
  font-weight: 700;
  font-size: 50px;
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
  font-size: 15px;
  opacity: 0.8;
  width: 330px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 100px;
`;


export const RightContainer = styled.div``;





export const Navbar = styled.nav`
  margin: 100px 0 0 100px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const NavSection = styled.h4`
  color: ${fontColor};
  opacity: 0.6;
  font-size: 15px;
  font-weight: 400;
`