import styled from "styled-components";

import Background from "../assets/background.png";

const fontColor = "#E9CDFF";

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
  font-weight: 500;
  font-size: 15px;
  opacity: 0.8;
  width: 330px;
`;

export const ContactWrapper = styled.div`
  display: flex;
`;


export const RightContainer = styled.div``;
