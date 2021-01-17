# Weather Widget App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the Project

You should have [YARN](https://yarnpkg.com/) installed on your syste in order to run this project.

First, you must install node modules - 
```
yarn install
```

Run the project - 
```
yarn start
```

The project should run on your [Localhost PORT 3000](http://localhost:3000/) by default.

## Project Structure
...

***src***
- **components**
  - **card** - *A custom Card component that encapsulates it's children components in a box like structure.*
    - *card.tsx*
    - *card.css*
  - **input-field** - *An input field component for re-usability.*
    - *input-field.tsx*
    - *input-field.css*
  - **radio-field** - *A radio group component for re-usability.*
    - *radio-field.tsx*
    - *radio-field.css*
  - **weather-information** - *A small custom component to display weather information inside the card component.*
    - *weather-information.tsx*
    - *weather-information.css*
 *index.ts*
- **interfaces**
  - *radio-interface.ts*
- **widgets**
  - **weather-widget** - *A custom weather widget to show weather information based on the current location of the user.*
    - *weather-widget.tsx*
    - *weather-widget.css*
  ...
...

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
