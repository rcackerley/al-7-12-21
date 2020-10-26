import React from "react";
import styled from "styled-components";
import { default as SearchIcon } from "../../shared/Icons/Search";
import { getColor, getBreakpoint } from "../../theme/theme";

const InputWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  @media (max-width: ${getBreakpoint("lg")}) {
    display: none;
  }
`;

const StyledInput = styled.input`
  flex-grow: 1;
  height: 32px;
  width: 100%;
  padding: 0 14px;
  background-color: ${(props) =>
    props.searchFocused ? getColor("white") : "rgba(255, 255, 255, 0.15)"};
  border: 0;
  border-radius: 2px 0 0 2px;
  color: ${(props) =>
    props.searchFocused ? getColor("greyDark") : getColor("white")};
  transition: background-color ease 0.12s;

  ::placeholder {
    color: ${(props) =>
      props.searchFocused ? getColor("greyDark") : getColor("white")};
    opacity: 0.8;
  }
  :focus {
    outline: 0;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  height: 14px;
  width: 14px;
  position: relative;
  left: -24px;
`;

export const AppSearch = () => (
  <InputWrapper>
    <StyledInput placeholder="Search people and accounts" />
    <StyledSearchIcon />
  </InputWrapper>
);
