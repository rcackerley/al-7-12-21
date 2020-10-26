import React from "react";
import { CircleButton } from "../../shared/CircleButton/CircleButton";
import { default as LiveFeedIcon } from "../../shared/Icons/LiveFeed";
import { default as KeypadIcon } from "../../shared/Icons/Keypad";
import { default as HelpIcon } from "../../shared/Icons/Help";
import { default as BoltIcon } from "../../shared/Icons/Bolt";
import { default as RocketIcon } from "../../shared/Icons/Rocket";
import { default as ChevronSmDownIcon } from "../../shared/Icons/ChevronSmDown";
import { DropdownWrapper } from "./TopNav.styles.js";
import { Text } from "./TopNav.styles.js";
import { Layout } from "./TopNav.styles.js";
import { IconWrapper } from "./TopNav.styles.js";
import { LeftContainer } from "./TopNav.styles.js";
import { StyledMenuIcon } from "./TopNav.styles.js";
import { Logo } from "./TopNav.styles.js";
import { Header } from "./TopNav.styles.js";
import { StyledSearchIcon } from "./TopNav.styles.js";
import { AppSearch } from "./AppSearch";

const actions = [
  StyledSearchIcon,
  LiveFeedIcon,
  KeypadIcon,
  HelpIcon,
  BoltIcon,
];

const UserDropdown = ({ name }) => (
  <DropdownWrapper>
    <Text>{name}</Text>
    <ChevronSmDownIcon />
  </DropdownWrapper>
);

const ActionBar = () => {
  return (
    <Layout>
      {actions.map((Icon, i) => (
        <IconWrapper key={i}>
          <Icon />
        </IconWrapper>
      ))}
      <UserDropdown name={"Robby"} />
      <CircleButton Icon={RocketIcon} />
    </Layout>
  );
};

export const TopNav = () => (
  <Header>
    <LeftContainer>
      <StyledMenuIcon />
      <Logo />
    </LeftContainer>
    <AppSearch />
    <ActionBar />
  </Header>
);
