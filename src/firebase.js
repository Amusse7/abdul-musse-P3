import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBPy3PRqS_RBTQ5lOuetJJhlb59jAi-4Mw",
    authDomain: "b-ball-hall-of-fame.firebaseapp.com",
    projectId: "b-ball-hall-of-fame",
    storageBucket: "b-ball-hall-of-fame.appspot.com",
    messagingSenderId: "163292783187",
    appId: "1:163292783187:web:ffeea6b1be92cdf8151ca6"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// let user add player to database
// we need a form on the page with text input and submit button

// set up a connection to fire so the component can mount 
// need to put the player names in a state 
// have a firebase listener and use (useEffect)

// set up jsx to print whater is in the state to the page 

//capture the literal user interaction with the page capture the keystrokes that changes the value of the text input get the users answer from there
//on submit we can take the users input captured and push it to firebase 

// add a button to delete the answers from the database 
