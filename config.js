import firebase from "firebase"
 var firebaseConfig = {
    apiKey: "AIzaSyC5VvT6roVjSnZQr0kiedNB2C2Mkqpj0dM",
    authDomain: "student-attendence-c23db.firebaseapp.com",
    databaseURL: "https://student-attendence-c23db.firebaseio.com",
    projectId: "student-attendence-c23db",
    storageBucket: "student-attendence-c23db.appspot.com",
    messagingSenderId: "900866226419",
    appId: "1:900866226419:web:951ac6d83caa84d5065f86",
    measurementId: "G-XPKT29QZHF"
  };
  if(!firebase.apps.lenght){
firebase.initializeApp(firebaseConfig);
  }


  export default firebase.database();