import styled from "styled-components";

import fontColor from "../../utils/constants/fontColor";

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  &:hover {
    label {
      transition: all 200ms;
      opacity: 1;
    }

    img {
      opacity: 1;
      transition: all 200ms;
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
