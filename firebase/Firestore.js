import  * as firebase from 'firebase';
import '@firebase/firestore';
class Firestore{
  constructor(){
    if(!firebase.apps.length){
        firebase.initializeApp({
          apiKey: "AIzaSyCnX22ROFfW8SXVYLcFFCqqMKkQq-LrCxg",
          authDomain: "cpedrink.firebaseapp.com",
          databaseURL: "https://cpedrink.firebaseio.com",
          projectId: "cpedrink",
          storageBucket: "cpedrink.appspot.com",
          messagingSenderId: "997146337679",
          appId: "1:997146337679:web:f3756157ddbd5f54dbabfa",
          measurementId: "G-4W9N9TL15C"
        }  
      )
    }
    else{
      console.log('firebase app already running...')
    }
    this.auth = firebase.auth();
  }
  addUser=(User,success,reject)=>{
    User.createdDate=firebase.firestore.FieldValue.serverTimestamp();
    firebase.firestore().collection('User').add(User)
    .then(function (docRef) {
      success(docRef);
      })
    .catch(function (error) {
      reject(error);
    });
  }
  getCurrentUser=()=>{
    this.auth.onAuthStateChanged(function(user){
      if(user){
        console.log(user)
      }
      else{
        console.log("no user")
      }
    });
  }

  createUser=(email,password,unsuccess)=>{
    this.auth.createUserWithEmailAndPassword(email,password)
    .catch(function(error){
      unsuccess(error);
    })
  }
  
}
const firestore = new Firestore();
export default firestore;