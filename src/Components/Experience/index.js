import React from "react";

import Tag from "../Tag";

import * as S from "./styles";

export default function Experience({ experience }) {
  return (
      <S.ExperienceWrapper>
        <S.ExperienceDate>{experience.date}</S.ExperienceDate>
        <S.ExperienceRightContainer>
          <S.ExperienceTitle>
            {experience.role} · {experience.enterprise}
          </S.ExperienceTitle>
          <S.ExperienceDescription>
            {experience.description}
          </S.ExperienceDescription>
          <S.TagsWrapper>
            {experience.tags.map((tag, index) => (
              <Tag text={tag} key={index} />
            ))}
          </S.TagsWrapper>
        </S.ExperienceRightContainer>
      </S.ExperienceWrapper>
  );
}
