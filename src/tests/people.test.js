import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

it("The app renders without crashing", () => {
  const div = document.createElement('div');
  render(<App />, div);
});

describe("The navigation should change the page", () => {
  it("The page title should be 'People'", () => {
    render(<App />);
    expect(screen.getByTestId("people-page-title")).toHaveTextContent("People");
  });

  it("The navigation buttons should render different screens, the nav should have border-bottom style", () => {
    render(<App />);
    const navId = ['activity', 'tracking', 'reminders'];

    navId.map(async (id) => {
      await screen.findByTestId(`people-page-nav-${id}`);
      screen.getByTestId(`people-page-nav-${id}`).click();
      expect(screen.getByTestId(`people-page-nav-${id}`))
        .toHaveStyle(`border-bottom: 4px solid #4dc6ff`);
    })
  });
});


describe("Social Links should exist and have hrefs", () => {
  const navLinks = ['personal', 'linkedin', 'twitter', 'company'];
  it('each link should have accessible description', () => {
    render(<App />);
    navLinks.map(async link => {
      expect(await screen.getByTestId(`user-card-social-link-${link}`))
        .toHaveAttribute("aria-label");
    });
  })
  it('each link should have a href', () => {
    render(<App />);
    navLinks.map(async link => {
      expect(await screen.getByTestId(`user-card-social-link-${link}`)).toHaveAttribute("href");
    });
  })
});

describe("The user activity feed should render", () => {
  it("The feed should exist", async () => {
    render(<App />);
    expect(await screen.findByTestId("past-activity-feed"))
      .toHaveTextContent("Voicemail");
  });
})
