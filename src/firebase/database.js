import { defaultDb } from "./credentials";
import {
  doc,
  setDoc,
  Timestamp,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc
} from "firebase/firestore";

// The database format is:
// {
// uid: "random name",
// firebaseConfig: {
//   apiKey: "",
//   appId: "",
//   authDomain: "",
//   measurementId: "",
//   messagingSenderId: "",
//   projectId: "",
//   storageBucket: "",
//   },

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

// export async function getAllProducts(search) {
//   const querySnapshot = await getDocs(collection(db, collectionRef));
//   let array = [];
//   querySnapshot.forEach((doc) => {
//       array.push({
//           uid: doc.id,
//           data: doc.data()
//       });
//   });

export async function getAllDatabasesConfigurations() {
  const querySnapshot = await getDocs(
    collection(defaultDb, "Databases Configurations")
  );
  let array = [];
  querySnapshot.forEach((doc) => {
    array.push({
      uid: doc.id,
      firebaseConfig: doc.data().firebaseConfig,
    });
  });
  return array;
}

// export async function editProduct(uid, data) {
//   await updateDoc(doc(db, collectionRef, uid), data);
// }

export async function editDatabaseConfigurations(uid, data) {
  await updateDoc(
    doc(defaultDb, "Databases Configurations", uid),
    data
  );
}
