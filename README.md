# Modern React + Typescript boilerplate

Basic boilerplate for React 16 with Typescript support, Webpack 4, React Router 4.
A minimal React project boilerplate suitable for quick app prototyping (front-end only option) or as a starting point for app development (full-stack option).

## Features :fire:

- React >16.4
- Typescript >3.7
- Webpack 4
- React Router 4
- Babel 7
- ESLint enabled (see instructions below for set-up) with Prettier
- MySQL or MongoDB

## Installation :boom:

### Choose your installation type:

#### Typescript :rocket: (includes eslint & prettier)
- `git clone https://github.com/BrunoTorresF/modern-react-boilerplate.git -b typescript`
- `cd modern-react-boilerplate`
- `npm i`

#### For Babel 7 (includes locally installed eslint & prettier)

- `git clone https://github.com/BrunoTorresF/modern-react-boilerplate.git`
- `cd modern-react-boilerplate`
- `npm install`

#### For Babel 6

- `git clone https://github.com/BrunoTorresF/modern-react-boilerplate.git -b babel-6`
- `cd modern-react-boilerplate`
- `npm install`

#### If you don't need/want ESLint/Prettier integration

- `git clone https://github.com/BrunoTorresF/modern-react-boilerplate.git -b no-eslint`
- `cd modern-react-boilerplate`
- `npm install`

### Choose your development needs:

#### Front-end Only Development

- Start Webpack Dev Server with `npm run frontend`

#### Fullstack Development

- Start Webpack with `npm run dev`
- Start nodemon with `npm run start-dev`
- visit `http://localhost:3000/`
- edit your database connection details and delete the database file you're **not** using

### Optional

#### Installing ESLint Globally (optional)

If you don't have ESLint already install, you can install ESLint and the required dependencies with:
`npm i -g eslint eslint-config-airbnb eslint-plugin-node babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y prettier eslint-config-prettier eslint-plugin-prettier`
