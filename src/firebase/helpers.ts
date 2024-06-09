import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getData = async (collectionName: string): Promise<DocumentData[]> => {
    const data: DocumentData[] = [];
    const ref = collection(db, collectionName);
    const snap = await getDocs(ref);

    snap.forEach(doc => {
        data.push(doc.data())
    })

    return data;
};