# Dashboard Implementation

## Setup

\`\`\`bash
npm install && npm run dev
\`\`\`

## Tech Stack & Decisions

- Next.js + TypeScript + Python
- [Your styling choice] - Why? - Tailwind CSS - Chosen because I haven't used it yet and I wanted to learn it. Feels quick, easy and I would assume that it doesn't add overhead if you have proper reusable components
- [Other libraries] - Reasoning - Framer Motion - Drops the performance a bit, but it's allows to have versitile and smooth animations without having to figure them out from scratch
- Decisions
  - Next.js - A Framework that allows for increased performance if used correctly through Server-Side-Rendering (although the current dashboard seems very interactive meaning we will have significant render happening on Client's Side). Given it's a framework, the code and file structure follow a certain easy-to-recognise pattern (App Router, error pages, loading screens, etc.).
  - TypeScript - Help with validating all the data that's being passed around multiple components. Without it the app becomes prone to errors or we would have to implement extra checks with vanilla JS that simulate what TS is already doing out-of-the-box
  - Python (FastAPI) - Just a very quick BE setup to simulate data fetching mechanism. It's very far from a production-ready BE but I've added multiple improvments in a later section. I decided to use FastAPI (async-first framework) because in terms of benchmarks it's faster than Django (considered partialy-async) and much faster that Flask (which is sync). [GitHub Repository](https://github.com/Npetr0v97/tech-task-be)

## Time spent breakdown

- Grooming tickets -> 1.75h
- Initial structure and setup -> 0.25h
- Adding the Navbar and styling the elements -> 1h
- Adding the Hero Header component -> 0.5h
- Deploying the Card Container, Cards and all the rest of the Front End styling -> 2h
- Adding the mock API with Python -> 0.5h
- Making the app responsive -> 1h
- Adding dynamic loading -> 0.25h
- Implementing error handling -> 0.75h
- Adding basic animations -> 0.5h
- **Total** -> **8.5h**

## Future Improvements

- Implement a Redux given that we would like complex interactions between different components which will avoid endless prop drilldowns, keeping state at a high level, and personally I prefer Redux compared to useContext because all the data is kept in a centralized store and we can subscribe components to what's required. Redux will allow to breakdown the heavy setup that's being passed from top-level down to the Card level with the help of selectors.
- Implement light/dark theme using the Tailwind prefixes and switcher that will allow this to be done dynamically
- Add unit tests... because currently there are none
- In a lot of browsers there are certain ways to check how performant a device is (e.g. check if the user is using 3G, 4G, etc.). With Framer Motion in place the app got significantly heavier and I would remove the animations on less performant devices (we can still keep animations that are coming straigh from CSS).
- Back-end improvements:
  - Add authentication layer with short-lived tokens and refresh tokens
  - Connect to an actual Database where the data is stored. With the current setup, the configurations can be stored in MongoDB while all the tabular data will make more sense in an SQL DB
  - With the above improvements it would make sense to have dynamic routes based on the user's ID
- Knows issues/Bugs:
  - There's slight twitching in the dynamic loading because of the Framer Motion animations
