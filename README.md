# Bookstore Client

### Check the lieve app on: https://startupbruhs.github.io/bookstore-client/

## Install dependencies

> This project is using yarn as a package manager to avoid collision we suggest using yarn
> and we will be using yarn in this README
> If you want to use npm just remove yarn.lock to avoid possible collisions

    yarn

## Running the json web server as a backend

Prior to running the json-server you should install it.

1. Install JSON Server

```
yarn global add json-server
```

2. Run

```
cd src/assets && json-server --watch db.json --port 3001
```

The source file that stores the data that the json-server will return is
located under

```
bookstore-client/src/assets/db.json
```

You can change the content there based on your needs.

**Please refer to https://github.com/typicode/json-server to find out how to add more routes.**

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
