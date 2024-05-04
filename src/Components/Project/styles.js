import styled from "styled-components";

import fontColor from "../../utils/constants/fontColor";

import { breakpoints } from "../../styles/breakpoints";

export const ExperienceWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  padding: 15px 20px;
  transform: translateX(-20px);
  transition: all 100ms;
  cursor: pointer;

  &:hover {
    background-color: rgba(233, 205, 255, 0.1);

    h5 {
      color: #db00ff;
    }

    .project-image {
      border: 2px solid rgba(192, 192, 192, 0.7);
    }

    .arrow {
      transition: 100ms transform;
      filter: brightness(0) saturate(100%) invert(17%) sepia(93%)
        saturate(3430%) hue-rotate(279deg) brightness(108%) contrast(128%);
      transform: translateX(-2px);
    }
  }
`;

export const Image = styled.img`
  transform: translateY(5px);
  border-radius: 5px;
  margin-right: 20px;
  height: 70px;
  width: 120px;
  border: 2px solid rgba(128, 128, 128, 0.5);

  @media ${breakpoints.md} {
    height: 50%;
    width: 30%;
  }
`;

export const RightContainer = styled.div`
  width: 73%;
  margin-left: auto;
`;

export const Title = styled.h5`
  opacity: 0.9;
  color: ${fontColor};
  font-size: 17px;
  font-weight: 500;

  img {
    height: 15px;
    transform: translateX(4px);
    margin-left: 8px;
    rotate: 135deg;
    filter: brightness(0) saturate(100%) invert(91%) sepia(27%) saturate(1420%)
      hue-rotate(189deg) brightness(102%) contrast(102%);
  }
`;

export const Description = styled.p`
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
