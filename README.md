# playground2

npm install -g corepack

yarn set version 4.4.1

yarn install

yarn dev

NOTE: The project might not run the first time. Just stop and run yarn dev again.

Open browser and go to http://localhost:5173

NOTE: You may have to refresh the page the first time.\
The remote apps have their own routing, be sure to try them out as well.

## Description

1. Project structure is a modul-lith with 3 independent SPAs\
  1.1. Each individual app can be run and deployed independently\
  1.2. They also share a common package.json file, so common dependencies can be updated in one go, while individual apps can also maintain their own version of the package.\
  1.3. Similarly common config files can be kept in apps. It may have common plugins or startup code.
2. Shows how we can mix SPA technologies like React and Angular (Angular code is mounted by React code)