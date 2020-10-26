# Person Page Initial Panels

At SalesLoft, we partner with product and design, working to bring their ideas to life. We are often tasked with building features that require us to stitch multiple data sources together. Our customers have high standards; writing and maintaining tests is a key component in our jobs.

## Requirements

We want to you to extend our initial App adding in two additional panels to our People page. Lay them out with other placeholder panels according to the specs in the [mock](https://www.figma.com/file/rAGW6VoGxdYKaEgQdGZ9jY/UI-Engineering-Exercise?node-id=0%3A1). Only 2 panels should have any content, but there should be a total of 9 panels across the grid. The initial payload can be found [here](https://ui-offline-exercise.s3.amazonaws.com/data/people.json), and you can find the additional data included in the `activities` key in the payload.

Make commits often and at various stages to show your train of thought. Use all the best practices you’re familiar with - well tested, extendability, encapsulation, DRY code, readable, modifiable, scalable, etc

## Acceptance Criteria

- Build a 3 column layout based on the provided design
- Populate 2 panels with data from api
- Write at least 3 tests, making sure to test the activity feed (center column)
- The center panel has 3 tabs, but only the first tab needs to be populated with data. The other two tabs can be left blank, but should be toggleable
- The panels should be responsive

## Technical Details

- An icon list can be found here: http://localhost:3000/icons
- A color list can be found here: http://localhost:3000/colors
- Components for iconography and colors are included and can be optionally used.
- There is a helper function to find colors: `import { getColor } from "../../theme/theme";`
- Icons can be easily used `import { default as EnvelopeIcon } from "../../shared/Icons/Envelope";`
