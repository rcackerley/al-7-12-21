import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

const UserActionLinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${getColor("blue")};
  margin-left: 27px;
  white-space: nowrap;
`;

const IconWrap = styled.div`
  display: flex;
  margin-right: 6px;
`;

const UserActionLink = ({ children, icon }) => {
  const Icon = icon;
  return (
    <UserActionLinkWrap>
        {icon &&
          <IconWrap>
            <Icon />
          </IconWrap>
        }
      <a href={`/${children}`}>
        {children}
      </a>
    </UserActionLinkWrap>
  );
};

export default UserActionLink;
