import React, { useEffect, useState } from "react";
import styled from "styled-components";

import EmptyCard from "../../components/EmptyCard/EmptyCard";
import UserActivityFeed from "../../components/UserActivityFeed/UserActivityFeed"
import UserNameCard from "../../components/UserNameCard/UserNameCard";

import { getBreakpoint, getColor } from "../../theme/theme";
import { fetchData } from "../../services";

const PageLayout = styled.div`
  height: 100vh;
  padding: 10px;
  display: grid;
  background: ${getColor("greyLightest")};
  @media (min-width: ${getBreakpoint("xs")}){
    grid-template-areas:
      'header'
      'left'
      'center'
      'right';
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
  @media (min-width: ${getBreakpoint("md")}){
    grid-template-areas:
      'header header header'
      'left center right';
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 2fr 1fr;
  }
  column-gap: 10px;
`;

const Header = styled.header`
  grid-area: header;
  background: ${getColor("white")};
  display: flex;
  align-items: center;
  padding: 16px 20px;
  color: ${getColor("greyDarkest")};
  margin-bottom: 10px;
`;
const Left = styled.aside`
  grid-area: left;
`;
const Right = styled.aside`
  grid-area: right;
`;
const Center = styled.main`
  flex: 1;
  grid-area: center;
`;

const UserActivity = () => {
  const USER_DATA_URL = `https://ui-offline-exercise.s3.amazonaws.com/data/people.json`;

  const [ userData, setUserData ] = useState({});
  const [ upcomingActivities, setUpcomingActivities ] = useState({});
  const [ pastActivities, setPastActivities ] = useState({});

  async function fetchUserData(){
    const data = await fetchData(USER_DATA_URL);
    setUserData(data);
    const { activities, upcoming_activities } = data;

    const activitiesData = await fetchData(activities._href)
    setPastActivities(activitiesData.data)
    const upcomingActivitiesData = await fetch(data.upcoming_activities._href);
    setUpcomingActivities(upcomingActivitiesData.data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <PageLayout>
      <Header data-testid="people-page-title">People</Header>
      <Left>
        <UserNameCard
          displayName={userData.display_name}
          linkedinUrl={userData.linkedin_url}
          twitterHandle={userData.twitter_handle}
          personCompanyWebsite={userData.person_company_website}
          personalWebsite={userData.personal_website}
          title={userData.title}
        />
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </Left>
      <Center>
        {!!pastActivities.length && (
          <UserActivityFeed pastActivities={ pastActivities } userName={userData.display_name} />
        )}
      </Center>
      <Right>
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </Right>
    </PageLayout>
  )
}

export default UserActivity
