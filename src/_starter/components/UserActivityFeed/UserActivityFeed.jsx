import React, { useState } from "react";
import styled from "styled-components";

import { getColor } from "../../theme/theme";

import Button from "../Button/Button";
import ContentCard from "../ContentCard/ContentCard";
import TabNav from "../TabNav/TabNav";
import TimelineCard from "../TimelineCard/TimelineCard";
import UserActionLink from "../UserActionLink/UserActionLink";

import { default as ChevronSmDownIcon } from "../../shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "../../shared/Icons/Phone";
import { default as PlusIcon } from "../../shared/Icons/Plus";

const ButtonsWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direct: row;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const ButtonWrapLeft = styled.div`
  padding-right: 10px;
  border-right: 1px solid ${getColor("greyLightest")};
`;

const ButtonWrapRight = styled.div`
  padding-left: 10px;
`;

const UserActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const EmptyActionText = styled.p`
  text-align:center;
  margin-bottom: 16px;
  color: ${getColor("greyDark")};
`;

const UserActivityFeed = ({ pastActivities, userName }) => {

  const [ activeTab, setActiveTab ] = useState("Activity");

  const UserActivityComponent =
    <div>
      <h1>Upcoming Activities</h1>
      <EmptyActionText>
        Once actions are scheduled, they'll appear here
      </EmptyActionText>
      <h1>Past Activities</h1>
      { pastActivities.length &&
        pastActivities.map((activity) => (
          <TimelineCard activity={activity} userName={userName} />
        ))
      }
    </div>;

  const TrackingComponent = <h1>Tracking</h1>
  const RemindersComponent = <h1>Reminders</h1>

  const links = [
    {
      title: "Activity",
      pathName: "/activity",
    },
    {
      title: "Tracking",
      pathName: "/tracking",
    },
    {
      title: "Reminders",
      pathName: "/reminders",
    }
  ];
  const content = {
    Activity: {
      content: UserActivityComponent,
    },
    Tracking: {
      content: TrackingComponent
    },
    Reminders: {
      content: RemindersComponent,
    }
  }

  function handleNavClick(tabName) {
    setActiveTab(tabName);
  };

  const UserActivtiyFeedNav = <TabNav activeTab={activeTab} links={links} onClick={handleNavClick} />

  return (
    <ContentCard headerComponent={UserActivtiyFeedNav}>
      <ButtonsWrap>
        <ButtonWrapLeft>
          <Button primary icon={ChevronSmDownIcon}>Person</Button>
        </ButtonWrapLeft>
        <ButtonWrapRight>
          <Button icon={ChevronSmDownIcon}>Activity</Button>
        </ButtonWrapRight>
        <UserActionsWrapper>
          <UserActionLink icon={PhoneIcon}>Log a Call</UserActionLink>
          <UserActionLink icon={PlusIcon}>Add a Note</UserActionLink>
        </UserActionsWrapper>
      </ButtonsWrap>
      {content[activeTab].content ? content[activeTab].content : <h1>Something Went wrong</h1>}
    </ContentCard>
  );
};

export default UserActivityFeed;
