# modern-react-boilerplate

Basic boilerplate for React 16, Webpack 4, React Router 4.
A minimal React project boilerplate suitable for quick app prototyping (front-end only option) or as a starting point for app development (full-stack option).

## Features

- React >16.4
- Webpack 4
- React Router 4
- Babel 7
- ESLint enabled (see instructions below for set-up)
- MySQL or MongoDB

## Installation

### For Babel 7 (includes local eslint & prettier)

- `git clone https://github.com/BrunoTorresF/modern-react-boilerplate.git`
- cd modern-react-boilerplate
- `npm install`

### For Babel 6

- `git clone https://github.com/BrunoTorresF/modern-react-boilerplate.git -b babel-6`
- cd modern-react-boilerplate
- `npm install`

### FrontEnd Only Development

- Start Webpack Dev Server with `npm run frontend`

### Fullstack Development

- Start Webpack with `npm run dev`
- Start nodemon with `npm run start-dev`
- visit `http://localhost:3000/`
- edit your database connection details and delete the database file you're **not** using

### Installing ESLint Globally (optional)

If you don't have ESLint already install, you can install ESLint and the required dependencies with:
`npm i -g eslint eslint-config-airbnb eslint-plugin-node babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y prettier eslint-config-prettier eslint-plugin-prettier`
