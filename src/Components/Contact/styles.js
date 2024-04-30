import styled from "styled-components";

import fontColor from "../../utils/constants/fontColor";

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  &:hover {
    label {
      transition: all 300ms;
      opacity: 1;

      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
        0 0 40px ${fontColor}, 0 0 70px ${fontColor}, 0 0 80px ${fontColor},
        0 0 100px ${fontColor}, 0 0 150px ${fontColor};
    }

    img {
      opacity: 1;
      transition: all 300ms;
    }
  }
`;

export const ContactImg = styled.img`
  height: 35px;
  width: 35px;
  opacity: 0.7;
`;

export const ContactText = styled.label`
  color: ${fontColor};
  opacity: 0.6;
  font-size: 13px;
  cursor: pointer;
`;
