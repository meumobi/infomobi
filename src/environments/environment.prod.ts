export const ENV = {
  production: false,
  isDebugMode: true,
  analyticsTrackingId: 'UA-59245997-3',
  meumobi: {
    apiUrl: 'https://meumobi.com'
  },
  imgServer: {
    url: 'https://imageflow.meumobi.com/',
    sources: {
      firebase: {
        prefix: 'https://infomobi.page.link'
      },
      'int-firebase': {
        prefix: 'https://intinfomobi.page.link'
      },
      meumobi: {
        prefix: '/uploads'
      }
    }
  },
  dynamicLinks: {
    url: 'https://firebasedynamiclinks.googleapis.com/v1/shortLinks',
    prefix: 'https://infomobi.page.link'
  },
  youtube: {
    apiKey: 'AIzaSyAD49q_weB67bZX8u95G9zrXmBULqdMzas',
    apiURL: 'https://www.googleapis.com/youtube/v3'
  },
  firebase: {
    apiKey: 'AIzaSyBnCsnH9XAtG73lIwRuYj4dbXLyPBv0E5I',
    authDomain: 'ion-employee.firebaseapp.com',
    databaseURL: 'https://ion-employee.firebaseio.com',
    projectId: 'ion-employee',
    storageBucket: 'ion-employee.appspot.com',
    messagingSenderId: '961286969528'
  },
  onesignal: {
    appId: 'c3657938-b2f1-44fb-bd53-7a52d7784c30',
    googleProjectNumber: '961286969528'
  },
};
