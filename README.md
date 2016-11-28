# GitHubApp

This is my first ever Angular app, for v1 or 2.  

I think I'm pretty-good at Knockout and okay at Backbone.  Some of the concepts 
"translate", other bits not so much. 

But I thought it would be useful to try and learn Angular for the task.  
It was, very useful.  I learnt a lot but it's still a steep learning curve.
The app borrows/reuses quite a bit from the ["Tour of Heroes"](https://angular.io/docs/ts/latest/tutorial/) tutorial.
   

My test specs are behind.  Sorry.

My issues component is lacking pagination.  Given I got that working in the
repo list it shouldn't be too hard to do.

As well as tests, I'd want to do more e.g. standards or accessibility.  It
could also do with much TLC on the design front.  The UI isn't great.  There's
no attempt at localisation, I assumed that to be out of scope.

I've just done some charting at work based on c3js (which is based on d3), 
but I ran out of time before adding visualisations to this.   I'll probably
try that next, just to see how it works compared to knockout.js. 

There's a bug that that location doesn't update when the search term changes 
- I wanted to be able to "deep-link" to a search term so that a browser navigating
back from repo-detail (Issues list) would keep the context of the RepoList.  
I'm sure that there are others, given how few tests are running!   

Thanks,
Pete.

----

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
