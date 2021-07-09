import React from "react";
import styled from "styled-components";

import ContentCard from "../ContentCard/ContentCard";
import { EmptyState } from "../../shared/EmptyState/EmptyState";
import { default as CloudIcon } from "../../shared/Icons/Cloud";
import { default as EllipsisHorizontalIcon } from "../../shared/Icons/EllipsisHorizontal";
import { default as LinkIcon} from "../../shared/Icons/Link";
import { default as LinkedInIcon} from "../../shared/Icons/LinkedIn";
import { default as StarOutlinedIcon } from "../../shared/Icons/StarOutlined";
import { default as TwitterIcon } from "../../shared/Icons/Twitter";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UserNameCardHeader =
  <Header>
    <StarOutlinedIcon />
    <EllipsisHorizontalIcon />
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
      <EmptyState
        size="small"
        text={title}
        title={displayName}
      />
      <SocialWrapper>
        <a aria-label="Link to user's personal website" href={personalWebsite}>
          <CloudIcon />
        </a>
        <a aria-label="Link to user's personal website" href={personalWebsite}>
          <LinkedInIcon />
        </a>
        <a aria-label="Link to user's personal website" href={personalWebsite}>
          <TwitterIcon />
        </a>
        <a aria-label="Link to user's personal website" href={personalWebsite}>
          <LinkIcon />
        </a>
      </SocialWrapper>
    </ContentCard>
  );
}

export default UserNameCard;
