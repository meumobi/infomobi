//import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

//import delay from 'rxjs/add/operator/delay';

let comments = Observable.of([
  {
    channel: 'live',
    created: 1530873217111,
    data: {
      author: {
        displayName: "Luiza Bittencourt", 
        email: "luiza@infomobi.app", 
        firstName: "Luiza", 
        id: "1", 
        lastName: "Bittencourt", 
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      },
      description: "dia de jogo",
    },

    type: 'message',
    id: "SCoq7mZjAlCRzDqueV3C",
    modified: 1530873217111,
    published: 1530873217111,
    isPublished: true
  },
  {
    channel: 'live',
    created: 1530873217111,
    data: {
      author: {
        displayName: "Luiza Bittencourt", 
        email: "luiza@infomobi.app", 
        firstName: "Luiza", id: "1", 
        lastName: "Bittencourt", 
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      },
      description: "#VaitercopanaKatrium, Os colaboradores do turno administrativo serão dispensados às 13h30 nas partidas que acontecerem às 15h.",
      media: [{
        url: "https://firebasestorage.googleapis.com/v0/b/ion-employee.appspot.com/o/3dc205af-acb5-61bd-f646-66dacc798275?alt=media&token=572f4153-6330-4125-8142-bec6984cedc8" 
      }]
    },
    type: 'message',
    id: "SCoq8mZjAlCRzDqueV3C",
    modified: 1530873217111,
    published: 1530873217111,
    isPublished: true
  },
  {
    channel: 'live',
    created: 1530873217111,
    data: {
      author: {
        displayName: "Luiza Bittencourt", 
        email: "luiza@infomobi.app", 
        firstName: "Luiza", 
        id: "1", 
        lastName: "Bittencourt", 
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      },
      description: "Convocação de Treinamento - CIPA, Sala de Reunião Prédio Administrativo",
    },

    type: 'message',
    id: "SCoq9mZjAlCRzDqueV3C",
    modified: 1530873217111,
    published: 1530873217111,
    isPublished: true
  },
  {
    channel: 'live',
    created: 1530873217111,
    data: {
      contacts: [{
        birdthday: "07/17",
        displayName: "Luiza Bittencourt", 
        email: "luiza@infomobi.app", 
        firstName: "Luiza", 
        id: "1", 
        lastName: "Bittencourt", 
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      }],
      picture: "http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg",
      title: "Parabéns aos envolvidos",
    },

    type: 'anniversaries',
    id: "SCoq0mZjAlCRzDqueV3C",
    modified: 1530873217111,
    published: 1530873217111,
    isPublished: true
  }
]);

export default comments.delay(2000);