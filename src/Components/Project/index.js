import React from "react";

import Tag from "../Tag";

import * as S from "./styles";

import getImage from "../../utils/functions/getImage";

export default function Project({ project }) {
  return (
    <S.ExperienceWrapper>
      <S.Image src={getImage(project.image)} className="project-image" alt="project-printscreen" />
      <S.RightContainer>
        <S.Title>
          {project.title}
          <img src={getImage("arrow.png")} className="arrow" alt="arrow" />
        </S.Title>
        <S.Description>{project.description}</S.Description>
        <S.TagsWrapper>
          {project.tags.map((tag, index) => (
            <Tag text={tag} key={index} />
          ))}
        </S.TagsWrapper>
      </S.RightContainer>
    </S.ExperienceWrapper>
  );
}
