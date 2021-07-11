import React, { useEffect, useState } from "react";
import styled from "styled-components";

import EmptyCard from "../../components/EmptyCard/EmptyCard";
import UserActivityFeed from "../../components/UserActivityFeed/UserActivityFeed"
import UserNameCard from "../../components/UserNameCard/UserNameCard";

import { getColor } from "../../theme/theme";
import { fetchData } from "../../services";

const PageLayout = styled.div`
  height: 100vh;
  padding: 10px;
  display: grid;
  background: ${getColor("greyLightest")};
  grid-template-areas:
    'header header header'
    'left center right';
  grid-template-rows: 50px 9fr;
  grid-template-columns: 3fr 8fr 4fr;
`;

const Header = styled.h1`
  grid-area: header;
  background: ${getColor("white")};
  margin-bottom: 10px;
`;
const Left = styled.aside`
  grid-area: left;
`;
const Right = styled.aside`
  grid-area: right;
  margin-left: 10px;
`;
const Center = styled.main`
  grid-area: center;
  margin-left: 10px;
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
    console.log('upcoming_activities', data.upcoming_activities);
    const upcomingActivitiesData = await fetch(upcoming_activities._href);
    setUpcomingActivities(upcomingActivitiesData.data);
    console.log('data', data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <PageLayout>
      <Header>People</Header>
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
