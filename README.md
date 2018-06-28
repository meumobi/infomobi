# meu.starter.ionic-v3
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Travis CI badge](https://travis-ci.org/meumobi/meu-starter.master-detail.ionic-v3.svg?branch=master)](https://travis-ci.org/)
[![Greenkeeper badge](https://badges.greenkeeper.io/meumobi/meu-starter.ionic-v3.svg)](https://greenkeeper.io/)

## Introduction

Full app for commnunication within restricted access.

## Coding best practices

- [x] Shared module
- [x] Lazy loading / Deep-linking
- [x] Unit and e2e tests
- [x] Continuous integration

## Features
- [x] Swipeable-tabs
- [] [Live feed](#live-feed)
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
- [] Package app infobox w/ Ionic Pro
  - [How To Increase Your Teams Efficiency with Ionic Pro](https://devdactic.com/efficiency-ionic-pro/)
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

## Live feed

- Live feed display a list of comments
- Comments are posted by App users directly on live feed or as comment of a post.
- Comments of post could be promoted to live feed by admin.
- A comment include:
  - description
  - (picture|media ???)
  - (link)
- When promoted, comment include a link (lable + url) to post source
- Each comment could be deleted by its owner and admin.
- Each user is defined by:
  - first_name
  - last_name
  - (picture)
  - email
- Admin can respond by email to a comment
- Comments could be published = {true|false} by admin
- By default all comments.published == true, should be customizable by app
- Admin can filter comments by published property
- Admin can toggle published property
- User can react once to comment by Like/Clap, and discard its reaction

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

# Inspiration

- [RomainFallet/ionic-workflow-guide](https://github.com/RomainFallet/ionic-workflow-guide)
- [Robinyo/big-top](https://github.com/Robinyo/big-top)

# Furthermore

- [UiGradients](http://uigradients.com/) Beautiful colour gradients for design and code
- [github/mraible/ng2-demo:Angular and Angular CLI Tutorial](http://gist.asciidoctor.org/?github-mraible%2Fng2-demo%2F%2FREADME.adoc)