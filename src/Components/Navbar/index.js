import React, { useState } from "react";

import removeAccentuation from "../../utils/functions/removeAccentuation";

import * as S from "./styles";

export default function Navbar({
  coordinates,
  slideBarVisible,
  sections,
  navSectionRefs,
  activeSection,
  setActiveSection,
}) {
  const [transition, setTransition] = useState(false);

  function slideTransition() {
    setTransition(true);

    setTimeout(() => {
      setTransition(false);
    }, 200);
  }

  return (
    <S.Navbar>
      <S.SlideBar
        top={coordinates ? coordinates.top : 0}
        slideBarVisible={slideBarVisible}
        transition={transition}
      />

      <div>
        {sections.map((section, index) => {
          const ref = React.createRef();
          navSectionRefs.current[index] = ref;
          return (
            <S.NavSection
              key={index}
              ref={ref}
              href={`#${removeAccentuation(sections[index])}`}
              activeSection={activeSection}
              title={removeAccentuation(sections[index])}
              onClick={() => {
                slideTransition();
                setActiveSection(removeAccentuation(sections[index]));
              }}
            >
              {section.toLocaleUpperCase()}
            </S.NavSection>
          );
        })}
      </div>
    </S.Navbar>
  );
}
