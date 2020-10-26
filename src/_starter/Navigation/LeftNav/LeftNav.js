import React from "react";
import styled from "styled-components";
import { NavLink } from "./NavLink";
import { getColor } from "../../theme/theme";
import { default as AccountIcon } from "../../shared/Icons/Account";
import { default as BarChartIcon } from "../../shared/Icons/BarChart";
import { default as EnvelopeIcon } from "../../shared/Icons/Envelope";
import { default as HomeIcon } from "../../shared/Icons/Home";
import { default as PersonIcon } from "../../shared/Icons/Person";
import { default as PhoneIcon } from "../../shared/Icons/Phone";
import { default as QuoteLeftIcon } from "../../shared/Icons/QuoteLeft";
import { default as RocketIcon } from "../../shared/Icons/Rocket";
import { default as TemplatesIcon } from "../../shared/Icons/Templates";

const LeftNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background-color: ${getColor("indigoDark")};
`;

export const links = [
  { title: "Home", pathName: "/dashboard", icon: HomeIcon },
  { title: "Cadences", pathName: "/cadences", icon: RocketIcon },
  {
    title: "Accounts",
    pathName: "/company",
    icon: AccountIcon,
  },
  { title: "People", pathName: "/people", isActive: true, icon: PersonIcon },
  { title: "Emails", pathName: "/emails", icon: EnvelopeIcon },
  { title: "Calls", pathName: "/calls", icon: PhoneIcon },
  {
    title: "Templates",
    pathName: "/templates",
    icon: TemplatesIcon,
  },
  {
    title: "Snippets",
    pathName: "/snippets",
    icon: QuoteLeftIcon,
  },
  {
    title: "Analytics",
    pathName: "/analytics",
    icon: BarChartIcon,
  },
];

export const LeftNav = ({ isExpanded }) => {
  return (
    <LeftNavContainer>
      {links.map((link, i) => {
        return (
          <NavLink
            icon={link.icon}
            isExpanded={isExpanded}
            key={`nav-link-${i}`}
            pathName={link.pathName}
            title={link.title}
            isActive={link.isActive}
          />
        );
      })}
    </LeftNavContainer>
  );
};
