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

export async function createAppAndDb(firebaseConfig) {
  // Verify if firebaseConfig is defined with apiKey, authDomain, projectId, storageBucket, messagingSenderId and appId.
  if (
    firebaseConfig.apiKey === undefined ||
    firebaseConfig.authDomain === undefined ||
    firebaseConfig.projectId === undefined ||
    firebaseConfig.storageBucket === undefined ||
    firebaseConfig.messagingSenderId === undefined ||
    firebaseConfig.appId === undefined
  ) {
    alert("Error: Firebase config is not defined.");
    return;
  }
  const firebaseApp = await initializeApp(firebaseConfig, "secondary");
  const db = await getFirestore(firebaseApp, "secondary");

  return { firebaseApp, db };
}

export async function storageFirebaseConfig(uid, firebaseConfig) {
  // Verfify if uid is defined
  if (!uid) {
    alert("Error: uid is not defined");
    return;
  }

  // Verify if firebaseConfig is defined with apiKey, authDomain, projectId, storageBucket, messagingSenderId and appId.
  if (
    firebaseConfig.apiKey === undefined ||
    firebaseConfig.authDomain === undefined ||
    firebaseConfig.projectId === undefined ||
    firebaseConfig.storageBucket === undefined ||
    firebaseConfig.messagingSenderId === undefined ||
    firebaseConfig.appId === undefined
  ) {
    alert("Error: Firebase config is not defined.");
    return;
  }

  // Create a new firebase app with the config.
  const data = {
    uid: uid,
    firebaseConfig: firebaseConfig,
  };
  try {
    await setDoc(doc(defaultDb, "Databases Configurations", uid), data);
    return firebaseConfig;
  } catch (error) {
    alert("Error: " + error);
  }
}

export async function getStorageFirebaseConfig(uid) {
  try {
    let toReturn = await getDoc(
      doc(defaultDb, "Databases Configurations", uid)
    );
    return toReturn.data();
  } catch (error) {
    console.log("getStorageFirebaseConfig error: ", error);
  }
}

export async function getAllCollectionMapped() {
  const querySnapshot = await getDocs(collection(defaultDb, "Collections Mapped"));
  let array = [];
  querySnapshot.forEach((doc) => {
    array.push({
      uid: doc.id,
      data: doc.data(),
    });
  });
  return array;
}

export async function getCollection(uid) {
    try {
        let toReturn = await getDoc(doc(defaultDb, "Collections Mapped", uid));
        return toReturn.data();
    } catch (error) {
        console.log("getCollection error: ", error)
    }
}

const createId = async () => {
    var id = "";
    var exists = true;
    while (exists) {
        id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        exists = await checkIfExists(id);
    }
    return id;
}

const checkIfExists = async (id) => {
    var exists = false;
    await getCollection(id).then(doc => {
        if (doc) {
            exists = true;
        }
    });
    return exists;
}

export async function uploadCollection(data) {
    let uid = await createId()
    uid.toString()
    await setDoc(doc(defaultDb, "Collections Mapped", uid), data);
}
