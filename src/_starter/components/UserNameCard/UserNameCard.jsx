import React from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

import ContentCard from "../ContentCard/ContentCard";
import { default as CloudIcon } from "../../shared/Icons/Cloud";
import { default as EllipsisHorizontalIcon } from "../../shared/Icons/EllipsisHorizontal";
import { default as LinkIcon} from "../../shared/Icons/Link";
import { default as LinkedInIcon} from "../../shared/Icons/LinkedIn";
import { default as StarOutlinedIcon } from "../../shared/Icons/StarOutlined";
import { default as TwitterIcon } from "../../shared/Icons/Twitter";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const HeaderIconWrapper = styled.div`
  display: flex;
  margin: 8px 0;
  color: ${({ color }) => (color ? getColor(color) : getColor("black"))};
  `;

const UserNameHeader = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const FacebookLink = styled.a`
  margin-bottom: 16px;
`;


const UserNameCardHeader =
  <Header>
    <HeaderIconWrapper color="orange">
      <StarOutlinedIcon />
    </HeaderIconWrapper>
    <HeaderIconWrapper>
      <EllipsisHorizontalIcon />
    </HeaderIconWrapper>
  </Header>
;
const UserNameCard = ({
  displayName,
  linkedinUrl,
  twitterHandle,
  personCompanyWebsite,
  personalWebsite,
  title,
}) => {
  return(
    <ContentCard headerComponent={UserNameCardHeader}>
      <UserNameHeader>
        <h1>{displayName}</h1>
        <p>{title}</p>
        <a aria-label="Link to user's Facebook site">Facebook</a>
      </UserNameHeader>
      <SocialWrapper>
        <a aria-label="Link to user's personal website" href={personalWebsite}>
          <CloudIcon />
        </a>
        <a aria-label="Link to user's LinkedIn" href={linkedinUrl}>
          <LinkedInIcon />
        </a>
        <a aria-label="Link to user's twitter" href={twitterHandle}>
          <TwitterIcon />
        </a>
        <a aria-label="Link to user's company website" href={personCompanyWebsite}>
          <LinkIcon />
        </a>
      </SocialWrapper>
    </ContentCard>
  );
}

export default UserNameCard;
