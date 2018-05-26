# Agency Client Panel

## Quick start

1. Clone this repo using `git clone`
2. Run `npm run setup` to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
3. Run `npm run clean` to delete the example app.

## Running
- Run `yarn start` if you gonna work with stage server
- Run `yarn start:prod`if you gonna work with production server
- Run `yarn start:local` if you gonna work with local server


## Building
- Run `npm run build:prod` for production
- Run `npm run build:stage` for staging

Api urls are described in `/app/globla-constants.js`


Now you're ready to rumble!

## Documentation

- [Intro](docs/general): What's included and why
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
  
  