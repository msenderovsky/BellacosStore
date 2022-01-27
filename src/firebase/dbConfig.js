import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-Ulb_NbBezR07j9SSIVD2vS2JMqeo72E",
  authDomain: "bellacos-store.firebaseapp.com",
  projectId: "bellacos-store",
  storageBucket: "bellacos-store.appspot.com",
  messagingSenderId: "853051590902",
  appId: "1:853051590902:web:02d6e82d3bb339e5bd84d7"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}