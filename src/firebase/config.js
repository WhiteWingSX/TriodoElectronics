import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCJwYDimXNbZt4hvhrU-Y6XXtE8CaIKsDo",
    authDomain: "triodoelectronics-shop.firebaseapp.com",
    projectId: "triodoelectronics-shop",
    storageBucket: "triodoelectronics-shop.firebasestorage.app",
    messagingSenderId: "536711215440",
    appId: "1:536711215440:web:9ee0bdab426e7cf3c59455"
};

export const app = initializeApp(firebaseConfig);
