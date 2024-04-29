import styled, { css } from "styled-components";

import fontColor from "../../utils/fontColor";

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactImg = styled.img`
  height: 30px;
  width: 30px;

  ${(props) =>
    props.isResume &&
    css`
      height: 30px;
      width: 35px;
    `}
`;

export const ContactText = styled.label`
  color: ${fontColor};
  opacity: 0.6;
`;
