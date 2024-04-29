import styled, { css } from "styled-components";

import fontColor from "../../utils/fontColor";

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const ContactImg = styled.img`
  height: 35px;
  width: 35px;
`;

export const ContactText = styled.label`
  color: ${fontColor};
  opacity: 0.6;
  font-size: 13px;
`;
