
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCHGwlyGLlkfpHyWE0CZop6EPHLX6f1NIQ",
  authDomain: "westhaven-solar.firebaseapp.com",
  databaseURL: "https://westhaven-solar.firebaseio.com",
  projectId: "westhaven-solar",
  storageBucket: "westhaven-solar.appspot.com",
  messagingSenderId: "802344814678"
};
    
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    
    const auth = firebase.auth();


    
    export {
      auth,
 
    };