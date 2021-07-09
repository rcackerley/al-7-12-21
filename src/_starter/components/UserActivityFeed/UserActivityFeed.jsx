import React from "react";
import styled from "styled-components";

import ContentCard from "../ContentCard/ContentCard";
import TimelineCard from "../TimelineCard/TimelineCard";

const UserActivtiyFeedNav = <nav>Activity Tracking Reminders</nav>

const UserActivityFeed = ({ pastActivities }) => {

  return (
    <ContentCard headerComponent={UserActivtiyFeedNav}>
      <h1>Upcoming Activities</h1>
      <h1>Past Activities</h1>
      {
        pastActivities.map((activity) => (
          <TimelineCard activity={activity} />
        ))
      }
    </ContentCard>
  )
};

export default UserActivityFeed;
