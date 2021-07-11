import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

import { default as ClickIcon } from "../../shared/Icons/Click";
import { default as EyeIcon } from "../../shared/Icons/Eye";
import { default as ReplyIcon } from "../../shared/Icons/Reply";

const SocialCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  color: ${getColor("grey")};
`;

const IconCountWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;
const IconWrap = styled.div`
  margin-left: 3px;
  display: flex;
  align-items: center;
`;

const SocialCount = ({ count }) => {
  const { clicks, replies, views } = count;
  return (
    <SocialCountWrapper>
      <IconCountWrap>
        <IconWrap>
          <EyeIcon />
        </IconWrap>
        {views}
      </IconCountWrap>
      <IconCountWrap>
        <IconWrap>
          <ClickIcon />
        </IconWrap>
        {clicks}
      </IconCountWrap>
      <IconCountWrap>
        <IconWrap>
          <ReplyIcon />
        </IconWrap>
        {replies}
      </IconCountWrap>
    </SocialCountWrapper>
  )
}

export default SocialCount;
