install node
//binary or repository

node -v

npm install -g @angular/cli
//or with sudo 

ng -v
//ng --version

ng new ngApp
cd ngApp
ng serve --open       4200


ng generate component hero-detail

ng generate service message // no inclusion in providers
ng generate service message --module=app

ng generate module app-routing --flat --module=app





npm install

npm install codelyzer-cli


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






















todo:

read about:





general mistakes
security holes and drawbacks


Future
	stats for demands on angular developers



commands
========

npm install typescript

npm install -g @angular-cli     (not angular-cli)

ng new myApp

cd myApp

ng serve --open



