
npm install -g @angular/cli

npm install typescript
npm install -g typescript@next
tsc point.ts -> point.js

ng --version

ng new ngApp
cd ngApp
ng serve --open       4200

e2e -> end to end tests, basically automated tests, simulates real user

app folder 
modules and components
assets -> images and texts
environments -> dev env, prod env

main.ts
type script starting point of program, same concept
bootstraps the ng module



package.json
it z similar to pom.xml

karma
a test runner for js code

tsconfig.json
type script configuraton
compilation

tslint.json
no f


webpack is a tool
which a build automation tool     like maven
it goes through all of our scripts and styles and put them in a bundle and minifies it
this is for optimization
polyfills.bundles.js - all the scripts to fills the gap, js angular needs and js browser supports  
main.bundle.js - all the src code of our app
styles.bundle.js - style sheets
vendor.bundle.js - all the 3rd party libs

Hot Module Replacement (HMR)
whenever the src code changes webpack automatically refreshes the browser

and it automaticaly injects thes bundles to index.html






# NgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
