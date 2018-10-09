export const ENV = {
  production: false,
  isDebugMode: true,
  analyticsTrackingId: "UA-113326323-1",
  meumobi: {
    apiUrl: 'https://meumobi.com'
  },
  imgServer: {
    url: "https://imageflow.meumobi.com/",
    sources: {
      firebase: {
        prefix: "https://infomobi.page.link"
      },
      meumobi: {
        prefix: "/uploads"
      }
    }
  } , 
  dynamicLinks: {
    url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks",
    prefix: "https://infomobi.page.link"
  },
  firebase: {
    apiKey: "AIzaSyBnCsnH9XAtG73lIwRuYj4dbXLyPBv0E5I",
    authDomain: "ion-employee-int.firebaseapp.com",
    databaseURL: "https://ion-employee-int.firebaseio.com",
    projectId: "ion-employee-int",
    storageBucket: "ion-employee-int.appspot.com",
    messagingSenderId: "236514035211"
  }  
};