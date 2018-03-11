# Contributing

Hey! I'm super glad you're interested in contributing to Macro Calculator. Helpful contributions are always welcome.

Please ensure you have understood the guidelines before contributing, it helps keep the code organized.

### Development Setup

Before you begin editing the code, make sure you have [Node](https://nodejs.org) v6.0.0+ installed. This is required for the building.

1. Fork/Clone the repository
2. Install dependencies with `npm install`

### Development

Now that you're all set up, you're ready to edit the code. All code you write should not be dependent on the browser *or* Node. It should be able to run in all Javascript environments, except what is inside the `server\` folder.

1. Update files in the `src` folder
2. During development you can use `npm run dev` for hot-reload, or `npm run devBuild`
3. Build files with `npm run build`

##### Scripts

```sh
$ npm run devBuild # build a bundle not compressed

$ npm run build # build a bundle gziped, requires `npm start` running to serve the gziped file

$ npm start # runs a server to be able to serve a .js.gz file to the index.html

$ npm run dev # runs the dev server and opens it in the browser, with hot-reload
```

##### Commits

Commit messages should follow a format of:

```
category: summary (info about issues fixed)

body text with additional information if needed
```

Categories you can use are:

* `breaking` - Indicates a breaking change
* `feat` - Indicates adding a feature
* `fix` - Indicates fixing a bug
* `perf` - Indicates improving performance
* `refactor` - Indicates refactoring of code
* `docs` - Indicates updating documentation

Information about issues fixed should include any issues fixed as a result of the commit, and should follow a format of:

```
(fixes #17)
```

Be sure to put the number of the issue you fixed.

##### File Structure

* `server\` - contains the the server files
	* `start.js` - the node server required to serve with gziped file
* `src\` - main source files
	* `actions\` - actions functions and actions types to be used with the reducers.
	* `components\` - the components without much logic.
	* `containers\` - components that uses files from components folder.
	* `helpers\` - clases with helper methods, like validation and calculations.
	* `modals\` - modal components that can be used in more than one component.
	* `reducers\` - the reducers(redux).
	* `screens\` - a full page, will be used to create the routes.
	* `store\` - contains the file that creates the stores
	* `App.js` - main component.
	* `client.js` - entry point that render the main component.
	* `client.min.js` - bundle created when do `npm devBuild`.
	* `client.min.js.gz` - bundle created for production with `npm build` (require the `npm start` running to work)
  * `index.html` - the page that will call the client.min.js

### Submitting an Issue

Submit an issue for the following reasons:

* You've found a bug
* You'd like to request a feature
* You have ideas about performance
* You have a general question for discussion

### Submitting a Pull Request

Submit a pull request if you'd like to address an issue. Be sure to follow the [development guide](https://github.com/matAlmeida/calculadora-macros/blob/master/CONTRIBUTING.md#development).
