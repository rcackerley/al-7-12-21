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

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  a {
    margin: 0 5px;
  }
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
        <a aria-label="Link to user's Facebook site" href="https://www.facebook.com/" >Facebook</a>
      </UserNameHeader>
      <SocialIconsWrapper>
        <a data-testid="user-card-social-link-personal" aria-label="Link to user's personal website" href={personalWebsite}>
          <CloudIcon />
        </a>
        <a data-testid="user-card-social-link-linkedin" aria-label="Link to user's LinkedIn" href={linkedinUrl}>
          <LinkedInIcon />
        </a>
        <a data-testid="user-card-social-link-twitter" aria-label="Link to user's twitter" href={`https://twitter.com/${twitterHandle}`}>
          <TwitterIcon />
        </a>
        <a data-testid="user-card-social-link-company" aria-label="Link to user's company website" href={personCompanyWebsite}>
          <LinkIcon />
        </a>
      </SocialIconsWrapper>
    </ContentCard>
  );
}

export default UserNameCard;
