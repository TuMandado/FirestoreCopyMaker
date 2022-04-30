import { defaultDb } from "./credentials";
import { doc, setDoc, Timestamp, deleteDoc, getDoc, getDocs, collection, updateDoc } from "firebase/firestore";

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
