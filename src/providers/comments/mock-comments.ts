import { of } from 'rxjs/observable/of';

let comments = of([
  {
    author: {
      displayName: "Luiza Bittencourt", 
      email: "luiza@infomobi.app", 
      firstName: "Luiza", id: "1", 
      lastName: "Bittencourt", 
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    description: "dia de jogo",
    data: {name: "Luiza"},
    type: 'message',
    id: "SCoq7mZjAlCRzDqueV3C",
    postId: null,
    priority: -1530873217111,
    published: true
  },
  {
    author: {
      displayName: "Luiza Bittencourt", 
      email: "luiza@infomobi.app", 
      firstName: "Luiza", id: "1", 
      lastName: "Bittencourt", 
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    description: "#VaitercopanaKatrium, Os colaboradores do turno administrativo serão dispensados às 13h30 nas partidas que acontecerem às 15h.",
    data: {name: "Luiza"},
    type: 'message',
    id: "mVKMGnub13hKYWR0uOr9",
    media: "https://firebasestorage.googleapis.com/v0/b/ion-employee.appspot.com/o/3dc205af-acb5-61bd-f646-66dacc798275?alt=media&token=572f4153-6330-4125-8142-bec6984cedc8",
    postId: null,
    priority: -1530272647862,
    published: true
  },
  {
    author: {
      displayName: "Luiza Bittencourt", 
      email: "luiza@infomobi.app", 
      firstName: "Luiza", id: "1", 
      lastName: "Bittencourt", 
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    description: "Convocação de Treinamento - CIPA, Sala de Reunião Prédio Administrativo",
    data: {},
    type: 'anniversaries',
    id: "SCoq7mZjAlCRzDqueV3C",
    postId: null,
    priority: -1530272500193,
    published: true
  }
]);

export default comments;