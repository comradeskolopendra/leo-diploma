import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyD9hXMMNc49Y309QIM28f-OoycGn7kOJH0",
    authDomain: "leo-diploma.firebaseapp.com",
    projectId: "leo-diploma",
    storageBucket: "leo-diploma.appspot.com",
    messagingSenderId: "724286866684",
    appId: "1:724286866684:web:9e407319b5643788b5c379",
    measurementId: "G-8XWZ1G6S9L"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);