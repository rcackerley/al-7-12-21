import React from "react";
import styled from "styled-components";
import { getColor } from "../../theme/theme";

const GreyCard = styled.div`
  background: ${getColor("bgGrey")};
  border: 1px solid ${getColor("greyLightest")};
  height: 226px;
  margin-bottom: 10px;
`;

const EmptyCard = () => {
  return (
    <GreyCard />
  );
};

export default EmptyCard;
