import styled, { css } from "styled-components";

import fontColor from "../../utils/constants/fontColor";

import { breakpoints } from "../../styles/breakpoints";

export const Navbar = styled.nav`
  margin: 100px 0 0 70px;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 15px;
  }

  @media ${breakpoints.md} {
    visibility: hidden;
    margin: 0;

    div {
      gap: 0;
    }
  }
`;

export const NavSection = styled.a`
  color: ${fontColor};
  opacity: 0.4;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.activeSection === props.title &&
    css`
      opacity: 1;
    `}
`;

export const SlideBar = styled.div`
  height: 25px;
  width: 3px;
  background: ${fontColor};
  border-radius: 30px;
  position: absolute;
  opacity: 0;
  left: 50px;
  top: calc(${(props) => props.top}px - 103px);

  ${(props) =>
    props.slideBarVisible &&
    css`
      opacity: 1;
    `}

    ${props => props.transition && css`
        transition: all 200ms;
    `}
`;
