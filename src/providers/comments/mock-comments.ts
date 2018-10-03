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
    channel: 'item_599ec8389a645d465c8b456d',
    created: 1530873217112,
    data: {
      author: {
        displayName: "Luiza Bittencourt", 
        email: "luiza@infomobi.app", 
        firstName: "Luiza", 
        id: "1", 
        lastName: "Bittencourt", 
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      },
      itemDetails: {
        id: "599ec8389a645d465c8b456d",
        title: "Incentive suas equipes para compartilhar promoções em suas próprias contas de mídia social"
      }, 
      description: "Funcionalidade bem interessante"
    },
    type: 'message',
    id: "SCoq7mZjAlCRzDqueV3C",
    modified: 1530873217112,
    published: 1530873217112,
    isPublished: true
  },
  {
    channel: 'live',
    created: 1530873217113,
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
        url: "https://firebasestorage.googleapis.com/v0/b/ion-employee.appspot.com/o/7006315.jpg?alt=media&token=6cc57476-7bf7-4111-98d9-a0c01804a6a6" 
      }]
    },
    type: 'message',
    id: "SCoq8mZjAlCRzDqueV3C",
    modified: 1530873217113,
    published: 1530873217113,
    isPublished: true
  },
  {
    channel: 'live',
    created: 1530873217114,
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
    modified: 1530873217114,
    published: 1530873217114,
    isPublished: true
  },
  {
    channel: 'live',
    created: 1536594183928,
    data: {
      media: [{
        url: "https://infomobi.page.link/sqMF" 
      }],
      contacts: [{
        birdthday: "07/17",
        displayName: "Luiza Bittencourt", 
        email: "luiza@infomobi.app", 
        firstName: "Luiza", 
        _id: "1", 
        lastName: "Bittencourt", 
        title: "Analista de Planejamento e Controle de Custos Jr.",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
      }, {
        birdthday: "07/17",
        displayName: "Jennifer Wu", 
        email: "jennifer@infomobi.app", 
        firstName: "Jennifer", 
        _id: "1", 
        lastName: "Wu",
        title: "Aux de Contabilidade",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
      }],
      picture: "https://infomobi.page.link/uGeF",
      title: "Aniversariante(s) do dia!",
    },

    type: 'anniversaries',
    id: "SCoq0mZjAlCRzDqueV3C",
    modified: 1536594183928,
    published: 1536594183928,
    isPublished: true
  }
]);

export default comments.delay(2000);