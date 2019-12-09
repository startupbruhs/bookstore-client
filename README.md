# Bookstore Client

### Check the lieve app on: https://startupbruhs.github.io/books

## Running the json web server as a backend

Prior to running the json-server you should install it.

1. Install JSON Server

```
npm install -g json-server
```

2. Go under

```
bookstore-client/s/assets
```

3. Run

```
json-server --watch db.json --port 3001
```

The source file that stores the data that the json-server will return is
located under

```
bookstore-client/s/assets/db.json
```

You can change the content there based on your needs.

**Please refer to https://github.com/typicode/json-server to find out how to add more routes.**

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
