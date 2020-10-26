import styled from "styled-components";
import { getColor, getBreakpoint } from "../../theme/theme";
import { default as MenuIcon } from "../../shared/Icons/Menu";
import { default as SalesloftLogoWhiteIcon } from "../../shared/Icons/SalesloftLogoWhite";
import { default as SearchIcon } from "../../shared/Icons/Search";

export const StyledMenuIcon = styled(MenuIcon)`
  margin-left: 26px;
  cursor: pointer;
`;

export const Header = styled.header`
  transition: width 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: ${getColor("indigoDark")};
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
  color: ${getColor("white")};
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;
`;

export const IconWrapper = styled.div`
  margin: 0 8px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 14px;
  margin-right: 4px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(SalesloftLogoWhiteIcon)`
  margin-left: 24px;
  height: 24px;
  width: 100px;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  @media (min-width: ${getBreakpoint("lg")}) {
    display: none;
  }
`;
