# meu.starter.ionic-v3

## Introduction

A starter template for PWA and Native Ionic v3 projects, providing best pratices out-of-box: unit testing, environment variables, automatic documentation, automatic deployment, shared module, etc.

### Technical features

- Ionic 3 / Angular 5
- Optimize image handling
  - Cache images for offline use
  - Lazy load images
    - load images only when they appear in the browser’s viewport
    - Use thumbs
- Firebase hosting for PWA
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
- Environment specific variable support
  - [meumobi: Managing environment variables in Ionic](http://meumobi.github.io/ionic/2017/08/09/managing-environment-ionic.html)
- Unit testing and end-to-end (e2e)
  - Setup app for [unit testing and end-to-end (e2e) testing](https://blog.ionicframework.com/basic-unit-testing-in-ionic/)
  - [Rob Ferguson: Testing your Ionic 3 App](https://robferguson.org/blog/2017/11/28/testing-your-ionic-3-app/)
  - [josh Morony: Setting Up Unit and E2E Tests in Ionic](https://www.youtube.com/watch?v=8ApX7EhkBDs)
- Simple Logging Service
- Documentation generation using [Compodoc](https://compodoc.github.io/website/)
- Deep-linking
  - [Ionic blog: Ionic and Lazy Loading Pt 1](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-1/)
  - [Ionic blog: Ionic and Lazy Loading Pt 2](https://blog.ionicframework.com/ionic-and-lazy-loading-pt-2/)
- Google Analytics integration
  - [meumobi: How to use Google Analytics on Ionic PWA and Native app without plugin](http://meumobi.github.io/ionic/pwa/2018/04/12/using-analytics-ionic-app-pwa-native.html)

### Functional features

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