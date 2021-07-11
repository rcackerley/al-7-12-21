import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

const UserActionLinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${getColor("blue")};
`

const UserActionLink = ({ children, icon }) => {
  const Icon = icon;
  return (
    <UserActionLinkWrap>
      {icon && <Icon />}
      <a>
        {children}
      </a>
    </UserActionLinkWrap>
  );
};

export default UserActionLink;
