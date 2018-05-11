# meu.starter.ionic-v3

## Introduction

A starter template for PWA and Native Ionic v3 projects, providing best pratices out-of-box: unit testing, environment variables, automatic documentation, automatic deployment, shared module, etc.

## Worflow & Build Management

- [x] [Aliases and environment variables support](#aliases-and-environment-variables-support)
- [x] [Documentation generation using Compodoc](#documentation-generation-using-compodoc)
- [x] [Unit testing and end-to-end (e2e)](#unit-testing-and-end-to-end-e2e)
- [] Continuous integration
  - [Continuous Deployment & Live Updates with Ionic Deploy](https://www.youtube.com/watch?v=I7PC3O4q1ug)
  - [Ionic project: Continuous Integration with Travis for gh-pages](https://medium.com/@hamidihamza/ionic-project-continuous-integration-with-travis-for-gh-pages-3275edaac6a0)
  - [continuous integration | angular cli + firebase + travis ci](https://houssein.me/continuous-integration-angular-firebase-travisci)
  - [Continuous everything with Angular, Travis CI, Firebase and Greenkeeper](https://medium.com/@jamzi/continuous-everything-with-angular-travis-ci-firebase-and-greenkeeper-6656543bd826)
  - [Continuous Deployment for Ionic 2 to Firebase Hosting](https://guillaumeroy.xyz/2017/02/23/continous-deployment-ionic2-firebase-hosting/)

## Technical features

- Ionic 3 / Angular 5
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
- Shared module
  - [meumobi: Creating a shared module for Ionic App](http://meumobi.github.io/ionic/2017/08/23/creating-shared-module-ionic.html)
- Master/Detail pattern
  - [meumobi: Implementing the Master-Detail Pattern in Ionic](http://meumobi.github.io/ionic/2017/08/23/implementing-master-detail-ionic.html)
- Multi-language
  - [ngx-translate]()
- OneSignal integration
  - Email messages
    - [OneSignal:Sending Email Messages](https://documentation.onesignal.com/docs/email-quickstart)
  - Push notification
    - [OneSignal: Ionic SDK Setup](https://documentation.onesignal.com/docs/ionic-sdk-setup)
    - [OneSignal: Web Push: Typical setup](https://documentation.onesignal.com/docs/web-push-typical-setup)
  - User targeting by tags filtering
    - [OneSignal: Using Data Tags](https://documentation.onesignal.com/docs/data-tags)
- Restricted access
  - [Devdactic: Ionic Auth Guards](https://devdactic.com/ionic-auth-guards/)
- Forms and validations
  - [Angular 5 Forms and Validations](https://medium.com/learn-angular/angular-5-forms-and-validations-343a585ecf50)
- Animations
  - [Angular.io: Animations](https://angular.io/guide/animations)
  - [Devdactic: How to Add Ionic Animations Using Angular (2 Different Ways!)](https://devdactic.com/animations-ionic-app/)
- REST API integration
  - [Ionic blog: 10 Minutes with Ionic 2: Calling an API](https://blog.ionicframework.com/10-minutes-with-ionic-2-calling-an-api/)
- CRUD with Firestore
  - [Jave Bratt: Building a CRUD Ionic application with Firestore](https://javebratt.com/crud-ionic-firestore/)
- Simple Logging Service
- Deep-linking
  - [Ionic blog: Ionic and Lazy Loading Pt 1](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)
  - [Ionic blog: Ionic and Lazy Loading Pt 2](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)
- Google Analytics integration
  - [meumobi: How to use Google Analytics on Ionic PWA and Native app without plugin](http://meumobi.github.io/ionic/pwa/2018/04/12/using-analytics-ionic-app-pwa-native.html)

## Functional features

- Responsive Grid Layout
  - [Ionic blog: Customizing Ionic Apps for Web & Mobile](https://blog.ionicframework.com/customizing-ionic-apps-for-web-mobile/)
  - [Ionic blog: Tips & Tricks for Ionic on Desktop](https://blog.ionicframework.com/tips-tricks-for-ionic-on-desktop/)
  - [Devdactic: Image Gallery With Zoom](https://devdactic.com/ionic-image-gallery-zoom/)
- PWA
  - Show toast when new version available
  - Add to homescreen
  - Offline support
- Google Analytics integration
- UX/UI
  - Pull to refresh
  - Skeleton screens
    - [Ionic blog: Improved Perceived Performance with Skeleton Screens](https://blog.ionicframework.com/improved-perceived-performance-with-skeleton-screens/)
- Settings page
  - Select language
  - Toggle push notification

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

The important modules are `karma`, `jasmine` and `protractor`:
- `karma` is our testing environment for unit testing. 
- `jasmine` is the unit testing framework. 
- `protractor` is our testing environment for our end-to-end tests. 

The rest of the modules are utilities that allow this configuration to work.

# Inspiration

- [RomainFallet/ionic-workflow-guide](https://github.com/RomainFallet/ionic-workflow-guide)
- [Robinyo/big-top](https://github.com/Robinyo/big-top)