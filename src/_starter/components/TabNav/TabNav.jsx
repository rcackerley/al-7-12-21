import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

const TabNavWrapper = styled.nav`
  display: flex;
  height: 100%;
`;

const Tab = styled.a`
  padding-top: 16px;
  padding-bottom: 16px;
  margin-right: 12px;
  border-bottom: 4px solid
    ${({ isActive }) => (isActive ? getColor("blueLight") : "transparent")};
`;

const TabNav = ({ activeTab, links, onClick }) => {
  return (
    <TabNavWrapper>
      {
        links.map((link) => {
          return (<Tab isActive={ activeTab === link.title } onClick={() => onClick(link.title)} data-testid={`people-page-nav-${link.id}`}>{ link.title }</Tab>)})
      }
    </TabNavWrapper>
  );
};

export default TabNav;
