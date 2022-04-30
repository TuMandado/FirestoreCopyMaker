import { defaultDb } from "./credentials";
import { doc, setDoc, Timestamp, deleteDoc, getDoc, getDocs, collection } from "firebase/firestore";

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