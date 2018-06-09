# meu.starter.ionic-v3
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Travis CI badge](https://travis-ci.org/meumobi/meu-starter.master-detail.ionic-v3.svg?branch=master)](https://travis-ci.org/)
[![Greenkeeper badge](https://badges.greenkeeper.io/meumobi/meu-starter.ionic-v3.svg)](https://greenkeeper.io/)

## Introduction

A starter template for PWA and Native Ionic v3 projects, providing best pratices out-of-box: unit testing, environment variables, automatic documentation, automatic deployment, shared module, etc.

## Coding best practices

- [x] Shared module
  - [meumobi: Creating a shared module for Ionic App](http://meumobi.github.io/ionic/2017/08/23/creating-shared-module-ionic.html)
- [x] Lazy loading / Deep-linking
  - [Ionic blog: Ionic and Lazy Loading Pt 1](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)
  - [Ionic blog: Ionic and Lazy Loading Pt 2](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)

## Features

- [x] [Image gallery](#image-gallery)
  - [Devdactic: Image Gallery With Zoom](https://devdactic.com/ionic-image-gallery-zoom/)
  - Pinch/Zoom image
- [] PWA
  - Show toast when new version available
  - Add to homescreen
  - Offline support
- [x] [Handle dates and time with ngx-moment](#handle-dates-and-time-with-ngx-moment)
- [] Push notification w/ OneSignal
  - [OneSignal: Ionic SDK Setup](https://documentation.onesignal.com/docs/ionic-sdk-setup)
  - [OneSignal: Web Push: Typical setup](https://documentation.onesignal.com/docs/web-push-typical-setup)
  - Settings page: toggle push notification
  - User targeting by tags filtering
    - [OneSignal: Using Data Tags](https://documentation.onesignal.com/docs/data-tags)
  - Email messages
    - [OneSignal:Sending Email Messages](https://documentation.onesignal.com/docs/email-quickstart)
- [] REST API integration
  - [Ionic blog: 10 Minutes with Ionic 2: Calling an API](https://blog.ionicframework.com/10-minutes-with-ionic-2-calling-an-api/)
  - Generate data provider and mockup
    - [Implementing the Master-Detail Pattern in Ionic]()
- [x] [Multi-language](#multi-language)
- [x] Responsive Grid Layout
  - [Ionic blog: Customizing Ionic Apps for Web & Mobile](https://blog.ionicframework.com/customizing-ionic-apps-for-web-mobile/)
  - [Ionic blog: Tips & Tricks for Ionic on Desktop](https://blog.ionicframework.com/tips-tricks-for-ionic-on-desktop/)
- [x] Master/Detail pattern
  - [meumobi: Implementing the Master-Detail Pattern in Ionic](http://meumobi.github.io/ionic/2017/08/23/implementing-master-detail-ionic.html)
- [x] Google Analytics integration
  - [meumobi: How to use Google Analytics on Ionic PWA and Native app without plugin](http://meumobi.github.io/ionic/pwa/2018/04/12/using-analytics-ionic-app-pwa-native.html)
- [x] Pull to refresh
- [x] Skeleton screens
  - [Ionic blog: Improved Perceived Performance with Skeleton Screens](https://blog.ionicframework.com/improved-perceived-performance-with-skeleton-screens/)

## Technical features
- PWA
  - [Optimising the performance of an Ionic PWA - Part 1](https://robferguson.org/blog/2018/04/16/0ptimising-the-performance-of-an-ionic-pwa-part-1/)
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
- CRUD with Firestore
  - [Jave Bratt: Building a CRUD Ionic application with Firestore](https://javebratt.com/crud-ionic-firestore/)

## Functional features
- Restricted access
  - [Devdactic: Ionic Auth Guards](https://devdactic.com/ionic-auth-guards/)
- Forms and validations
  - [Angular 5 Forms and Validations](https://medium.com/learn-angular/angular-5-forms-and-validations-343a585ecf50)
- Animations
  - [Angular.io: Animations](https://angular.io/guide/animations)
  - [Devdactic: How to Add Ionic Animations Using Angular (2 Different Ways!)](https://devdactic.com/animations-ionic-app/)
  - [ng4-animations](http://slides.yearofmoo.com/ng4-animations-preview/demo/)

# Features

## Image gallery
The Ionic image gallery is a classic pattern used in many applications which need to display any kind of grid with pictures or photos. 
For the image gallery. We can make use of the [ion-slides](https://ionicframework.com/docs/api/components/slides/Slides/) component, and the [Riron/ionic-img-viewer](https://github.com/Riron/ionic-img-viewer) component which helps us to display a selected picture in fullscreen with zooming options.

## Multi-language
  [ngx-translate](http://www.ngx-translate.com/) is an internationalization library for Angular 2+. It lets you define translations for your content in different languages and switch between them easily.
  We've followed 
  - [Ionic 3 | Translate and Localize Your App With ngx-translate](https://www.gajotres.net/ionic-2-internationalize-and-localize-your-app-with-angular-2/)
  - [ionicframewokr docs: Using ngx-translate](https://ionicframework.com/docs/developer-resources/ng2-translate/)
    - this doc is outdated, continue using `HttpModule` (deprecated) instead of `HttpClientModule`.

Ionic v3 is compatible with `@ngx-translate/http-loader@2.0.1` and `@ngx-translate/core@9.1.1`, upper versions require angular 6. Check breaking changes on changelog of these projects for more details.

Should save selected language on App, and load it when launch.

For unit testing we've tried implementation based on [example providing from ngx-translate repo](https://github.com/ngx-translate/example/blob/master/src/app/app.component.spec.ts), but it was not successful. An extensive [thread](https://github.com/ngx-translate/core/issues/636) about unit testing take place on github repo of the project.

## Handle dates and time with ngx-moment

[ngx-moment](https://github.com/urish/ngx-moment) provides [moment.js](https://momentjs.com/) pipes for Angular.

- [How to use momentjs in code](https://github.com/urish/ngx-moment/issues/158#issuecomment-321317074)

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

- **Continuous Build**: a tool that checks periodically if the repository changed since the last build, and build/test if it did.
- **Continuous Integration**: a tool that takes Pull Requests and validate them against the latest head prior to making them visible.

If using feature branches, you should have the CI running automatically on those, and if the builds fail, don't merge them into master.

Using Travis, with each push we want to:

- run unit tests: `npm run lint`
- lint code: `npm run test:headless`
- generate build: `npm run build`
- run e2e tests: `xvfb-run npm run e2e`

[Travis CI](travis-ci.org) connects to GitHub repositories out of the box. Navigate to (travis-ci.org) and sign in with your GitHub account. Navigate to your profile and you should see a list of your public repos from GitHub. Enable CI on targeted repo.

It was that simple, the last step for CI is to add a Travis CI configuration file to our project to tell Travis CI how to prepare environment for our app, on which branches to run CI build and which scripts to run on build.

On the root of your app add .travis.yml file and paste snippet below.

### Headless Chrome

As the [official documentation](https://developers.google.com/web/updates/2017/04/headless-chrome) says…

> [Headless Chrome](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md) is shipping in Chrome 59. It’s a way to run the Chrome browser in a headless environment. Essentially, running Chrome without chrome! It brings **all modern web platform features** provided by Chromium and the Blink rendering engine to the command line.

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
- [Continuous Integration for Angular Projects with TravisCI](https://moduscreate.com/blog/continuous-integration-angular-projects-travisci/)
- [Continuous Deployment for Ionic 2 to Firebase Hosting](https://guillaumeroy.xyz/2017/02/23/continous-deployment-ionic2-firebase-hosting/)
- [E2E (End-to-End) Testing in Ionic 2: An Introduction](https://www.joshmorony.com/e2e-end-to-end-testing-in-ionic-2-an-introduction/)

## Automated dependency updates

We've selected [Greenkeeper](https://greenkeeper.io/), against [Dependabot](https://dependabot.com/), because it's free for github public project, **inclusive for organization**.
The integration is pretty straight-forward, only need to signup on [Greenkeeper](https://greenkeeper.io/), give autorization to connect to your github repository and follow instructions.

- [Continuous everything with Angular, Travis CI, Firebase and Greenkeeper](https://medium.com/@jamzi/continuous-everything-with-angular-travis-ci-firebase-and-greenkeeper-6656543bd826)

## Standardized commit messages and automatic changelog generator
[standard-version](https://github.com/conventional-changelog/standard-version) automatically generates and updates `CHANGELOG.md` file with all the commits following [Conventional Commits specification](https://conventionalcommits.org/) and correctly determines new version of our project.

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- **fix**: a commit of the `type fix` patches a bug in your codebase (this correlates with [PATCH](https://semver.org/#summary) in semantic versioning).
- **feat**: a commit of the `type feat` introduces a new feature to the codebase (this correlates with [MINOR](https://semver.org/#summary) in semantic versioning).
- **BREAKING CHANGE**: a commit that has the text `BREAKING CHANGE`: at the beginning of its optional body or footer section introduces a breaking API change (correlating with [MAJOR](https://semver.org/#summary) in semantic versioning). A breaking change can be part of commits of any type. e.g., a fix:, feat: & chore: types would all be valid, in addition to any other type.
- Others: commit types other than fix: and feat: are allowed, for example commitlint-config-conventional (based on the the Angular convention) recommends chore:, docs:, style:, refactor:, perf:, test:, and others. We also recommend improvement for commits that improve a current implementation without adding a new feature or fixing a bug. Notice these types are not mandated by the conventional commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE, which is NOT recommended). 

# Inspiration

- [RomainFallet/ionic-workflow-guide](https://github.com/RomainFallet/ionic-workflow-guide)
- [Robinyo/big-top](https://github.com/Robinyo/big-top)