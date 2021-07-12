import React from "react";
import { render, screen } from "@testing-library/react";
import UserActivitiyFeed from "../_starter/components/UserActivityFeed/UserActivityFeed";

import pastActivities from "./mock/activites";

describe("the user feed should render properly", () => {
  test("The component should render", () => {
    render(<UserActivitiyFeed pastActivities={pastActivities.data}/>);
    expect(screen.getByText("Upcoming Activities")).toBeInTheDocument();
    expect(screen.getByTestId("people-page-content")).toBeInTheDocument();
  })
  test("The number of cards should match the length of the data", async () => {
    render(<UserActivitiyFeed pastActivities={pastActivities.data}/>);
    const activityCards = await screen.findByTestId("past-activity-feed-card");
    expect(activityCards).toHaveLength(pastActivities.data.length);
  });
});
