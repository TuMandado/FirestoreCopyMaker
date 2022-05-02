import { defaultDb } from "./credentials";
import { firebasePetShopDb } from "./credentials";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  setDoc,
  Timestamp,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from "firebase/firestore";
import { async } from "q";

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
  // Create a random string to use as the database name
  const dbName =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  // Create a firebase app
  const firebaseApp = await initializeApp(firebaseConfig, dbName);
  const db = await getFirestore(firebaseApp, dbName);
  console.log("Firebase app and db created.", db);
  return { firebaseApp, db };
}

// export async function uploadPet(data) {
//   let uid = await createId();
//   await setDoc(doc(db, collectionRef, uid), data);
// }

export async function uploadDocument(db, collectionRef, data, id) {
  await setDoc(doc(db, collectionRef, id), data).catch((error) => {
    alert("uploadDocument-setDoc-error:", error);
    return;
  });
}

// export async function getAllPets() {
//   const querySnapshot = await getDocs(collection(db, collectionRef));
//   let array = [];
//   querySnapshot.forEach((doc) => {
//     array.push({
//       uid: doc.id,
//       data: doc.data(),
//     });
//   });
//   return pets;
// }

export async function getAllDocuments(db, collectionRef) {
  const querySnapshot = await getDocs(collection(db, collectionRef)).catch(
    (error) => {
      alert("getAllDocuments-getDocs-error:", error);
      return;
    }
  );
  let array = [];
  querySnapshot.forEach((doc) => {
    array.push({
      uid: doc.id,
      data: doc.data(),
    });
  });
  return array;
}

export async function syncCollection(db, collectionRef) {
  // Get all documents from the default database
  const defaultDocs = await getAllDocuments(firebasePetShopDb, collectionRef);
  console.log("defaultDocs:", defaultDocs);
  // upload all documents from the default database to the current database
  for (let i = 0; i < defaultDocs.length; i++) {
    await uploadDocument(
      db,
      collectionRef,
      defaultDocs[i].data,
      defaultDocs[i].uid
    ).catch((error) => {
      // Show document info :
      console.log("Document number error " + i + " : ");
      console.log("Collection : " + collectionRef);
      console.log("Document upload error: ", error);
    });
  }
}

export async function syncEverything(selectedCollections, selectedDatabases) {
  // For each database selected run createAppAndDb and then for each created database and collection run syncCollection
  for (let i = 0; i < selectedDatabases.length; i++) {
    // Create a firebase app and database
    const data = await createAppAndDb(selectedDatabases[i].firebaseConfig)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        alert("syncEverything-createAppAndDb-error:", error);
        return;
      });
    console.log("data:", data);
    console.log("data.db:", data.db);
    // For each collection selected run syncCollection
    for (let j = 0; j < selectedCollections.length; j++) {
      console.log("selectedCollections[j]:", selectedCollections[j]);
      await syncCollection(data.db, selectedCollections[j]).catch((error) => {
        alert("syncEverything-syncCollection-error:", error);
        return;
      });
    }
  }
}
