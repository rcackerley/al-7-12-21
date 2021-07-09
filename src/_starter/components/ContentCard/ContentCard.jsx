import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

const ContentCardLayout = styled.div`
  height: 100vh;
  display: grid;
  background: ${getColor("white")};
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 48px 300px;
  grid-template-columns: 1fr;
  padding: 8px;
`;

const Header = styled.nav`
  grid-area: header;
`;

const Content = styled.div`
  grid-area: content;
`;

const ContentCard = ({ children, headerComponent }) => {
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
