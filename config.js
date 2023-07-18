import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseConfig ={
    apiKey: "AIzaSyDQO4XqxTypRVYwMD2xJZ1nZCgjdycmgkg",
    authDomain: "test-otp-e1733.firebaseapp.com",
    projectId: "test-otp-e1733",
    storageBucket: "test-otp-e1733.appspot.com",
    messagingSenderId: "804348348038",
    appId: "1:804348348038:web:607cd9fa74eecd2108b307",
    measurementId: "G-J09CS3EW8P" 
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig); 
}