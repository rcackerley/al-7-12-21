import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

const Btn = styled.button`
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid ${({ primary }) => (primary ? getColor("blue") : getColor("greyLightest"))};
  color: ${({ primary }) => (primary ? getColor("white") : getColor("black"))};
  background-color: ${({ primary }) => (primary ? getColor("blue") : getColor("white"))};
`;

const Button = ({ children, primary, icon }) => {
  const Icon = icon;
  return(
    <Btn primary={primary}>
      {children}
      {icon && <Icon />}
    </Btn>
  )
};

export default Button;
