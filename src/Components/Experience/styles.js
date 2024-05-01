import styled from "styled-components";

import fontColor from "../../utils/constants/fontColor";

export const ExperienceWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  padding: 15px 20px;
  transform: translateX(-20px);
  transition: all 100ms;

  &:hover {
    background-color: rgba(233, 205, 255, 0.1);

    h5 {
      color: #db00ff;
    }
  }
`;

export const ExperienceDate = styled.label`
  color: ${fontColor};
  opacity: 0.6;
  font-size: 13px;
  transform: translateY(3px);
  margin-right: 20px;
  white-space: nowrap;
`;

export const ExperienceRightContainer = styled.div`
  width: 73%;
  margin-left: auto;
`;

export const ExperienceTitle = styled.h5`
  opacity: 0.9;
  color: ${fontColor};
  font-size: 17px;
  font-weight: 500;
`;

export const ExperienceDescription = styled.p`
  text-wrap: balance;
  opacity: 0.6;
  margin: 10px 0 15px;
  font-size: 14px;
  color: ${fontColor};
`;

export const TagsWrapper = styled.p`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
`;
