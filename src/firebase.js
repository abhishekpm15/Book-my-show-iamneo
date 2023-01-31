import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCZs2bfYfW_A9JgKZzpMbeSSpGMh8rDpbg",
  authDomain: "book-my-show-139be.firebaseapp.com",
  projectId: "book-my-show-139be",
  storageBucket: "book-my-show-139be.appspot.com",
  messagingSenderId: "101557152352",
  appId: "1:101557152352:web:3267d95533f2c66f497105"
};
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);



  