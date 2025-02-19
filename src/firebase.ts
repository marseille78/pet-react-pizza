import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBp5cs8vA7RRoSzpnLD7KEtmJvlS76Ng-s",
  authDomain: "pet-react-pizza-49fba.firebaseapp.com",
  projectId: "pet-react-pizza-49fba",
  storageBucket: "pet-react-pizza-49fba.firebasestorage.app",
  messagingSenderId: "84023908584",
  appId: "1:84023908584:web:7acc04705b7ac45d12515d",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
