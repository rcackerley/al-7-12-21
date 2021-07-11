import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

const ContentCardLayout = styled.div`
  display: grid;
  background: ${getColor("white")};
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 48px fit-content(100%);
  grid-template-columns: 1fr;
  margin-bottom: 10px;
`;

const Header = styled.nav`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  border-bottom: 1px solid ${getColor("greyLightest")};
`;

const Content = styled.div`
  grid-area: content;
  padding: 8px 20px;
`;

const ContentCard = ({ children, headerComponent, size }) => {
  return (
    <ContentCardLayout>
      <Header>
        { headerComponent }
      </Header>
      <Content>
        { children }
      </Content>
    </ContentCardLayout>
  )
};

export default ContentCard;
