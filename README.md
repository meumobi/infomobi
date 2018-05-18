# meu.starter.ionic-v3

## Introduction

A starter template for PWA and Native Ionic v3 projects, providing best pratices out-of-box: unit testing, environment variables, automatic documentation, automatic deployment, shared module, etc.

## Worflow & build management

- [x] [Aliases and environment variables support](#aliases-and-environment-variables-support)
- [x] [Documentation generation using Compodoc](#documentation-generation-using-compodoc)
- [x] [Unit testing and end-to-end (e2e)](#unit-testing-and-end-to-end-e2e)
- [x] [Continuous integration with Travis CI](#continuous-integration-with-travis-ci)
- [] Automated dependency updates
  - [Dependabot](https://dependabot.com/)
  - [Greenkeeper](https://greenkeeper.io/)
- [Style CI]
  - `npm run lint` [Using Travis-CI to Run Your Ionic Unit Tests](http://kensodemann.github.io/angular/tdd/testing/ionic/2017/05/22/ionic-travis-ci.html)

## Coding best practices

- [] Shared module
  - [meumobi: Creating a shared module for Ionic App](http://meumobi.github.io/ionic/2017/08/23/creating-shared-module-ionic.html)
- [] Simple Logging Service
  - [A simple logging service for Angular 4](https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/)
  - [Angular's github: Add $log like functionality to Angular 2](https://github.com/angular/angular/issues/5458)
- [] Lazy loading / Deep-linking
  - [Ionic blog: Ionic and Lazy Loading Pt 1](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)
  - [Ionic blog: Ionic and Lazy Loading Pt 2](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)
- [] Generate data provider and mockup
  - [Implementing the Master-Detail Pattern in Ionic]()

## Technical features
- Live Updates
  - [Continuous Deployment & Live Updates with Ionic Deploy](https://www.youtube.com/watch?v=I7PC3O4q1ug)
- Firebase hosting for PWA
- Custom SplashScreen and Icon
  - [Custom Ionic Splash + Animation](https://www.youtube.com/watch?v=dPUmskG_-y0)
- Optimize image handling
  - Cache images for offline use
  - Lazy load images
    - load images only when they appear in the browser’s viewport
    - Use thumbs
- Theming App
  - [meumobi: Theming your Ionic App](http://meumobi.github.io/ionic/2017/08/17/theming-ionic-app.html)
- Master/Detail pattern
  - [meumobi: Implementing the Master-Detail Pattern in Ionic](http://meumobi.github.io/ionic/2017/08/23/implementing-master-detail-ionic.html)
- REST API integration
  - [Ionic blog: 10 Minutes with Ionic 2: Calling an API](https://blog.ionicframework.com/10-minutes-with-ionic-2-calling-an-api/)
- CRUD with Firestore
  - [Jave Bratt: Building a CRUD Ionic application with Firestore](https://javebratt.com/crud-ionic-firestore/)

## Functional features
- Multi-language
  - [ngx-translate]()
  - Settings page: select language
- Push notification w/ OneSignal
  - [OneSignal: Ionic SDK Setup](https://documentation.onesignal.com/docs/ionic-sdk-setup)
  - [OneSignal: Web Push: Typical setup](https://documentation.onesignal.com/docs/web-push-typical-setup)
  - Settings page: toggle push notification
  - User targeting by tags filtering
    - [OneSignal: Using Data Tags](https://documentation.onesignal.com/docs/data-tags)
  - Email messages
    - [OneSignal:Sending Email Messages](https://documentation.onesignal.com/docs/email-quickstart)
- Restricted access
  - [Devdactic: Ionic Auth Guards](https://devdactic.com/ionic-auth-guards/)
- Forms and validations
  - [Angular 5 Forms and Validations](https://medium.com/learn-angular/angular-5-forms-and-validations-343a585ecf50)
- Animations
  - [Angular.io: Animations](https://angular.io/guide/animations)
  - [Devdactic: How to Add Ionic Animations Using Angular (2 Different Ways!)](https://devdactic.com/animations-ionic-app/)
- Responsive Grid Layout
  - [Ionic blog: Customizing Ionic Apps for Web & Mobile](https://blog.ionicframework.com/customizing-ionic-apps-for-web-mobile/)
  - [Ionic blog: Tips & Tricks for Ionic on Desktop](https://blog.ionicframework.com/tips-tricks-for-ionic-on-desktop/)
  - [Devdactic: Image Gallery With Zoom](https://devdactic.com/ionic-image-gallery-zoom/)
- PWA
  - Show toast when new version available
  - Add to homescreen
  - Offline support
- Google Analytics integration
  - [meumobi: How to use Google Analytics on Ionic PWA and Native app without plugin](http://meumobi.github.io/ionic/pwa/2018/04/12/using-analytics-ionic-app-pwa-native.html)
- UX/UI
  - Pull to refresh
  - Skeleton screens
    - [Ionic blog: Improved Perceived Performance with Skeleton Screens](https://blog.ionicframework.com/improved-perceived-performance-with-skeleton-screens/)

## Getting started


# Starting new app from starter sidemenu with Ionic CLI

```
$ ionic config set -g features.project-angular true

$ ionic start meu-starter.ionic-v3 sidemenu
? Project type: ionic-angular
? Starter template: sidemenu
? Would you like to integrate your new app with Cordova to target native iOS and Android: Yes
? Install the free Ionic Pro SDK and connect your app: Yes
```

# Create a new repository on the command line

```
echo "# meu.starter.ionic-v3" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/meumobi/meu.starter.ionic-v3.git
git push -u origin master
```

# Connect app to Ionic Pro

Push your code to [Ionic Pro](https://ionicframework.com/pro) to perform real-time updates (skip the app store queue), and more: git push ionic master.

Ionic Pro uses a git-based workflow to manage app updates. If you're not familiar with on working with branches in GitHub you can read about them [here](https://guides.github.com/introduction/flow/).

```
? Install the free Ionic Pro SDK and connect your app? Yes
? What would you like to do? Link an existing app on Ionic Pro
? Which app would you like to link meu-starter
? Which git host would you like to use? GitHub
? Does the repository exist on GitHub? Yes
? Which GitHub repository would you like to link? meumobi / meu.starter.ionic-v3
? Which would you like to do? Link to master branch only
```

# ROADMAP

- Continuous integration
- [Generate Angular project documentation w/ 
Compodoc](https://compodoc.github.io/compodoc/)
- [] 
[Improved Perceived Performance with Skeleton Screens](https://blog.ionicframework.com/improved-perceived-performance-with-skeleton-screens/)
- InfoBox
  - [] Create functional app infobox: `ionic start infobox https://github.com/meumobi/meu-starter.ionic-v3`
  - [] Deploy PWA infobox.app
  - [] Package app infobox w/ Ionic Pro
    - [How To Increase Your Teams Efficiency with Ionic Pro](https://devdactic.com/efficiency-ionic-pro/)
  - [] Submit app infobox to Google Play
  - [] Submit app infobox to Apple store
  - [] Deploy live updates w/ Ionic Pro

# Worflow & Build Management
## Aliases and environment variables support
- [Managing Aliases and environment variables in Ionic v3... preparing Ionic v4](http://meumobi.github.io/ionic/2018/05/10/managing-aliases-environment-variables-ionc.html)

## Documentation generation using Compodoc
- [Compodoc: Getting Started](https://compodoc.github.io/website/guides/installation.html)

### Local installation
```
npm install --save-dev @compodoc/compodoc
```

### Build and serve docs
Define script tasks for it in your package.json :
```
"scripts": {
  "docs:build": "./node_modules/.bin/compodoc -d ./docs/ -p ./tsconfig.json",
  "docs:serve": "./node_modules/.bin/compodoc -s -d ./docs"
}
```

and run it like a normal npm script, to generate documentation :

```
$ npm run docs:build
```

To serve the generated documentation:

```
$ npm run docs:serve
```

Open your browser and navigate to: `http://localhost:8080`

You can exclude files from the generated documentation by using 'exclude' in tsconfig.json:

```
  "exclude": [
    "./node_modules",
    "./temp/**/*.ts",
    "./src/environments/*.ts",
    "./src/services/**/*.ts",
    "**/*.spec.ts"
  ]
```
## Unit testing and end-to-end (e2e)
- [Leif Wells's blog: Configure Existing Ionic Projects for Testing](https://leifwells.github.io/2017/08/27/testing-in-ionic-configure-existing-projects-for-testing/)
- [Unit Testing an Ionic2 project](https://lathonez.com/2018/ionic-2-unit-testing/)

The important modules are `karma`, `jasmine` and `protractor`:
- [karma](https://karma-runner.github.io/2.0/index.html) is our testing environment for unit testing. 
- [jasmine](https://jasmine.github.io/) is the unit testing framework. 
- [protractor](https://www.protractortest.org/#/) is our testing environment for our end-to-end tests. 

The rest of the modules are utilities that allow this configuration to work.

### Unit tests: Jasmine

```
$ npm run test
```

### End-to-end tests: Protractor

End-to-end tests explore the application as users experience it.
In e2e testing, one process runs the real application and a second process runs protractor tests that simulate user
behavior and assert that the application respond in the browser as expected.

```
$ ionic serve

// In a second terminal session
$ npm run e2e
```

### Test coverage: Istanbul

```
$ npm run test-coverage
```

In the `./coverage` folder open index.html.

```
$ cd coverage/
$ python -m SimpleHTTPServer 8000
```
![test-coverage](https://www.evernote.com/l/APVZPlnTsIpHiI8tQcEN5r8pPLKHhjeZmwUB/image.png)

- [Automated testing with Headless Chrome](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai)

## Continuous integration with Travis CI

Using Travis, with each push we want to:

- run unit tests: `npm run lint`
- lint code: `npm run test`
- generate build: `npm run build`
- run e2e tests: `xvfb-run npm run e2e`

[Travis CI](travis-ci.org) connects to GitHub repositories out of the box. Navigate to (travis-ci.org) and sign in with your GitHub account. Navigate to your profile and you should see a list of your public repos from GitHub. Enable CI on targeted repo.

It was that simple, the last step for CI is to add a Travis CI configuration file to our project to tell Travis CI how to prepare environment for our app, on which branches to run CI build and which scripts to run on build.

On the root of your app add .travis.yml file and paste snippet below.

### Travis config

```yaml

```

#### Caching with npm
[Caching with npm](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/#Caching-with-npm)

```yaml
cache:
  directories:
    - "node_modules"
```

`npm install` will still run on every build and will update/install any new packages added to your package.json file.

Thanks to [julie-ng/angular-starter: Setup Travis CI](https://github.com/julie-ng/angular-starter/pull/1)
- use the Travis provided [Chrome addon](https://docs.travis-ci.com/user/chrome)
- use the Travis provided [xvfb wrapper](https://docs.travis-ci.com/user/gui-and-headless-browsers/#Using-the-xvfb-run-wrapper) around Chrome for E2E

### Furthermore

- [Testing Angular 2+ Apps with Jasmine and Karma](https://www.youtube.com/watch?v=yG4FH60fhUE)
- [Unit Testing with Angular](https://www.youtube.com/watch?v=Yod3tBt0beM)
- [Ionic project: Continuous Integration with Travis for gh-pages](https://medium.com/@hamidihamza/ionic-project-continuous-integration-with-travis-for-gh-pages-3275edaac6a0)
- [continuous integration | angular cli + firebase + travis ci](https://houssein.me/continuous-integration-angular-firebase-travisci)
- [Continuous everything with Angular, Travis CI, Firebase and Greenkeeper](https://medium.com/@jamzi/continuous-everything-with-angular-travis-ci-firebase-and-greenkeeper-6656543bd826)
- [Continuous Integration for Angular Projects with TravisCI](https://moduscreate.com/blog/continuous-integration-angular-projects-travisci/)
- [Continuous Deployment for Ionic 2 to Firebase Hosting](https://guillaumeroy.xyz/2017/02/23/continous-deployment-ionic2-firebase-hosting/)
- [E2E (End-to-End) Testing in Ionic 2: An Introduction](https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-an-introduction/)

## Continuous integration

- **Continuous Build**: a tool that checks periodically if the repository changed since the last build, and build/test if it did.
- **Continuous Integration**: a tool that takes Pull Requests and validate them against the latest head prior to making them visible.

No commits to be added to master branch if they haven't been tested and verified.
If using feature branches, you should have the CI running automatically on those, and if the builds fail, don't merge them into master.

[Git Hooks – Automatic Code Quality Checks](https://sigmoidal.io/automatic-code-quality-checks-with-git-hooks/)

# Inspiration

- [RomainFallet/ionic-workflow-guide](https://github.com/RomainFallet/ionic-workflow-guide)
- [Robinyo/big-top](https://github.com/Robinyo/big-top)