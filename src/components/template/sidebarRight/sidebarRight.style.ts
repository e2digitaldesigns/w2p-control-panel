import styled, { keyframes } from "styled-components";

export const SidebarRightWrapper = styled.div`
  height: 100%;
  border-left: 0.0625rem solid ${props => props.theme.colors.borderColor};
  display: grid;
  grid-template-rows: 3.125rem auto;
`;

export const SidebarRightMenu = styled.nav`
  height: 3.125rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 0.0625rem solid ${props => props.theme.colors.borderColor};
`;

interface IntSidebarRightMenuItem {
  isActive: boolean;
  isCounter?: boolean;
}

export const SidebarRightMenuItem = styled.div<IntSidebarRightMenuItem>`
   {
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-left: 0.0625rem solid ${props => props.theme.colors.borderColor};

    background-color: ${props =>
      props.isActive && props.theme.colors.borderColor};
    &:first-child {
      border-left: 0;
    }
    > svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${props =>
        props.isActive
          ? props.theme.colors.iconColorAvtive1
          : props.theme.colors.iconColor};
    }

    &:hover {
      background-color: ${props =>
        !props.isActive && props.theme.colors.bg.hover1};
      > svg:first-child {
        color: ${props =>
          !props.isActive && props.theme.colors.iconColorHover1};
      }
    }
  }
`;

interface IntNumCount {
  amount?: number;
}

export const NumCount = styled.div<IntNumCount>`
  display: flex;
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 50%;
  top: 0.25rem;
  right: 0.25rem;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.625rem;
  opacity: ${props => (props.amount ? 1 : 0)};
  transition: opacity 0.5s;
  background: ${props => props.theme.colors.iconColorHover1};
`;

export const SidebarScrollerContainer = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const slideInAnimation = keyframes`
 0% { left: 100% }
 100% { left: 0 }`;

const slideOutAnimation = keyframes`
0% { left: 0px }
100% { left: -100% }`;

interface IntSidebarScrollerPanel {
  isActive: boolean;
}

export const SidebarPanel = styled.div<IntSidebarScrollerPanel>`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  animation-name: ${props =>
    props.isActive ? slideInAnimation : slideOutAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  background: ${props => props.theme.colors.bg.main};
`;
