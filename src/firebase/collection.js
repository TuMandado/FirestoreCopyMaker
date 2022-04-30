import { defaultDb } from "./credentials";
import { doc, setDoc, Timestamp, deleteDoc, getDoc, getDocs, collection, updateDoc } from "firebase/firestore";

const ref = 'Collections Mapped'

export async function getCollections() {
    try {
        let toReturn = await getDoc(doc(defaultDb, ref, ref));
        console.log('getCollections', toReturn.data()["Collections Mapped"])
        return toReturn.data()["Collections Mapped"];
    } catch (error) {
        console.log("getProduct error: ", error)
    }
}

export async function editCollections(data) {
    await updateDoc(doc(defaultDb, ref, ref), data);
}