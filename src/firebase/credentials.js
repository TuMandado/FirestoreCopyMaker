// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
} from "firebase/firestore";

// Añade aquí tus credenciales
const defaultFirebaseConfig = {
  apiKey: "AIzaSyDpxwtlrQGGgUu72YRnMFsjmX_raFWO5XY",
  authDomain: "fir-copymaker.firebaseapp.com",
  projectId: "fir-copymaker",
  storageBucket: "fir-copymaker.appspot.com",
  messagingSenderId: "482283716304",
  appId: "1:482283716304:web:c02d28851a1326d58d68d5",
  measurementId: "G-2Q6C1XN70T",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const defaultFirebaseApp = initializeApp(
  defaultFirebaseConfig,
  "To Store Configs"
);
const defaultDb = getFirestore(defaultFirebaseApp, "To Store Configs");
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export { defaultFirebaseApp, defaultDb };

const firebaseConfigPetShop = {
  apiKey: "AIzaSyAcHKVuiISpf0Lq0RtyJoB-B2wSy8LwrHE",
  authDomain: "petshop-35b9a.firebaseapp.com",
  projectId: "petshop-35b9a",
  storageBucket: "petshop-35b9a.appspot.com",
  messagingSenderId: "744953839990",
  appId: "1:744953839990:web:08431cdfb31ee4a323fa57",
  measurementId: "G-44018Q639M",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebasePetShopApp = initializeApp(firebaseConfigPetShop, "PetShop");
const firebasePetShopDb = getFirestore(firebasePetShopApp, "PetShop");
