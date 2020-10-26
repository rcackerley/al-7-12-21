# SalesLoft UI Exercise

## The Why

At SalesLoft, we are looking for team oriented, technically strong, and results focused engineers. We believe in empowering engineers to work in ways that bring out the best in them. With that in mind, we’ve designed this exercise to be done in your time instead of a traditonal on the spot whiteboarding challenge. We use this exercise to evaluate candidates' technical competency, but also using it as a way for you to have an idea of what it is like working at SalesLoft.

The exercise is written in React, and we’ve included a few libraries (Styled Components / React Testing Library) that we use daily. If you are not familiar with them or more comfortable with other tools, feel free to use whatever works best for you. We want this to be a good representation of what a typical day looks like, so we have included a [Card](https://github.com/SalesLoft/ui-engineer-exercise/blob/master/CARD.md) that lays out the specific requirements and acceptance criteria for the exercise along with an inspectable [mock](https://www.figma.com/file/rAGW6VoGxdYKaEgQdGZ9jY/UI-Engineering-Exercise?node-id=0%3A1).

We also believe in continuous improvement; if you have any feedback about the exercise, please submit via [this google form](https://docs.google.com/forms/d/e/1FAIpQLSegccTpT9f0xZu13ZNyABGu8alL_YzSXhPNSGR1JtZPfuCECg/viewform).

## Getting Started

1. Clone the repo
   `$ git clone git@github.com:SalesLoft/ui-engineer-exercise.git`
2. Install dependencies
   `$ npm i`
3. Start the application
   `$ npm start`
   
## Inspecting the mock

1. Click the link to figma and create a free account
2. Select an element to view its styles
3. Hover over elements in order to see layout and spacing

## Submission

Submit the exercise via Greenhouse. The submission should include:

- A link to source files or Github repo
- A link to a running version of the application (We recommend Netlify)

## Setting up Netlify

- Login to your Netlify account or create one with your Github account
- Click the “Sites” tab and click the button “New site from Git”
- Follow the setup guide
  - Connect Netlify to your Github account
  - Pick the repo for your exercise (If it’s not listed, you may need to configure [Netlify access to Github](https://github.com/apps/netlify/installations/new) )
  - For “Branch to Deploy” Choose the branch where your final work is stored
  - Build command - `npm run build`
  - Publish Directory - `build`
