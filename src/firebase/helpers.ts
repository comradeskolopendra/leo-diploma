import { signInWithEmailAndPassword } from "firebase/auth";
import { DocumentData, collection, doc, getDocs, setDoc } from "firebase/firestore";

import { auth, db } from "./firebase";

import { formatErrorRu } from "../helpers";

import type { ILoginUserReturn, ISetClub } from "./types";

export const getData = async (collectionName: string): Promise<DocumentData[]> => {
    const data: DocumentData[] = [];
    const ref = collection(db, collectionName);
    const snap = await getDocs(ref);

    snap.forEach(doc => {
        data.push(doc.data())
    })

    return data;
};

export const loginUser = async (email: string, password: string): Promise<ILoginUserReturn> => {
    try {
        const req = signInWithEmailAndPassword(auth, email, password);
        const response = await req;

        return { type: "success", info: response.user.email! };
    } catch (error: any) {
        return { type: "error", info: formatErrorRu(error.code) };
    }
}

export const setData = async (data: ISetClub) => {
    setDoc(doc(db, "clubs", data.name), { ...data })
} 