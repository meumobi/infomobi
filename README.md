# meu.starter.ionic-v3
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Travis CI badge](https://travis-ci.org/meumobi/meu-starter.master-detail.ionic-v3.svg?branch=master)](https://travis-ci.org/)
[![Greenkeeper badge](https://badges.greenkeeper.io/meumobi/meu-starter.ionic-v3.svg)](https://greenkeeper.io/)

## Introduction

Full app for commnunication within restricted access.

## Build project

### Build with env argument

Repository has a default env config `src/environments/environment.ts`, you should create an own to your target env, for example for prod `src/environments/environment.prod.ts` and run:

```
$ ionic build --env=prod

// "Using PROD environment variables for DEV build." ("DEV build" is defined by Ionic and means not optimized for production).



$ npm ionic:build --prod --env=prod

// "Using PROD environment variables for PROD build."


```

## Coding best practices

- [x] Shared module
- [x] Lazy loading / Deep-linking
- [x] Unit and e2e tests
- [x] Continuous integration

## Features
- [] Welcome page
  - if first session, use [ion-slides](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/tutorial/tutorial.html)
- [] Send Push notification from App
  - if user.admin post message on live with #alert
- [] [PWA on Desktop](#pwa-on-desktop)
- [] Send Email Newsletter
  - use [OneSignal for Email](https://documentation.onesignal.com/docs/email-overview)
    - easy-to-use email building interface
    - Use the same powerful segmentation tools in OneSignal for both email and push to better target your audience
- [x] Swipeable-tabs
- [] [Live feed](#live-feed)
- [x] [Image gallery](#image-gallery)
  - [Devdactic: Image Gallery With Zoom](https://devdactic.com/ionic-image-gallery-zoom/)
  - Pinch/Zoom image
- [] [PWA](pwa)
  - Show toast when new version available
  - Add to homescreen
  - Offline support
  - [Optimising the performance of an Ionic PWA - Part 1](https://robferguson.org/blog/2018/04/16/0ptimising-the-performance-of-an-ionic-pwa-part-1/)
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
  - Generate data provider and mockup
    - [Implementing the Master-Detail Pattern in Ionic](http://meumobi.github.io/ionic/2017/08/23/implementing-master-detail-ionic.html)
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
- [] Chat
  - http://tphangout.com/chat-app-using-ionic-3-and-firebase/
- [] Mention users in comment

## Technical features
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
- [] [User authentication and restricted access](#user-athentication-and-restricted-access)
  - [Devdactic: Ionic Auth Guards](https://devdactic.com/ionic-auth-guards/)
- Forms and validations
  - [Angular 5 Forms and Validations](https://medium.com/learn-angular/angular-5-forms-and-validations-343a585ecf50)
- Animations
  - [Angular.io: Animations](https://angular.io/guide/animations)
  - [Devdactic: How to Add Ionic Animations Using Angular (2 Different Ways!)](https://devdactic.com/animations-ionic-app/)
  - [ng4-animations](http://slides.yearofmoo.com/ng4-animations-preview/demo/)
  - [Total Guide To Dynamic Angular Animations That Can Be Customized At Runtime](https://blog.angularindepth.com/total-guide-to-dynamic-angular-animations-that-can-be-toggled-at-runtime-be5bb6778a0a)

# Features
## PWA

Are PWAs really taking off?
With all these native-like capabilities, PWAs are here to stay! Here are some reasons why now is the best time to learn them:

- We already have Chrome PWA support, [meaning over 50% of browser share](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#/media/File:StatCounter-browser-ww-monthly-200901-201707.png), mobile included
- Apple has agreed to implement [Service Workers in Safari](https://cloudfour.com/thinks/apple-starts-work-on-progressive-web-apps/)
- Microsoft is working on allowing the installation of a [PWA directly to a Windows 10 desktop](https://www.windowscentral.com/faq-progressive-web-apps-windows-10) and to run each PWA in a native window

Ionic 3 applications included a service worker by default, [sw-toolbox](https://github.com/GoogleChromeLabs/sw-toolbox, that you could simply uncomment to activate. But this project is deprecated and replaced by [workbox](https://developers.google.com/web/tools/workbox/). Google provides documentation to [migrate from sw-toolbox to workbox](https://developers.google.com/web/ilt/pwa/lab-migrating-to-workbox-from-sw-precache-and-sw-toolbox).

Since Angular 5 the support for building Progressive Web Applications (PWA) with Service Workers has been build into the framework. Angular provides a package and command line tooling that makes it extremely easy to add PWA support to your Ionic/Angular applications with service workers.

### Show toast when new version available
we always serve the latest cached version (to show it almost immediately). At the same time, service worker checks if there is a newer version of the app shell. If yes, we download and cache this version to use it for the next application run. Also, we might want to ask the user if they want to reload the current tab with the application right now.
[PWA: Create a “New Update Available” Notification using Service Workers](https://medium.com/progressive-web-apps/pwa-create-a-new-update-available-notification-using-service-workers-18be9168d717)

On [ionic-team/ionic-pwa-toolkit](https://github.com/ionic-team/ionic-pwa-toolkit) they are doing it, with workbox, using [this bit of code](https://github.com/ionic-team/stencil/commit/2e3799cd68ddfe9112d814f693246048bbe13351) (via [onstatechange](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/onstatechange) EventListener) for registering the service worker and then listening to that event in [one of components](https://github.com/ionic-team/ionic-pwa-toolkit/blob/master/src/components/my-app/my-app.tsx) and then just showing a toast based on that.

```ts
  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload'
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }
  ```

### Furthermore

- [Angular 5 service worker and AngularFirebase](https://angularfirebase.com/lessons/hnpwa-angular-5-progressive-web-app-service-worker-tutorial/)
- [angular-university.io: practical guided Tour of Service Workers](https://blog.angular-university.io/service-workers/)
- [Angular 5 Service Worker](https://medium.com/codingthesmartway-com-blog/angular-5-service-worker-b722e571e306)
- [Create a PWA with Angular Service Workers in Ionic 4](https://www.joshmorony.com/create-a-pwa-with-angular-service-workers-in-ionic-4/)
- [A new Angular Service Worker — creating automatic progressive web apps](https://medium.com/progressive-web-apps/a-new-angular-service-worker-creating-automatic-progressive-web-apps-part-1-theory-37d7d7647cc7)
- [Adding a @angular/service-worker on Ionic 3](https://robferguson.org/blog/2018/04/16/0ptimising-the-performance-of-an-ionic-pwa-part-1/)
- [SERVICE WORKER issues faced on feedgist project](https://www.biggerpicture.agency/insights/feedgist-a-progressive-web-app-case-study)
- [problem in registering service worker in module where also importing AngularFire2](https://stackoverflow.com/a/48734851/4982169)
## PWA on desktop
[Desktop progressive web apps](https://developers.google.com/web/updates/2018/05/dpwa) can be 'installed' on the users device much like native apps. They're fast. Feel integrated because they launched in the same way as other apps, and run in an app window, without an address bar or tabs. They're reliable because service workers can cache all of the assets they need to run. And they create an engaging experience for users.

Desktop Progressive Web App support is available on Chrome OS 67 (currently beta), but work is underway to support Mac and Windows. To experiment with desktop progressive web apps in Chrome an other operating systems, enable the #enable-desktop-pwas flag (chrome://flags/).

See also https://www.xda-developers.com/progressive-web-apps-chrome-how-to/

## Web Push
https://documentation.onesignal.com/docs/web-push-typical-setup

## Live feed

- Live feed display a list of comments
- Comments are posted by App users directly on live feed or as comment of a post.
- Comments of post could be promoted to live feed by admin.
- A comment include:
  - description
  - (picture|media ???)
  - (link)
  - (postId) // when from post
- When promoted, comment include a link (label + url) to post source
  - should be improved, at the moment we add a itemId property on comment (same value of postId from original comment but rename it to not fetch the comment on post). Unique way we've find to preserve the navigationHistory and transition but not represent a generic solution for external links.
- Each comment could be deleted by its owner and admin.
- Each user is defined by:
  - first_name
  - last_name
  - (picture)
  - email
- Admin can respond by email to a comment
- Comments could be published = {true|false} by admin
- By default all comments.published == true if admin
  - default commment.published if user should be customizable by app
- Admin can filter comments by published property
- Admin can toggle published property
- User can react once to comment by Like/Clap, and discard its reaction
- User should be notified by a visual marker when new post is available since its last view.
- When promoted the comment is copied to appear o live feed
  - comment's post have a postId propery to identify them
- Add actions on left side of sliding-item: promote, remove, hide/show
  - should be improved, at the moment it's the best solution to not conflict with swipeable tabs. Another option could be a 3 dots button to show actions menu (like youtube).

## Image optimization
https://imageresizing.net/docs/basics

## User authentication and restricted access
- save user token on login
- On bootstrap load userAuth (auto-login)
  - set X-Visitor-token for meumobi api calls on httpInterceptor
  - if userAuth missing redirect to /login (=>prevent access if not logged)
- If meumobi api call return a 401 (Unauthorized) redirect to login
  - done using httpInterceptor and Observable (logout)

@Injectable()
export class AuthService {

  public $logged = new Subject<Auth>();

  constructor() { }

}

httpInterceptor: if 401 then AuthService.$logged.next()

import { Storage } from '@ionic/storage';
this.storage.{get|set}('userAuth, response)

export class AppComponent implements OnInit, OnDestroy {

  private authObserver: Subscription;

  ngOnInit() {
    this.authState = AuthService.authState;
    this.authObserver = this.authState.subscribe((user: userAuth) => {
      if(!user) logout
  })
  }

  ngOnDestroy() {
    if (this.authObserver) {
      this.authObserver.unsubscribe();
    }
  }
}






### Http-interceptors
- [Angular 4.3 HttpClient (Accessing REST Web Services With Angular)](https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b)
- [Angular.io HttpClient](https://angular.io/guide/http#intercepting-requests-and-responses)
- [Angular 4.3 Interceptors for Lazy Loaded Modules](https://stackoverflow.com/questions/47009490/angular-4-3-interceptors-for-lazy-loaded-modules)
- [Use interceptor for components in shared modules](https://stackoverflow.com/questions/49631174/use-interceptor-for-components-in-shared-modules)

### Angular app w/ user authentication
https://scotch.io/tutorials/build-an-ionic-app-with-user-authentication
http://jasonwatmore.com/post/2014/05/26/angularjs-basic-http-authentication-example
https://devdactic.com/ionic-auth-guards/


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